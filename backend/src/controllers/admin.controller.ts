import { Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import { AuthRequest } from '../types/auth.types';
import { sendSuccess, sendError } from '../utils/response';
import { UserRole } from '../../generated/prisma';

// GET /api/admin/users
export const listUsers = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const {
      search,
      role,
      page  = '1',
      limit = '20',
    } = req.query as Record<string, string>;

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const take  = parseInt(limit);

    const where = {
      ...(role && { role: role as UserRole }),
      ...(search && {
        OR: [
          { email:     { contains: search, mode: 'insensitive' as const } },
          { firstName: { contains: search, mode: 'insensitive' as const } },
          { lastName:  { contains: search, mode: 'insensitive' as const } },
        ],
      }),
    };

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: 'desc' },
        select: {
          id: true, email: true, firstName: true, lastName: true,
          role: true, isActive: true, emailVerified: true, createdAt: true,
          farm:        { select: { id: true, name: true, city: true, province: true } },
          retailer:    { select: { id: true, storeName: true, city: true } },
          distributor: { select: { id: true, companyName: true, city: true } },
        },
      }),
      prisma.user.count({ where }),
    ]);

    sendSuccess(res, {
      users,
      pagination: { page: parseInt(page), limit: take, total, totalPages: Math.ceil(total / take) },
    });
  } catch (err) {
    next(err);
  }
};

// PATCH /api/admin/users/:id/toggle — toggle isActive
export const toggleUserActive = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params as { id: string };

    const user = await prisma.user.findUnique({ where: { id } });
    if (!user) { sendError(res, 'User not found', 404); return; }

    // Prevent admin from deactivating themselves
    if (id === req.user?.userId) {
      sendError(res, 'Cannot deactivate your own account', 400); return;
    }

    const updated = await prisma.user.update({
      where: { id },
      data:  { isActive: !user.isActive },
      select: { id: true, email: true, firstName: true, lastName: true, isActive: true, role: true },
    });

    sendSuccess(res, { user: updated }, `User ${updated.isActive ? 'activated' : 'deactivated'}`);
  } catch (err) {
    next(err);
  }
};

// GET /api/admin/stats — system-wide aggregates
export const systemStats = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const [
      usersByRole,
      totalFarms,
      totalOrders,
      systemRevenue,
      totalInventory,
      ordersByStatus,
      paymentsByStatus,
      topFarmsByRevenue,
    ] = await Promise.all([
      prisma.user.groupBy({ by: ['role'], _count: { id: true } }),
      prisma.farm.count(),
      prisma.order.count(),
      prisma.payment.aggregate({ where: { status: 'PAID' }, _sum: { amount: true } }),
      prisma.inventory.count(),
      prisma.order.groupBy({ by: ['status'], _count: { id: true } }),
      prisma.payment.groupBy({ by: ['status'], _count: { id: true }, _sum: { amount: true } }),
      // Top 5 farms by delivered revenue
      prisma.order.groupBy({
        by:    ['sellerId'],
        where: { status: 'DELIVERED' },
        _sum:  { totalAmount: true },
        _count: { id: true },
        orderBy: { _sum: { totalAmount: 'desc' } },
        take: 5,
      }),
    ]);

    // Enrich top farms with user names
    const sellerIds = topFarmsByRevenue.map((f) => f.sellerId);
    const sellers   = await prisma.user.findMany({
      where:  { id: { in: sellerIds } },
      select: { id: true, firstName: true, lastName: true, farm: { select: { name: true } } },
    });
    const sellerMap = Object.fromEntries(sellers.map((s) => [s.id, s]));

    sendSuccess(res, {
      usersByRole:     Object.fromEntries(usersByRole.map((u) => [u.role, u._count.id])),
      totalFarms,
      totalOrders,
      totalInventory,
      systemRevenue:   systemRevenue._sum.amount ?? 0,
      ordersByStatus:  Object.fromEntries(ordersByStatus.map((o) => [o.status, o._count.id])),
      paymentsByStatus: paymentsByStatus.map((p) => ({
        status: p.status, count: p._count.id, amount: p._sum.amount ?? 0,
      })),
      topFarmsByRevenue: topFarmsByRevenue.map((f) => ({
        seller:   sellerMap[f.sellerId],
        revenue:  f._sum.totalAmount ?? 0,
        orders:   f._count.id,
      })),
    });
  } catch (err) {
    next(err);
  }
};
