import { Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import { AuthRequest } from '../types/auth.types';
import { sendSuccess, sendError } from '../utils/response';
import { ShipmentStatus } from '../../generated/prisma';

const makeTrackingNumber = () =>
  `TRK-${Date.now().toString(36).toUpperCase()}-${Math.random().toString(36).slice(2, 6).toUpperCase()}`;

// Valid status transitions
const TRANSITIONS: Record<string, ShipmentStatus[]> = {
  PREPARING:  ['IN_TRANSIT', 'FAILED'],
  IN_TRANSIT: ['DELIVERED', 'FAILED'],
  DELIVERED:  [],
  FAILED:     ['IN_TRANSIT'], // allow retry
};

// GET /api/shipments
export const listShipments = async (
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

    let where: Record<string, unknown> = {};

    if (role === 'DISTRIBUTOR') {
      const dist = await prisma.distributor.findUnique({ where: { userId } });
      if (!dist) { sendError(res, 'Distributor profile not found', 403); return; }
      where.distributorId = dist.id;
    } else if (role === 'FARMER') {
      // Farmers see shipments for orders where they are the seller
      where = { order: { sellerId: userId } };
    } else if (role === 'RETAILER') {
      // Retailers see shipments for orders where they are the buyer
      where = { order: { buyerId: userId } };
    }
    // ADMIN sees all

    if (status) where.status = status as ShipmentStatus;

    const [shipments, total] = await Promise.all([
      prisma.shipment.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: 'desc' },
        include: {
          distributor: { select: { id: true, companyName: true } },
          order: {
            select: {
              id: true, orderNumber: true, status: true, totalAmount: true,
              buyer:  { select: { id: true, firstName: true, lastName: true } },
              seller: { select: { id: true, firstName: true, lastName: true } },
            },
          },
          trackingHistory: { orderBy: { timestamp: 'desc' }, take: 1 },
        },
      }),
      prisma.shipment.count({ where }),
    ]);

    sendSuccess(res, {
      shipments,
      pagination: { page: parseInt(page), limit: take, total, totalPages: Math.ceil(total / take) },
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/shipments/:id
export const getShipment = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.userId!;
    const role   = req.user?.role;
    const { id } = req.params as { id: string };

    const shipment = await prisma.shipment.findUnique({
      where: { id },
      include: {
        distributor: { select: { id: true, companyName: true, city: true, province: true } },
        order: {
          include: {
            buyer:      { select: { id: true, firstName: true, lastName: true, email: true, phone: true } },
            seller:     { select: { id: true, firstName: true, lastName: true, email: true, phone: true } },
            orderItems: { include: { product: { select: { id: true, name: true, unit: true } } } },
          },
        },
        trackingHistory: { orderBy: { timestamp: 'desc' } },
      },
    });

    if (!shipment) { sendError(res, 'Shipment not found', 404); return; }

    // Auth check: must be distributor, buyer, seller, or admin
    if (role !== 'ADMIN') {
      const isOwner =
        (role === 'DISTRIBUTOR' && ((await prisma.distributor.findUnique({ where: { userId } }))?.id === shipment.distributorId)) ||
        (role === 'FARMER'   && shipment.order.sellerId === userId) ||
        (role === 'RETAILER' && shipment.order.buyerId  === userId);
      if (!isOwner) { sendError(res, 'Forbidden', 403); return; }
    }

    sendSuccess(res, { shipment });
  } catch (err) {
    next(err);
  }
};

// POST /api/shipments — Admin or Farmer (seller) creates shipment for a SHIPPED order
export const createShipment = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.userId!;
    const role   = req.user?.role;

    const {
      orderId,
      distributorId,
      pickupAddress,
      deliveryAddress,
      estimatedPickup,
      estimatedDelivery,
      driverName,
      vehicleNumber,
      notes,
    } = req.body as {
      orderId:          string;
      distributorId?:   string;
      pickupAddress:    string;
      deliveryAddress:  string;
      estimatedPickup?: string;
      estimatedDelivery?: string;
      driverName?:      string;
      vehicleNumber?:   string;
      notes?:           string;
    };

    if (!orderId || !pickupAddress || !deliveryAddress) {
      sendError(res, 'orderId, pickupAddress and deliveryAddress are required', 400); return;
    }

    const order = await prisma.order.findUnique({ where: { id: orderId } });
    if (!order) { sendError(res, 'Order not found', 404); return; }
    if (order.status !== 'SHIPPED') {
      sendError(res, 'Can only create shipment for orders with status SHIPPED', 400); return;
    }

    // Seller or admin can create
    if (role !== 'ADMIN' && order.sellerId !== userId) {
      sendError(res, 'Only the seller or admin can create a shipment', 403); return;
    }

    // Check no existing shipment
    const existing = await prisma.shipment.findUnique({ where: { orderId } });
    if (existing) { sendError(res, 'Shipment already exists for this order', 409); return; }

    const shipment = await prisma.shipment.create({
      data: {
        orderId,
        distributorId:     distributorId || undefined,
        trackingNumber:    makeTrackingNumber(),
        status:            'PREPARING',
        pickupAddress,
        deliveryAddress,
        estimatedPickup:   estimatedPickup  ? new Date(estimatedPickup)  : undefined,
        estimatedDelivery: estimatedDelivery ? new Date(estimatedDelivery) : undefined,
        driverName,
        vehicleNumber,
        notes,
        trackingHistory: {
          create: {
            status: 'PREPARING',
            notes:  'Shipment created, preparing for pickup',
          },
        },
      },
      include: {
        distributor:     { select: { id: true, companyName: true } },
        order:           { select: { id: true, orderNumber: true, buyer: { select: { firstName: true, lastName: true } } } },
        trackingHistory: { orderBy: { timestamp: 'desc' } },
      },
    });

    sendSuccess(res, { shipment }, 'Shipment created', 201);
  } catch (err) {
    next(err);
  }
};

// PATCH /api/shipments/:id — Update shipment details
export const updateShipment = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.userId!;
    const role   = req.user?.role;
    const { id } = req.params as { id: string };

    const shipment = await prisma.shipment.findUnique({ where: { id }, include: { order: true } });
    if (!shipment) { sendError(res, 'Shipment not found', 404); return; }

    if (role !== 'ADMIN') {
      const distProfile = role === 'DISTRIBUTOR'
        ? await prisma.distributor.findUnique({ where: { userId } })
        : null;
      const isAllowed =
        (role === 'DISTRIBUTOR' && distProfile?.id === shipment.distributorId) ||
        (role === 'FARMER' && shipment.order.sellerId === userId);
      if (!isAllowed) { sendError(res, 'Forbidden', 403); return; }
    }

    const {
      distributorId,
      estimatedPickup,
      estimatedDelivery,
      actualPickup,
      actualDelivery,
      driverName,
      vehicleNumber,
      notes,
    } = req.body as {
      distributorId?:     string | null;
      estimatedPickup?:   string | null;
      estimatedDelivery?: string | null;
      actualPickup?:      string | null;
      actualDelivery?:    string | null;
      driverName?:        string | null;
      vehicleNumber?:     string | null;
      notes?:             string | null;
    };

    const updated = await prisma.shipment.update({
      where: { id },
      data: {
        ...(distributorId     !== undefined && { distributorId }),
        ...(estimatedPickup   !== undefined && { estimatedPickup:   estimatedPickup   ? new Date(estimatedPickup)   : null }),
        ...(estimatedDelivery !== undefined && { estimatedDelivery: estimatedDelivery ? new Date(estimatedDelivery) : null }),
        ...(actualPickup      !== undefined && { actualPickup:      actualPickup      ? new Date(actualPickup)      : null }),
        ...(actualDelivery    !== undefined && { actualDelivery:    actualDelivery    ? new Date(actualDelivery)    : null }),
        ...(driverName        !== undefined && { driverName }),
        ...(vehicleNumber     !== undefined && { vehicleNumber }),
        ...(notes             !== undefined && { notes }),
      },
      include: {
        distributor:     { select: { id: true, companyName: true } },
        trackingHistory: { orderBy: { timestamp: 'desc' } },
      },
    });

    sendSuccess(res, { shipment: updated }, 'Shipment updated');
  } catch (err) {
    next(err);
  }
};

// PATCH /api/shipments/:id/status — Status transition + auto tracking entry
export const updateShipmentStatus = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.userId!;
    const role   = req.user?.role;
    const { id } = req.params as { id: string };
    const { status, location, notes } = req.body as {
      status:    ShipmentStatus;
      location?: string;
      notes?:    string;
    };

    if (!status) { sendError(res, 'status is required', 400); return; }

    const shipment = await prisma.shipment.findUnique({ where: { id }, include: { order: true } });
    if (!shipment) { sendError(res, 'Shipment not found', 404); return; }

    if (role !== 'ADMIN') {
      const distProfile = role === 'DISTRIBUTOR'
        ? await prisma.distributor.findUnique({ where: { userId } })
        : null;
      const isAllowed =
        (role === 'DISTRIBUTOR' && distProfile?.id === shipment.distributorId) ||
        (role === 'FARMER' && shipment.order.sellerId === userId);
      if (!isAllowed) { sendError(res, 'Forbidden', 403); return; }
    }

    const allowed = TRANSITIONS[shipment.status] ?? [];
    if (!allowed.includes(status)) {
      sendError(res, `Cannot transition from ${shipment.status} to ${status}`, 400); return;
    }

    // Auto-populate actual pickup/delivery timestamps
    const now = new Date();
    const updated = await prisma.shipment.update({
      where: { id },
      data:  {
        status,
        ...(status === 'IN_TRANSIT' && !shipment.actualPickup   && { actualPickup:   now }),
        ...(status === 'DELIVERED'  && !shipment.actualDelivery && { actualDelivery:  now }),
        trackingHistory: {
          create: {
            status,
            location: location || undefined,
            notes:    notes    || undefined,
          },
        },
      },
      include: {
        distributor:     { select: { id: true, companyName: true } },
        order:           { select: { id: true, orderNumber: true } },
        trackingHistory: { orderBy: { timestamp: 'desc' } },
      },
    });

    // If delivered, also update order status to DELIVERED
    if (status === 'DELIVERED') {
      await prisma.order.update({
        where: { id: shipment.orderId },
        data:  { status: 'DELIVERED' },
      });
    }

    sendSuccess(res, { shipment: updated }, `Shipment ${status.toLowerCase().replace('_', ' ')}`);
  } catch (err) {
    next(err);
  }
};

// POST /api/shipments/:id/tracking — Add a manual tracking entry
export const addTrackingEntry = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.userId!;
    const role   = req.user?.role;
    const { id } = req.params as { id: string };
    const { status, location, notes } = req.body as {
      status:    ShipmentStatus;
      location?: string;
      notes?:    string;
    };

    if (!status) { sendError(res, 'status is required', 400); return; }

    const shipment = await prisma.shipment.findUnique({ where: { id }, include: { order: true } });
    if (!shipment) { sendError(res, 'Shipment not found', 404); return; }

    if (role !== 'ADMIN') {
      const distProfile = role === 'DISTRIBUTOR'
        ? await prisma.distributor.findUnique({ where: { userId } })
        : null;
      const isAllowed =
        (role === 'DISTRIBUTOR' && distProfile?.id === shipment.distributorId) ||
        (role === 'FARMER' && shipment.order.sellerId === userId);
      if (!isAllowed) { sendError(res, 'Forbidden', 403); return; }
    }

    const entry = await prisma.trackingHistory.create({
      data: { shipmentId: id, status, location, notes },
    });

    sendSuccess(res, { entry }, 'Tracking entry added', 201);
  } catch (err) {
    next(err);
  }
};
