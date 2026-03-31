import { Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import { AuthRequest } from '../types/auth.types';
import { sendSuccess, sendError } from '../utils/response';
import { PaymentStatus } from '../../generated/prisma';

const PAYMENT_METHODS = ['Bank Transfer', 'Cash', 'Gopay', 'OVO', 'DANA', 'ShopeePay', 'QRIS'];

// GET /api/payments
export const listPayments = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.userId!;
    const role   = req.user?.role;
    const {
      status,
      page  = '1',
      limit = '15',
    } = req.query as Record<string, string>;

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const take  = parseInt(limit);

    const where = {
      ...(role === 'RETAILER' && { order: { buyerId:  userId } }),
      ...(role === 'FARMER'   && { order: { sellerId: userId } }),
      ...(status && { status: status as PaymentStatus }),
    };

    const [payments, total] = await Promise.all([
      prisma.payment.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: 'desc' },
        include: {
          order: {
            select: {
              id: true, orderNumber: true, totalAmount: true, status: true,
              buyer:  { select: { id: true, firstName: true, lastName: true, email: true } },
              seller: { select: { id: true, firstName: true, lastName: true } },
            },
          },
        },
      }),
      prisma.payment.count({ where }),
    ]);

    sendSuccess(res, {
      payments,
      pagination: { page: parseInt(page), limit: take, total, totalPages: Math.ceil(total / take) },
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/payments/:id
export const getPayment = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.userId!;
    const role   = req.user?.role;
    const { id } = req.params as { id: string };

    const payment = await prisma.payment.findUnique({
      where: { id },
      include: {
        order: {
          include: {
            buyer:      { select: { id: true, firstName: true, lastName: true, email: true, phone: true } },
            seller:     { select: { id: true, firstName: true, lastName: true, email: true, phone: true } },
            orderItems: { include: { product: { select: { id: true, name: true, unit: true } } } },
          },
        },
      },
    });

    if (!payment) { sendError(res, 'Payment not found', 404); return; }

    // Only buyer, seller, or admin
    if (role !== 'ADMIN' && payment.order.buyerId !== userId && payment.order.sellerId !== userId) {
      sendError(res, 'Forbidden', 403); return;
    }

    sendSuccess(res, { payment });
  } catch (err) {
    next(err);
  }
};

// GET /api/payments/order/:orderId — get payment by order
export const getPaymentByOrder = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId   = req.user?.userId!;
    const role     = req.user?.role;
    const { orderId } = req.params as { orderId: string };

    const payment = await prisma.payment.findUnique({
      where: { orderId },
      include: {
        order: {
          select: {
            id: true, orderNumber: true, totalAmount: true, status: true,
            buyerId: true, sellerId: true,
            buyer:  { select: { id: true, firstName: true, lastName: true, email: true } },
            seller: { select: { id: true, firstName: true, lastName: true } },
          },
        },
      },
    });

    if (!payment) { sendError(res, 'No payment found for this order', 404); return; }

    if (role !== 'ADMIN' && payment.order.buyerId !== userId && payment.order.sellerId !== userId) {
      sendError(res, 'Forbidden', 403); return;
    }

    sendSuccess(res, { payment });
  } catch (err) {
    next(err);
  }
};

// POST /api/payments — Retailer submits payment for an order
export const createPayment = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.userId!;

    const { orderId, paymentMethod } = req.body as {
      orderId: string;
      paymentMethod: string;
    };

    if (!orderId || !paymentMethod) {
      sendError(res, 'orderId and paymentMethod are required', 400); return;
    }

    if (!PAYMENT_METHODS.includes(paymentMethod)) {
      sendError(res, `paymentMethod must be one of: ${PAYMENT_METHODS.join(', ')}`, 400); return;
    }

    const order = await prisma.order.findUnique({ where: { id: orderId } });
    if (!order) { sendError(res, 'Order not found', 404); return; }
    if (order.buyerId !== userId) { sendError(res, 'Only the buyer can submit payment', 403); return; }
    if (!['CONFIRMED', 'PROCESSING', 'SHIPPED', 'DELIVERED'].includes(order.status)) {
      sendError(res, 'Payment can only be submitted for confirmed or later orders', 400); return;
    }

    // Idempotency: return existing if already exists
    const existing = await prisma.payment.findUnique({ where: { orderId } });
    if (existing) {
      sendSuccess(res, { payment: existing }, 'Payment already exists for this order');
      return;
    }

    const payment = await prisma.payment.create({
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

    sendSuccess(res, { payment }, 'Payment submitted', 201);
  } catch (err) {
    next(err);
  }
};

// PATCH /api/payments/:id/status — Seller confirms/rejects, Admin overrides
export const updatePaymentStatus = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.userId!;
    const role   = req.user?.role;
    const { id } = req.params as { id: string };
    const { status } = req.body as { status: PaymentStatus };

    if (!status) { sendError(res, 'status is required', 400); return; }

    const validStatuses: PaymentStatus[] = ['PENDING', 'PAID', 'FAILED', 'REFUNDED'];
    if (!validStatuses.includes(status)) {
      sendError(res, `status must be one of: ${validStatuses.join(', ')}`, 400); return;
    }

    const payment = await prisma.payment.findUnique({
      where: { id },
      include: { order: { select: { sellerId: true, buyerId: true, status: true } } },
    });

    if (!payment) { sendError(res, 'Payment not found', 404); return; }

    // Sellers confirm/fail  |  Buyers can only see  |  Admin can do anything
    if (role !== 'ADMIN') {
      if (payment.order.sellerId !== userId) {
        sendError(res, 'Only the seller or admin can update payment status', 403); return;
      }
      // Guard transitions
      if (payment.status === 'PAID' && status !== 'REFUNDED') {
        sendError(res, 'A paid payment can only be refunded', 400); return;
      }
      if (['REFUNDED', 'FAILED'].includes(payment.status)) {
        sendError(res, `Cannot update a ${payment.status.toLowerCase()} payment`, 400); return;
      }
    }

    const paidAt = status === 'PAID' ? new Date() : payment.paidAt;

    const updated = await prisma.payment.update({
      where: { id },
      data:  { status, paidAt },
      include: {
        order: {
          select: {
            id: true, orderNumber: true, totalAmount: true, status: true,
            buyer:  { select: { id: true, firstName: true, lastName: true } },
            seller: { select: { id: true, firstName: true, lastName: true } },
          },
        },
      },
    });

    sendSuccess(res, { payment: updated }, `Payment ${status.toLowerCase()}`);
  } catch (err) {
    next(err);
  }
};

// GET /api/payments/stats — Revenue summary for the current user
export const paymentStats = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.userId!;
    const role   = req.user?.role;

    const orderWhere = {
      ...(role === 'RETAILER' && { buyerId:  userId }),
      ...(role === 'FARMER'   && { sellerId: userId }),
    };

    const [counts, revenue, byMethod] = await Promise.all([
      // Count by status
      prisma.payment.groupBy({
        by: ['status'],
        where: { order: orderWhere },
        _count: { id: true },
      }),
      // Total confirmed revenue
      prisma.payment.aggregate({
        where: { order: orderWhere, status: 'PAID' },
        _sum:  { amount: true },
      }),
      // Revenue breakdown by method
      prisma.payment.groupBy({
        by: ['paymentMethod'],
        where: { order: orderWhere, status: 'PAID' },
        _sum:   { amount: true },
        _count: { id: true },
      }),
    ]);

    sendSuccess(res, {
      counts:    Object.fromEntries(counts.map((c) => [c.status, c._count.id])),
      totalPaid: revenue._sum.amount ?? 0,
      byMethod:  byMethod.map((m) => ({
        method: m.paymentMethod,
        total:  m._sum.amount ?? 0,
        count:  m._count.id,
      })),
    });
  } catch (err) {
    next(err);
  }
};
