"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.systemStats = exports.toggleUserActive = exports.listUsers = void 0;
const prisma_1 = require("../config/prisma");
const response_1 = require("../utils/response");
// GET /api/admin/users
const listUsers = async (req, res, next) => {
    try {
        const { search, role, page = '1', limit = '20', } = req.query;
        const skip = (parseInt(page) - 1) * parseInt(limit);
        const take = parseInt(limit);
        const where = {
            ...(role && { role: role }),
            ...(search && {
                OR: [
                    { email: { contains: search, mode: 'insensitive' } },
                    { firstName: { contains: search, mode: 'insensitive' } },
                    { lastName: { contains: search, mode: 'insensitive' } },
                ],
            }),
        };
        const [users, total] = await Promise.all([
            prisma_1.prisma.user.findMany({
                where,
                skip,
                take,
                orderBy: { createdAt: 'desc' },
                select: {
                    id: true, email: true, firstName: true, lastName: true,
                    role: true, isActive: true, emailVerified: true, createdAt: true,
                    farm: { select: { id: true, name: true, city: true, province: true } },
                    retailer: { select: { id: true, storeName: true, city: true } },
                    distributor: { select: { id: true, companyName: true, city: true } },
                },
            }),
            prisma_1.prisma.user.count({ where }),
        ]);
        (0, response_1.sendSuccess)(res, {
            users,
            pagination: { page: parseInt(page), limit: take, total, totalPages: Math.ceil(total / take) },
        });
    }
    catch (err) {
        next(err);
    }
};
exports.listUsers = listUsers;
// PATCH /api/admin/users/:id/toggle — toggle isActive
const toggleUserActive = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await prisma_1.prisma.user.findUnique({ where: { id } });
        if (!user) {
            (0, response_1.sendError)(res, 'User not found', 404);
            return;
        }
        // Prevent admin from deactivating themselves
        if (id === req.user?.userId) {
            (0, response_1.sendError)(res, 'Cannot deactivate your own account', 400);
            return;
        }
        const updated = await prisma_1.prisma.user.update({
            where: { id },
            data: { isActive: !user.isActive },
            select: { id: true, email: true, firstName: true, lastName: true, isActive: true, role: true },
        });
        (0, response_1.sendSuccess)(res, { user: updated }, `User ${updated.isActive ? 'activated' : 'deactivated'}`);
    }
    catch (err) {
        next(err);
    }
};
exports.toggleUserActive = toggleUserActive;
// GET /api/admin/stats — system-wide aggregates
const systemStats = async (req, res, next) => {
    try {
        const [usersByRole, totalFarms, totalOrders, systemRevenue, totalInventory, ordersByStatus, paymentsByStatus, topFarmsByRevenue,] = await Promise.all([
            prisma_1.prisma.user.groupBy({ by: ['role'], _count: { id: true } }),
            prisma_1.prisma.farm.count(),
            prisma_1.prisma.order.count(),
            prisma_1.prisma.payment.aggregate({ where: { status: 'PAID' }, _sum: { amount: true } }),
            prisma_1.prisma.inventory.count(),
            prisma_1.prisma.order.groupBy({ by: ['status'], _count: { id: true } }),
            prisma_1.prisma.payment.groupBy({ by: ['status'], _count: { id: true }, _sum: { amount: true } }),
            // Top 5 farms by delivered revenue
            prisma_1.prisma.order.groupBy({
                by: ['sellerId'],
                where: { status: 'DELIVERED' },
                _sum: { totalAmount: true },
                _count: { id: true },
                orderBy: { _sum: { totalAmount: 'desc' } },
                take: 5,
            }),
        ]);
        // Enrich top farms with user names
        const sellerIds = topFarmsByRevenue.map((f) => f.sellerId);
        const sellers = await prisma_1.prisma.user.findMany({
            where: { id: { in: sellerIds } },
            select: { id: true, firstName: true, lastName: true, farm: { select: { name: true } } },
        });
        const sellerMap = Object.fromEntries(sellers.map((s) => [s.id, s]));
        (0, response_1.sendSuccess)(res, {
            usersByRole: Object.fromEntries(usersByRole.map((u) => [u.role, u._count.id])),
            totalFarms,
            totalOrders,
            totalInventory,
            systemRevenue: systemRevenue._sum.amount ?? 0,
            ordersByStatus: Object.fromEntries(ordersByStatus.map((o) => [o.status, o._count.id])),
            paymentsByStatus: paymentsByStatus.map((p) => ({
                status: p.status, count: p._count.id, amount: p._sum.amount ?? 0,
            })),
            topFarmsByRevenue: topFarmsByRevenue.map((f) => ({
                seller: sellerMap[f.sellerId],
                revenue: f._sum.totalAmount ?? 0,
                orders: f._count.id,
            })),
        });
    }
    catch (err) {
        next(err);
    }
};
exports.systemStats = systemStats;
