import { Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import { AuthRequest } from '../types/auth.types';
import { sendSuccess, sendError } from '../utils/response';

// GET /api/inventory
export const listInventory = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.userId;
    const role   = req.user?.role;
    const {
      productId,
      qualityGrade,
      lowStock,     // 'true' → filter quantity < threshold
      threshold = '10',
      page  = '1',
      limit = '20',
    } = req.query as Record<string, string>;

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const take  = parseInt(limit);

    // Scope by role: farmers see their farm inventory, retailers see their store inventory
    let farmId: string | undefined;
    let retailerId: string | undefined;

    if (role === 'FARMER') {
      const farm = await prisma.farm.findUnique({ where: { userId } });
      if (!farm) { sendError(res, 'Farm profile not found', 403); return; }
      farmId = farm.id;
    } else if (role === 'RETAILER') {
      const retailer = await prisma.retailer.findUnique({ where: { userId } });
      if (!retailer) { sendError(res, 'Retailer profile not found', 403); return; }
      retailerId = retailer.id;
    }
    // ADMIN sees everything — no extra filter

    const where = {
      ...(farmId     && { farmId }),
      ...(retailerId && { retailerId }),
      ...(productId  && { productId }),
      ...(qualityGrade && { qualityGrade }),
      ...(lowStock === 'true' && { quantity: { lt: parseFloat(threshold) } }),
    };

    const [inventories, total] = await Promise.all([
      prisma.inventory.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: 'desc' },
        include: {
          product: { select: { id: true, name: true, category: true, unit: true, unitPrice: true } },
          farm:    { select: { id: true, name: true } },
          retailer:{ select: { id: true, storeName: true } },
        },
      }),
      prisma.inventory.count({ where }),
    ]);

    sendSuccess(res, {
      inventories,
      pagination: { page: parseInt(page), limit: take, total, totalPages: Math.ceil(total / take) },
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/inventory/:id
export const getInventory = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params as { id: string };

    const inventory = await prisma.inventory.findUnique({
      where: { id },
      include: {
        product:  { select: { id: true, name: true, category: true, unit: true, unitPrice: true } },
        farm:     { select: { id: true, name: true, city: true, province: true } },
        retailer: { select: { id: true, storeName: true, city: true, province: true } },
      },
    });

    if (!inventory) { sendError(res, 'Inventory record not found', 404); return; }

    sendSuccess(res, { inventory });
  } catch (err) {
    next(err);
  }
};

// POST /api/inventory — Farmer or Retailer adds a batch
export const createInventory = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.userId;
    const role   = req.user?.role;

    const {
      productId,
      quantity,
      batchNumber,
      harvestDate,
      expiryDate,
      qualityGrade,
    } = req.body as {
      productId:    string;
      quantity:     number;
      batchNumber:  string;
      harvestDate?: string;
      expiryDate?:  string;
      qualityGrade?: string;
    };

    if (!productId || quantity === undefined || !batchNumber) {
      sendError(res, 'productId, quantity and batchNumber are required', 400);
      return;
    }

    if (quantity < 0) {
      sendError(res, 'quantity must be non-negative', 400);
      return;
    }

    // Verify product exists
    const product = await prisma.product.findUnique({ where: { id: productId } });
    if (!product) { sendError(res, 'Product not found', 404); return; }

    let farmId:    string | undefined;
    let retailerId: string | undefined;

    if (role === 'FARMER') {
      const farm = await prisma.farm.findUnique({ where: { userId } });
      if (!farm) { sendError(res, 'Farm profile not found', 403); return; }
      // Farmer can only add inventory for their own products
      if (product.farmId !== farm.id) {
        sendError(res, 'You can only add inventory for your own products', 403);
        return;
      }
      farmId = farm.id;
    } else if (role === 'RETAILER') {
      const retailer = await prisma.retailer.findUnique({ where: { userId } });
      if (!retailer) { sendError(res, 'Retailer profile not found', 403); return; }
      retailerId = retailer.id;
    }

    const inventory = await prisma.inventory.create({
      data: {
        productId,
        farmId,
        retailerId,
        quantity: parseFloat(String(quantity)),
        batchNumber,
        harvestDate: harvestDate ? new Date(harvestDate) : undefined,
        expiryDate:  expiryDate  ? new Date(expiryDate)  : undefined,
        qualityGrade,
      },
      include: {
        product: { select: { id: true, name: true, category: true, unit: true } },
      },
    });

    sendSuccess(res, { inventory }, 'Inventory batch created', 201);
  } catch (err) {
    next(err);
  }
};

// PATCH /api/inventory/:id
export const updateInventory = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.userId;
    const role   = req.user?.role;
    const { id } = req.params as { id: string };

    const existing = await prisma.inventory.findUnique({ where: { id } });
    if (!existing) { sendError(res, 'Inventory record not found', 404); return; }

    // Ownership check
    if (role === 'FARMER') {
      const farm = await prisma.farm.findUnique({ where: { userId } });
      if (!farm || existing.farmId !== farm.id) {
        sendError(res, 'You do not own this inventory record', 403);
        return;
      }
    } else if (role === 'RETAILER') {
      const retailer = await prisma.retailer.findUnique({ where: { userId } });
      if (!retailer || existing.retailerId !== retailer.id) {
        sendError(res, 'You do not own this inventory record', 403);
        return;
      }
    }

    const {
      quantity,
      batchNumber,
      harvestDate,
      expiryDate,
      qualityGrade,
    } = req.body as {
      quantity?:    number;
      batchNumber?: string;
      harvestDate?: string | null;
      expiryDate?:  string | null;
      qualityGrade?: string | null;
    };

    const inventory = await prisma.inventory.update({
      where: { id },
      data: {
        ...(quantity     !== undefined && { quantity: parseFloat(String(quantity)) }),
        ...(batchNumber  !== undefined && { batchNumber }),
        ...(qualityGrade !== undefined && { qualityGrade }),
        ...(harvestDate  !== undefined && { harvestDate: harvestDate ? new Date(harvestDate) : null }),
        ...(expiryDate   !== undefined && { expiryDate:  expiryDate  ? new Date(expiryDate)  : null }),
      },
      include: {
        product: { select: { id: true, name: true, category: true, unit: true } },
      },
    });

    sendSuccess(res, { inventory }, 'Inventory updated');
  } catch (err) {
    next(err);
  }
};

// DELETE /api/inventory/:id
export const deleteInventory = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.userId;
    const role   = req.user?.role;
    const { id } = req.params as { id: string };

    const existing = await prisma.inventory.findUnique({ where: { id } });
    if (!existing) { sendError(res, 'Inventory record not found', 404); return; }

    if (role !== 'ADMIN') {
      if (role === 'FARMER') {
        const farm = await prisma.farm.findUnique({ where: { userId } });
        if (!farm || existing.farmId !== farm.id) {
          sendError(res, 'You do not have permission', 403); return;
        }
      } else if (role === 'RETAILER') {
        const retailer = await prisma.retailer.findUnique({ where: { userId } });
        if (!retailer || existing.retailerId !== retailer.id) {
          sendError(res, 'You do not have permission', 403); return;
        }
      }
    }

    await prisma.inventory.delete({ where: { id } });
    sendSuccess(res, null, 'Inventory record deleted');
  } catch (err) {
    next(err);
  }
};

// GET /api/inventory/summary — aggregated stock summary per product
export const inventorySummary = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.userId;
    const role   = req.user?.role;

    let farmId: string | undefined;
    let retailerId: string | undefined;

    if (role === 'FARMER') {
      const farm = await prisma.farm.findUnique({ where: { userId } });
      if (!farm) { sendError(res, 'Farm profile not found', 403); return; }
      farmId = farm.id;
    } else if (role === 'RETAILER') {
      const retailer = await prisma.retailer.findUnique({ where: { userId } });
      if (!retailer) { sendError(res, 'Retailer profile not found', 403); return; }
      retailerId = retailer.id;
    }

    const summary = await prisma.inventory.groupBy({
      by: ['productId'],
      where: {
        ...(farmId     && { farmId }),
        ...(retailerId && { retailerId }),
      },
      _sum:   { quantity: true },
      _count: { id: true },
    });

    // Enrich with product names
    const productIds = summary.map((s) => s.productId);
    const products   = await prisma.product.findMany({
      where: { id: { in: productIds } },
      select: { id: true, name: true, category: true, unit: true, unitPrice: true },
    });
    const productMap = Object.fromEntries(products.map((p) => [p.id, p]));

    const enriched = summary.map((s) => ({
      product:     productMap[s.productId],
      totalQty:    s._sum.quantity ?? 0,
      batchCount:  s._count.id,
    }));

    sendSuccess(res, { summary: enriched });
  } catch (err) {
    next(err);
  }
};
