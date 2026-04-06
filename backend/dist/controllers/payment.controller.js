"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.paymentStats = exports.updatePaymentStatus = exports.createPayment = exports.getPaymentByOrder = exports.getPayment = exports.listPayments = void 0;
const prisma_1 = require("../config/prisma");
const response_1 = require("../utils/response");
const PAYMENT_METHODS = ['Bank Transfer', 'Cash', 'Gopay', 'OVO', 'DANA', 'ShopeePay', 'QRIS'];
// GET /api/payments
const listPayments = async (req, res, next) => {
    try {
        const userId = req.user?.userId;
        const role = req.user?.role;
        const { status, page = '1', limit = '15', } = req.query;
        const skip = (parseInt(page) - 1) * parseInt(limit);
        const take = parseInt(limit);
        const where = {
            ...(role === 'RETAILER' && { order: { buyerId: userId } }),
            ...(role === 'FARMER' && { order: { sellerId: userId } }),
            ...(status && { status: status }),
        };
        const [payments, total] = await Promise.all([
            prisma_1.prisma.payment.findMany({
                where,
                skip,
                take,
                orderBy: { createdAt: 'desc' },
                include: {
                    order: {
                        select: {
                            id: true, orderNumber: true, totalAmount: true, status: true,
                            buyer: { select: { id: true, firstName: true, lastName: true, email: true } },
                            seller: { select: { id: true, firstName: true, lastName: true } },
                        },
                    },
                },
            }),
            prisma_1.prisma.payment.count({ where }),
        ]);
        (0, response_1.sendSuccess)(res, {
            payments,
            pagination: { page: parseInt(page), limit: take, total, totalPages: Math.ceil(total / take) },
        });
    }
    catch (err) {
        next(err);
    }
};
exports.listPayments = listPayments;
// GET /api/payments/:id
const getPayment = async (req, res, next) => {
    try {
        const userId = req.user?.userId;
        const role = req.user?.role;
        const { id } = req.params;
        const payment = await prisma_1.prisma.payment.findUnique({
            where: { id },
            include: {
                order: {
                    include: {
                        buyer: { select: { id: true, firstName: true, lastName: true, email: true, phone: true } },
                        seller: { select: { id: true, firstName: true, lastName: true, email: true, phone: true } },
                        orderItems: { include: { product: { select: { id: true, name: true, unit: true } } } },
                    },
                },
            },
        });
        if (!payment) {
            (0, response_1.sendError)(res, 'Payment not found', 404);
            return;
        }
        // Only buyer, seller, or admin
        if (role !== 'ADMIN' && payment.order.buyerId !== userId && payment.order.sellerId !== userId) {
            (0, response_1.sendError)(res, 'Forbidden', 403);
            return;
        }
        (0, response_1.sendSuccess)(res, { payment });
    }
    catch (err) {
        next(err);
    }
};
exports.getPayment = getPayment;
// GET /api/payments/order/:orderId — get payment by order
const getPaymentByOrder = async (req, res, next) => {
    try {
        const userId = req.user?.userId;
        const role = req.user?.role;
        const { orderId } = req.params;
        const payment = await prisma_1.prisma.payment.findUnique({
            where: { orderId },
            include: {
                order: {
                    select: {
                        id: true, orderNumber: true, totalAmount: true, status: true,
                        buyerId: true, sellerId: true,
                        buyer: { select: { id: true, firstName: true, lastName: true, email: true } },
                        seller: { select: { id: true, firstName: true, lastName: true } },
                    },
                },
            },
        });
        if (!payment) {
            (0, response_1.sendError)(res, 'No payment found for this order', 404);
            return;
        }
        if (role !== 'ADMIN' && payment.order.buyerId !== userId && payment.order.sellerId !== userId) {
            (0, response_1.sendError)(res, 'Forbidden', 403);
            return;
        }
        (0, response_1.sendSuccess)(res, { payment });
    }
    catch (err) {
        next(err);
    }
};
exports.getPaymentByOrder = getPaymentByOrder;
// POST /api/payments — Retailer submits payment for an order
const createPayment = async (req, res, next) => {
    try {
        const userId = req.user?.userId;
        const { orderId, paymentMethod } = req.body;
        if (!orderId || !paymentMethod) {
            (0, response_1.sendError)(res, 'orderId and paymentMethod are required', 400);
            return;
        }
        if (!PAYMENT_METHODS.includes(paymentMethod)) {
            (0, response_1.sendError)(res, `paymentMethod must be one of: ${PAYMENT_METHODS.join(', ')}`, 400);
            return;
        }
        const order = await prisma_1.prisma.order.findUnique({ where: { id: orderId } });
        if (!order) {
            (0, response_1.sendError)(res, 'Order not found', 404);
            return;
        }
        if (order.buyerId !== userId) {
            (0, response_1.sendError)(res, 'Only the buyer can submit payment', 403);
            return;
        }
        if (!['CONFIRMED', 'PROCESSING', 'SHIPPED', 'DELIVERED'].includes(order.status)) {
            (0, response_1.sendError)(res, 'Payment can only be submitted for confirmed or later orders', 400);
            return;
        }
        // Idempotency: return existing if already exists
        const existing = await prisma_1.prisma.payment.findUnique({ where: { orderId } });
        if (existing) {
            (0, response_1.sendSuccess)(res, { payment: existing }, 'Payment already exists for this order');
            return;
        }
        const payment = await prisma_1.prisma.payment.create({
            data: {
                orderId,
                amount: order.totalAmount,
                paymentMethod,
                status: 'PENDING',
            },
            include: {
                order: {
                    select: { id: true, orderNumber: true, totalAmount: true },
                },
            },
        });
        (0, response_1.sendSuccess)(res, { payment }, 'Payment submitted', 201);
    }
    catch (err) {
        next(err);
    }
};
exports.createPayment = createPayment;
// PATCH /api/payments/:id/status — Seller confirms/rejects, Admin overrides
const updatePaymentStatus = async (req, res, next) => {
    try {
        const userId = req.user?.userId;
        const role = req.user?.role;
        const { id } = req.params;
        const { status } = req.body;
        if (!status) {
            (0, response_1.sendError)(res, 'status is required', 400);
            return;
        }
        const validStatuses = ['PENDING', 'PAID', 'FAILED', 'REFUNDED'];
        if (!validStatuses.includes(status)) {
            (0, response_1.sendError)(res, `status must be one of: ${validStatuses.join(', ')}`, 400);
            return;
        }
        const payment = await prisma_1.prisma.payment.findUnique({
            where: { id },
            include: { order: { select: { sellerId: true, buyerId: true, status: true } } },
        });
        if (!payment) {
            (0, response_1.sendError)(res, 'Payment not found', 404);
            return;
        }
        // Sellers confirm/fail  |  Buyers can only see  |  Admin can do anything
        if (role !== 'ADMIN') {
            if (payment.order.sellerId !== userId) {
                (0, response_1.sendError)(res, 'Only the seller or admin can update payment status', 403);
                return;
            }
            // Guard transitions
            if (payment.status === 'PAID' && status !== 'REFUNDED') {
                (0, response_1.sendError)(res, 'A paid payment can only be refunded', 400);
                return;
            }
            if (['REFUNDED', 'FAILED'].includes(payment.status)) {
                (0, response_1.sendError)(res, `Cannot update a ${payment.status.toLowerCase()} payment`, 400);
                return;
            }
        }
        const paidAt = status === 'PAID' ? new Date() : payment.paidAt;
        const updated = await prisma_1.prisma.payment.update({
            where: { id },
            data: { status, paidAt },
            include: {
                order: {
                    select: {
                        id: true, orderNumber: true, totalAmount: true, status: true,
                        buyer: { select: { id: true, firstName: true, lastName: true } },
                        seller: { select: { id: true, firstName: true, lastName: true } },
                    },
                },
            },
        });
        (0, response_1.sendSuccess)(res, { payment: updated }, `Payment ${status.toLowerCase()}`);
    }
    catch (err) {
        next(err);
    }
};
exports.updatePaymentStatus = updatePaymentStatus;
// GET /api/payments/stats — Revenue summary for the current user
const paymentStats = async (req, res, next) => {
    try {
        const userId = req.user?.userId;
        const role = req.user?.role;
        const orderWhere = {
            ...(role === 'RETAILER' && { buyerId: userId }),
            ...(role === 'FARMER' && { sellerId: userId }),
        };
        const [counts, revenue, byMethod] = await Promise.all([
            // Count by status
            prisma_1.prisma.payment.groupBy({
                by: ['status'],
                where: { order: orderWhere },
                _count: { id: true },
            }),
            // Total confirmed revenue
            prisma_1.prisma.payment.aggregate({
                where: { order: orderWhere, status: 'PAID' },
                _sum: { amount: true },
            }),
            // Revenue breakdown by method
            prisma_1.prisma.payment.groupBy({
                by: ['paymentMethod'],
                where: { order: orderWhere, status: 'PAID' },
                _sum: { amount: true },
                _count: { id: true },
            }),
        ]);
        (0, response_1.sendSuccess)(res, {
            counts: Object.fromEntries(counts.map((c) => [c.status, c._count.id])),
            totalPaid: revenue._sum.amount ?? 0,
            byMethod: byMethod.map((m) => ({
                method: m.paymentMethod,
                total: m._sum.amount ?? 0,
                count: m._count.id,
            })),
        });
    }
    catch (err) {
        next(err);
    }
};
exports.paymentStats = paymentStats;
