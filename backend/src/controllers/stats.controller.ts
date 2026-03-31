import { Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import { AuthRequest } from '../types/auth.types';
import { sendSuccess, sendError } from '../utils/response';

// GET /api/dashboard — role-aware stats for the logged-in user
export const dashboardStats = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.userId!;
    const role   = req.user?.role;

    // Base scopes per role
    const orderWhere: Record<string, unknown> = {};
    if (role === 'FARMER')   orderWhere.sellerId = userId;
    if (role === 'RETAILER') orderWhere.buyerId  = userId;

    const paymentWhere: Record<string, unknown> = {};
    if (role === 'FARMER')   paymentWhere.order = { sellerId: userId };
    if (role === 'RETAILER') paymentWhere.order = { buyerId:  userId };

    // Common: order status counts + revenue
    const [orderCounts, revenueAgg, recentOrders] = await Promise.all([
      prisma.order.groupBy({
        by:    ['status'],
        where: orderWhere,
        _count: { id: true },
      }),
      prisma.order.aggregate({
        where: { ...orderWhere, status: 'DELIVERED' },
        _sum:  { totalAmount: true },
      }),
      prisma.order.findMany({
        where:   orderWhere,
        take:    6,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true, orderNumber: true, status: true, totalAmount: true, createdAt: true,
          buyer:      { select: { firstName: true, lastName: true } },
          seller:     { select: { firstName: true, lastName: true } },
          orderItems: { take: 1, select: { product: { select: { name: true } } } },
        },
      }),
    ]);

    const orderStatusMap = Object.fromEntries(orderCounts.map((c) => [c.status, c._count.id]));
    const totalRevenue   = revenueAgg._sum.totalAmount ?? 0;

    // Role-specific extra stats
    let extra: Record<string, unknown> = {};

    if (role === 'FARMER') {
      const farm = await prisma.farm.findUnique({ where: { userId } });
      if (!farm) { sendError(res, 'Farm profile not found', 403); return; }

      const [productCount, inventoryCount, lowStockCount, pendingPayments, expiredInventory] = await Promise.all([
        prisma.product.count({ where: { farmId: farm.id, isActive: true } }),
        prisma.inventory.count({ where: { farmId: farm.id } }),
        prisma.inventory.count({ where: { farmId: farm.id, quantity: { lt: 10 } } }),
        prisma.payment.count({ where: { ...paymentWhere as object, status: 'PENDING' } }),
        prisma.inventory.count({ where: { farmId: farm.id, expiryDate: { lt: new Date() } } }),
      ]);

      extra = { productCount, inventoryCount, lowStockCount, pendingPayments, expiredInventory };

    } else if (role === 'RETAILER') {
      const [pendingPayments, activeOrders, totalSpent] = await Promise.all([
        prisma.payment.count({ where: { ...paymentWhere as object, status: 'PENDING' } }),
        prisma.order.count({ where: { buyerId: userId, status: { in: ['PENDING', 'CONFIRMED', 'PROCESSING', 'SHIPPED'] } } }),
        prisma.payment.aggregate({ where: { ...paymentWhere as object, status: 'PAID' }, _sum: { amount: true } }),
      ]);

      extra = { pendingPayments, activeOrders, totalSpent: totalSpent._sum.amount ?? 0 };

    } else if (role === 'ADMIN') {
      const [usersByRole, totalProducts, totalInventory, systemRevenue, pendingPayments, recentUsers] = await Promise.all([
        prisma.user.groupBy({ by: ['role'], _count: { id: true } }),
        prisma.product.count({ where: { isActive: true } }),
        prisma.inventory.count(),
        prisma.payment.aggregate({ where: { status: 'PAID' }, _sum: { amount: true } }),
        prisma.payment.count({ where: { status: 'PENDING' } }),
        prisma.user.findMany({
          take: 5, orderBy: { createdAt: 'desc' },
          select: { id: true, firstName: true, lastName: true, email: true, role: true, createdAt: true },
        }),
      ]);

      extra = {
        usersByRole:   Object.fromEntries(usersByRole.map((u) => [u.role, u._count.id])),
        totalProducts,
        totalInventory,
        systemRevenue: systemRevenue._sum.amount ?? 0,
        pendingPayments,
        recentUsers,
      };
    }

    sendSuccess(res, {
      orderStatusMap,
      totalRevenue,
      recentOrders,
      ...extra,
    });
  } catch (err) {
    next(err);
  }
};
