"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderStats = exports.updateOrder = exports.updateOrderStatus = exports.createOrder = exports.getOrder = exports.listOrders = void 0;
const prisma_1 = require("../config/prisma");
const response_1 = require("../utils/response");
// ── Helpers ──────────────────────────────────────────────────
const makeOrderNumber = () => `ORD-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;
// Valid status transitions per role
const ALLOWED_TRANSITIONS = {
    PENDING: ['CONFIRMED', 'CANCELLED'],
    CONFIRMED: ['PROCESSING', 'CANCELLED'],
    PROCESSING: ['SHIPPED', 'CANCELLED'],
    SHIPPED: ['DELIVERED'],
    DELIVERED: [],
    CANCELLED: [],
};
// GET /api/orders
const listOrders = async (req, res, next) => {
    try {
        const userId = req.user?.userId;
        const role = req.user?.role;
        const { status, page = '1', limit = '15', } = req.query;
        const skip = (parseInt(page) - 1) * parseInt(limit);
        const take = parseInt(limit);
        // Scope: buyers see their purchases, sellers see their sales, admin sees all
        const where = {
            ...(role === 'RETAILER' && { buyerId: userId }),
            ...(role === 'FARMER' && { sellerId: userId }),
            ...(status && { status: status }),
        };
        const [orders, total] = await Promise.all([
            prisma_1.prisma.order.findMany({
                where,
                skip,
                take,
                orderBy: { createdAt: 'desc' },
                include: {
                    buyer: { select: { id: true, firstName: true, lastName: true, email: true } },
                    seller: { select: { id: true, firstName: true, lastName: true, email: true } },
                    orderItems: {
                        include: {
                            product: { select: { id: true, name: true, category: true, unit: true, imageUrl: true } },
                        },
                    },
                    shipment: { select: { id: true, status: true, trackingNumber: true, estimatedDelivery: true } },
                    payment: { select: { id: true, status: true, amount: true, paymentMethod: true } },
                },
            }),
            prisma_1.prisma.order.count({ where }),
        ]);
        (0, response_1.sendSuccess)(res, {
            orders,
            pagination: { page: parseInt(page), limit: take, total, totalPages: Math.ceil(total / take) },
        });
    }
    catch (err) {
        next(err);
    }
};
exports.listOrders = listOrders;
// GET /api/orders/:id
const getOrder = async (req, res, next) => {
    try {
        const userId = req.user?.userId;
        const role = req.user?.role;
        const { id } = req.params;
        const order = await prisma_1.prisma.order.findUnique({
            where: { id },
            include: {
                buyer: { select: { id: true, firstName: true, lastName: true, email: true, phone: true } },
                seller: { select: { id: true, firstName: true, lastName: true, email: true, phone: true } },
                orderItems: {
                    include: {
                        product: {
                            select: { id: true, name: true, category: true, unit: true, unitPrice: true, imageUrl: true },
                        },
                    },
                },
                shipment: true,
                payment: true,
            },
        });
        if (!order) {
            (0, response_1.sendError)(res, 'Order not found', 404);
            return;
        }
        // Authorization: only buyer, seller, or admin can view
        if (role !== 'ADMIN' && order.buyerId !== userId && order.sellerId !== userId) {
            (0, response_1.sendError)(res, 'Forbidden', 403);
            return;
        }
        (0, response_1.sendSuccess)(res, { order });
    }
    catch (err) {
        next(err);
    }
};
exports.getOrder = getOrder;
// POST /api/orders — Retailers create orders
const createOrder = async (req, res, next) => {
    try {
        const buyerId = req.user?.userId;
        const { items, notes, } = req.body;
        if (!Array.isArray(items) || items.length === 0) {
            (0, response_1.sendError)(res, 'At least one order item is required', 400);
            return;
        }
        // Fetch all products in one query
        const productIds = [...new Set(items.map((i) => i.productId))];
        const products = await prisma_1.prisma.product.findMany({
            where: { id: { in: productIds }, isActive: true },
            include: { farm: { select: { userId: true } } },
        });
        if (products.length !== productIds.length) {
            (0, response_1.sendError)(res, 'One or more products not found or inactive', 400);
            return;
        }
        // All items must belong to the same seller (one order per seller)
        const sellerIds = [...new Set(products.map((p) => p.farm.userId))];
        if (sellerIds.length > 1) {
            (0, response_1.sendError)(res, 'All items in an order must come from the same farm/seller', 400);
            return;
        }
        const sellerId = sellerIds[0];
        if (sellerId === buyerId) {
            (0, response_1.sendError)(res, 'You cannot order from yourself', 400);
            return;
        }
        // Build line items with subtotals
        const productMap = Object.fromEntries(products.map((p) => [p.id, p]));
        let totalAmount = 0;
        const lineItems = items.map((item) => {
            const product = productMap[item.productId];
            const quantity = parseFloat(String(item.quantity));
            if (quantity <= 0)
                throw new Error(`Quantity for ${product.name} must be positive`);
            const subtotal = product.unitPrice * quantity;
            totalAmount += subtotal;
            return {
                productId: item.productId,
                quantity,
                unitPrice: product.unitPrice,
                subtotal,
            };
        });
        const order = await prisma_1.prisma.order.create({
            data: {
                orderNumber: makeOrderNumber(),
                buyerId,
                sellerId,
                totalAmount,
                notes,
                orderItems: { create: lineItems },
            },
            include: {
                buyer: { select: { id: true, firstName: true, lastName: true, email: true } },
                seller: { select: { id: true, firstName: true, lastName: true, email: true } },
                orderItems: {
                    include: {
                        product: { select: { id: true, name: true, unit: true, category: true } },
                    },
                },
            },
        });
        (0, response_1.sendSuccess)(res, { order }, 'Order placed successfully', 201);
    }
    catch (err) {
        if (err instanceof Error && err.message.includes('must be positive')) {
            (0, response_1.sendError)(res, err.message, 400);
            return;
        }
        next(err);
    }
};
exports.createOrder = createOrder;
// PATCH /api/orders/:id/status — Update order status
const updateOrderStatus = async (req, res, next) => {
    try {
        const userId = req.user?.userId;
        const role = req.user?.role;
        const { id } = req.params;
        const { status } = req.body;
        if (!status) {
            (0, response_1.sendError)(res, 'status is required', 400);
            return;
        }
        const order = await prisma_1.prisma.order.findUnique({ where: { id } });
        if (!order) {
            (0, response_1.sendError)(res, 'Order not found', 404);
            return;
        }
        // Only seller confirms/processes/ships, buyer/seller can cancel, admin can do anything
        if (role !== 'ADMIN') {
            if (order.buyerId !== userId && order.sellerId !== userId) {
                (0, response_1.sendError)(res, 'Forbidden', 403);
                return;
            }
            // Buyers can only cancel
            if (order.buyerId === userId && status !== 'CANCELLED') {
                (0, response_1.sendError)(res, 'Buyers can only cancel orders', 403);
                return;
            }
        }
        // Validate transition
        const allowed = ALLOWED_TRANSITIONS[order.status] ?? [];
        if (!allowed.includes(status)) {
            (0, response_1.sendError)(res, `Cannot transition from ${order.status} to ${status}`, 400);
            return;
        }
        const updated = await prisma_1.prisma.order.update({
            where: { id },
            data: { status },
            include: {
                buyer: { select: { id: true, firstName: true, lastName: true } },
                seller: { select: { id: true, firstName: true, lastName: true } },
                orderItems: { include: { product: { select: { id: true, name: true, unit: true } } } },
                shipment: { select: { id: true, status: true, trackingNumber: true } },
                payment: { select: { id: true, status: true } },
            },
        });
        (0, response_1.sendSuccess)(res, { order: updated }, `Order ${status.toLowerCase()}`);
    }
    catch (err) {
        next(err);
    }
};
exports.updateOrderStatus = updateOrderStatus;
// PATCH /api/orders/:id — Update notes (buyer only, PENDING only)
const updateOrder = async (req, res, next) => {
    try {
        const userId = req.user?.userId;
        const { id } = req.params;
        const { notes } = req.body;
        const order = await prisma_1.prisma.order.findUnique({ where: { id } });
        if (!order) {
            (0, response_1.sendError)(res, 'Order not found', 404);
            return;
        }
        if (order.buyerId !== userId) {
            (0, response_1.sendError)(res, 'Forbidden', 403);
            return;
        }
        if (order.status !== 'PENDING') {
            (0, response_1.sendError)(res, 'Can only edit notes on PENDING orders', 400);
            return;
        }
        const updated = await prisma_1.prisma.order.update({ where: { id }, data: { notes } });
        (0, response_1.sendSuccess)(res, { order: updated }, 'Order updated');
    }
    catch (err) {
        next(err);
    }
};
exports.updateOrder = updateOrder;
// GET /api/orders/stats — summary counts per status for the current user
const orderStats = async (req, res, next) => {
    try {
        const userId = req.user?.userId;
        const role = req.user?.role;
        const where = {
            ...(role === 'RETAILER' && { buyerId: userId }),
            ...(role === 'FARMER' && { sellerId: userId }),
        };
        const counts = await prisma_1.prisma.order.groupBy({
            by: ['status'],
            where,
            _count: { id: true },
        });
        const totalAmount = await prisma_1.prisma.order.aggregate({
            where: { ...where, status: 'DELIVERED' },
            _sum: { totalAmount: true },
        });
        const stats = Object.fromEntries(counts.map((c) => [c.status, c._count.id]));
        (0, response_1.sendSuccess)(res, {
            stats,
            deliveredRevenue: totalAmount._sum.totalAmount ?? 0,
        });
    }
    catch (err) {
        next(err);
    }
};
exports.orderStats = orderStats;
