import { Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import { AuthRequest } from '../types/auth.types';
import { sendSuccess, sendError } from '../utils/response';
import { OrderStatus } from '../../generated/prisma';

// ── Helpers ──────────────────────────────────────────────────
const makeOrderNumber = () =>
  `ORD-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;

// Valid status transitions per role
const ALLOWED_TRANSITIONS: Record<string, OrderStatus[]> = {
  PENDING:    ['CONFIRMED', 'CANCELLED'],
  CONFIRMED:  ['PROCESSING', 'CANCELLED'],
  PROCESSING: ['SHIPPED', 'CANCELLED'],
  SHIPPED:    ['DELIVERED'],
  DELIVERED:  [],
  CANCELLED:  [],
};

// GET /api/orders
export const listOrders = async (
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

    // Scope: buyers see their purchases, sellers see their sales, admin sees all
    const where = {
      ...(role === 'RETAILER' && { buyerId:  userId }),
      ...(role === 'FARMER'   && { sellerId: userId }),
      ...(status && { status: status as OrderStatus }),
    };

    const [orders, total] = await Promise.all([
      prisma.order.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: 'desc' },
        include: {
          buyer:      { select: { id: true, firstName: true, lastName: true, email: true } },
          seller:     { select: { id: true, firstName: true, lastName: true, email: true } },
          orderItems: {
            include: {
              product: { select: { id: true, name: true, category: true, unit: true, imageUrl: true } },
            },
          },
          shipment: { select: { id: true, status: true, trackingNumber: true, estimatedDelivery: true } },
          payment:  { select: { id: true, status: true, amount: true, paymentMethod: true } },
        },
      }),
      prisma.order.count({ where }),
    ]);

    sendSuccess(res, {
      orders,
      pagination: { page: parseInt(page), limit: take, total, totalPages: Math.ceil(total / take) },
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/orders/:id
export const getOrder = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.userId!;
    const role   = req.user?.role;
    const { id } = req.params as { id: string };

    const order = await prisma.order.findUnique({
      where: { id },
      include: {
        buyer:      { select: { id: true, firstName: true, lastName: true, email: true, phone: true } },
        seller:     { select: { id: true, firstName: true, lastName: true, email: true, phone: true } },
        orderItems: {
          include: {
            product: {
              select: { id: true, name: true, category: true, unit: true, unitPrice: true, imageUrl: true },
            },
          },
        },
        shipment: true,
        payment:  true,
      },
    });

    if (!order) { sendError(res, 'Order not found', 404); return; }

    // Authorization: only buyer, seller, or admin can view
    if (role !== 'ADMIN' && order.buyerId !== userId && order.sellerId !== userId) {
      sendError(res, 'Forbidden', 403); return;
    }

    sendSuccess(res, { order });
  } catch (err) {
    next(err);
  }
};

// POST /api/orders — Retailers create orders
export const createOrder = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const buyerId = req.user?.userId!;

    const {
      items,
      notes,
    } = req.body as {
      items: { productId: string; quantity: number }[];
      notes?: string;
    };

    if (!Array.isArray(items) || items.length === 0) {
      sendError(res, 'At least one order item is required', 400); return;
    }

    // Fetch all products in one query
    const productIds = [...new Set(items.map((i) => i.productId))];
    const products   = await prisma.product.findMany({
      where: { id: { in: productIds }, isActive: true },
      include: { farm: { select: { userId: true } } },
    });

    if (products.length !== productIds.length) {
      sendError(res, 'One or more products not found or inactive', 400); return;
    }

    // All items must belong to the same seller (one order per seller)
    const sellerIds = [...new Set(products.map((p) => p.farm.userId))];
    if (sellerIds.length > 1) {
      sendError(res, 'All items in an order must come from the same farm/seller', 400); return;
    }
    const sellerId = sellerIds[0];

    if (sellerId === buyerId) {
      sendError(res, 'You cannot order from yourself', 400); return;
    }

    // Build line items with subtotals
    const productMap = Object.fromEntries(products.map((p) => [p.id, p]));
    let totalAmount  = 0;

    const lineItems = items.map((item) => {
      const product  = productMap[item.productId];
      const quantity = parseFloat(String(item.quantity));
      if (quantity <= 0) throw new Error(`Quantity for ${product.name} must be positive`);
      const subtotal = product.unitPrice * quantity;
      totalAmount += subtotal;
      return {
        productId: item.productId,
        quantity,
        unitPrice: product.unitPrice,
        subtotal,
      };
    });

    const order = await prisma.order.create({
      data: {
        orderNumber: makeOrderNumber(),
        buyerId,
        sellerId,
        totalAmount,
        notes,
        orderItems: { create: lineItems },
      },
      include: {
        buyer:  { select: { id: true, firstName: true, lastName: true, email: true } },
        seller: { select: { id: true, firstName: true, lastName: true, email: true } },
        orderItems: {
          include: {
            product: { select: { id: true, name: true, unit: true, category: true } },
          },
        },
      },
    });

    sendSuccess(res, { order }, 'Order placed successfully', 201);
  } catch (err: unknown) {
    if (err instanceof Error && err.message.includes('must be positive')) {
      sendError(res, err.message, 400); return;
    }
    next(err);
  }
};

// PATCH /api/orders/:id/status — Update order status
export const updateOrderStatus = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.userId!;
    const role   = req.user?.role;
    const { id } = req.params as { id: string };
    const { status } = req.body as { status: OrderStatus };

    if (!status) { sendError(res, 'status is required', 400); return; }

    const order = await prisma.order.findUnique({ where: { id } });
    if (!order) { sendError(res, 'Order not found', 404); return; }

    // Only seller confirms/processes/ships, buyer/seller can cancel, admin can do anything
    if (role !== 'ADMIN') {
      if (order.buyerId !== userId && order.sellerId !== userId) {
        sendError(res, 'Forbidden', 403); return;
      }

      // Buyers can only cancel
      if (order.buyerId === userId && status !== 'CANCELLED') {
        sendError(res, 'Buyers can only cancel orders', 403); return;
      }
    }

    // Validate transition
    const allowed = ALLOWED_TRANSITIONS[order.status] ?? [];
    if (!allowed.includes(status)) {
      sendError(res, `Cannot transition from ${order.status} to ${status}`, 400); return;
    }

    const updated = await prisma.order.update({
      where: { id },
      data:  { status },
      include: {
        buyer:      { select: { id: true, firstName: true, lastName: true } },
        seller:     { select: { id: true, firstName: true, lastName: true } },
        orderItems: { include: { product: { select: { id: true, name: true, unit: true } } } },
        shipment:   { select: { id: true, status: true, trackingNumber: true } },
        payment:    { select: { id: true, status: true } },
      },
    });

    sendSuccess(res, { order: updated }, `Order ${status.toLowerCase()}`);
  } catch (err) {
    next(err);
  }
};

// PATCH /api/orders/:id — Update notes (buyer only, PENDING only)
export const updateOrder = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.userId!;
    const { id } = req.params as { id: string };
    const { notes } = req.body as { notes?: string };

    const order = await prisma.order.findUnique({ where: { id } });
    if (!order) { sendError(res, 'Order not found', 404); return; }
    if (order.buyerId !== userId) { sendError(res, 'Forbidden', 403); return; }
    if (order.status !== 'PENDING') {
      sendError(res, 'Can only edit notes on PENDING orders', 400); return;
    }

    const updated = await prisma.order.update({ where: { id }, data: { notes } });
    sendSuccess(res, { order: updated }, 'Order updated');
  } catch (err) {
    next(err);
  }
};

// GET /api/orders/stats — summary counts per status for the current user
export const orderStats = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.userId!;
    const role   = req.user?.role;

    const where = {
      ...(role === 'RETAILER' && { buyerId:  userId }),
      ...(role === 'FARMER'   && { sellerId: userId }),
    };

    const counts = await prisma.order.groupBy({
      by:    ['status'],
      where,
      _count: { id: true },
    });

    const totalAmount = await prisma.order.aggregate({
      where: { ...where, status: 'DELIVERED' },
      _sum:  { totalAmount: true },
    });

    const stats = Object.fromEntries(
      counts.map((c) => [c.status, c._count.id])
    );

    sendSuccess(res, {
      stats,
      deliveredRevenue: totalAmount._sum.totalAmount ?? 0,
    });
  } catch (err) {
    next(err);
  }
};
