"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dashboardStats = void 0;
const prisma_1 = require("../config/prisma");
const response_1 = require("../utils/response");
// GET /api/dashboard — role-aware stats for the logged-in user
const dashboardStats = async (req, res, next) => {
    try {
        const userId = req.user?.userId;
        const role = req.user?.role;
        // Base scopes per role
        const orderWhere = {};
        if (role === 'FARMER')
            orderWhere.sellerId = userId;
        if (role === 'RETAILER')
            orderWhere.buyerId = userId;
        const paymentWhere = {};
        if (role === 'FARMER')
            paymentWhere.order = { sellerId: userId };
        if (role === 'RETAILER')
            paymentWhere.order = { buyerId: userId };
        // Common: order status counts + revenue
        const [orderCounts, revenueAgg, recentOrders] = await Promise.all([
            prisma_1.prisma.order.groupBy({
                by: ['status'],
                where: orderWhere,
                _count: { id: true },
            }),
            prisma_1.prisma.order.aggregate({
                where: { ...orderWhere, status: 'DELIVERED' },
                _sum: { totalAmount: true },
            }),
            prisma_1.prisma.order.findMany({
                where: orderWhere,
                take: 6,
                orderBy: { createdAt: 'desc' },
                select: {
                    id: true, orderNumber: true, status: true, totalAmount: true, createdAt: true,
                    buyer: { select: { firstName: true, lastName: true } },
                    seller: { select: { firstName: true, lastName: true } },
                    orderItems: { take: 1, select: { product: { select: { name: true } } } },
                },
            }),
        ]);
        const orderStatusMap = Object.fromEntries(orderCounts.map((c) => [c.status, c._count.id]));
        const totalRevenue = revenueAgg._sum.totalAmount ?? 0;
        // Role-specific extra stats
        let extra = {};
        if (role === 'FARMER') {
            const farm = await prisma_1.prisma.farm.findUnique({ where: { userId } });
            if (!farm) {
                (0, response_1.sendError)(res, 'Farm profile not found', 403);
                return;
            }
            const [productCount, inventoryCount, lowStockCount, pendingPayments, expiredInventory] = await Promise.all([
                prisma_1.prisma.product.count({ where: { farmId: farm.id, isActive: true } }),
                prisma_1.prisma.inventory.count({ where: { farmId: farm.id } }),
                prisma_1.prisma.inventory.count({ where: { farmId: farm.id, quantity: { lt: 10 } } }),
                prisma_1.prisma.payment.count({ where: { ...paymentWhere, status: 'PENDING' } }),
                prisma_1.prisma.inventory.count({ where: { farmId: farm.id, expiryDate: { lt: new Date() } } }),
            ]);
            extra = { productCount, inventoryCount, lowStockCount, pendingPayments, expiredInventory };
        }
        else if (role === 'RETAILER') {
            const [pendingPayments, activeOrders, totalSpent] = await Promise.all([
                prisma_1.prisma.payment.count({ where: { ...paymentWhere, status: 'PENDING' } }),
                prisma_1.prisma.order.count({ where: { buyerId: userId, status: { in: ['PENDING', 'CONFIRMED', 'PROCESSING', 'SHIPPED'] } } }),
                prisma_1.prisma.payment.aggregate({ where: { ...paymentWhere, status: 'PAID' }, _sum: { amount: true } }),
            ]);
            extra = { pendingPayments, activeOrders, totalSpent: totalSpent._sum.amount ?? 0 };
        }
        else if (role === 'ADMIN') {
            const [usersByRole, totalProducts, totalInventory, systemRevenue, pendingPayments, recentUsers] = await Promise.all([
                prisma_1.prisma.user.groupBy({ by: ['role'], _count: { id: true } }),
                prisma_1.prisma.product.count({ where: { isActive: true } }),
                prisma_1.prisma.inventory.count(),
                prisma_1.prisma.payment.aggregate({ where: { status: 'PAID' }, _sum: { amount: true } }),
                prisma_1.prisma.payment.count({ where: { status: 'PENDING' } }),
                prisma_1.prisma.user.findMany({
                    take: 5, orderBy: { createdAt: 'desc' },
                    select: { id: true, firstName: true, lastName: true, email: true, role: true, createdAt: true },
                }),
            ]);
            extra = {
                usersByRole: Object.fromEntries(usersByRole.map((u) => [u.role, u._count.id])),
                totalProducts,
                totalInventory,
                systemRevenue: systemRevenue._sum.amount ?? 0,
                pendingPayments,
                recentUsers,
            };
        }
        (0, response_1.sendSuccess)(res, {
            orderStatusMap,
            totalRevenue,
            recentOrders,
            ...extra,
        });
    }
    catch (err) {
        next(err);
    }
};
exports.dashboardStats = dashboardStats;
