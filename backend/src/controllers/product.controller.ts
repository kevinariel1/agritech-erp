import { Response, NextFunction } from 'express';
import { prisma } from '../config/prisma';
import { AuthRequest } from '../types/auth.types';
import { sendSuccess, sendError } from '../utils/response';

// GET /api/products — public listing with filters
export const listProducts = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const {
      search = '',
      category,
      farmId,
      minPrice,
      maxPrice,
      page = '1',
      limit = '20',
    } = req.query as Record<string, string>;

    const skip = (parseInt(page) - 1) * parseInt(limit);
    const take = parseInt(limit);

    const where = {
      isActive: true,
      ...(search && {
        OR: [
          { name: { contains: search, mode: 'insensitive' as const } },
          { description: { contains: search, mode: 'insensitive' as const } },
          { category: { contains: search, mode: 'insensitive' as const } },
        ],
      }),
      ...(category && { category: { equals: category, mode: 'insensitive' as const } }),
      ...(farmId && { farmId }),
      ...((minPrice || maxPrice) && {
        unitPrice: {
          ...(minPrice && { gte: parseFloat(minPrice) }),
          ...(maxPrice && { lte: parseFloat(maxPrice) }),
        },
      }),
    };

    const [products, total] = await Promise.all([
      prisma.product.findMany({
        where,
        skip,
        take,
        orderBy: { createdAt: 'desc' },
        include: {
          farm: { select: { id: true, name: true, city: true, province: true } },
          _count: { select: { inventories: true } },
        },
      }),
      prisma.product.count({ where }),
    ]);

    sendSuccess(res, {
      products,
      pagination: { page: parseInt(page), limit: take, total, totalPages: Math.ceil(total / take) },
    });
  } catch (err) {
    next(err);
  }
};

// GET /api/products/:id
export const getProduct = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params as { id: string };

    const product = await prisma.product.findUnique({
      where: { id },
      include: {
        farm: { select: { id: true, name: true, city: true, province: true, user: { select: { firstName: true, lastName: true, phone: true } } } },
        inventories: {
          select: { id: true, quantity: true, qualityGrade: true, harvestDate: true, expiryDate: true, batchNumber: true },
          orderBy: { createdAt: 'desc' },
          take: 10,
        },
        _count: { select: { orderItems: true } },
      },
    });

    if (!product) {
      sendError(res, 'Product not found', 404);
      return;
    }

    sendSuccess(res, { product });
  } catch (err) {
    next(err);
  }
};

// POST /api/products — Farmer only
export const createProduct = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.userId;

    // Get the farmer's farm
    const farm = await prisma.farm.findUnique({ where: { userId } });
    if (!farm) {
      sendError(res, 'Farm profile not found for this user', 403);
      return;
    }

    const { name, description, category, unit, unitPrice, imageUrl } = req.body as {
      name: string;
      description?: string;
      category: string;
      unit: string;
      unitPrice: number;
      imageUrl?: string;
    };

    if (!name || !category || !unit || unitPrice === undefined) {
      sendError(res, 'name, category, unit and unitPrice are required', 400);
      return;
    }

    if (unitPrice < 0) {
      sendError(res, 'unitPrice must be non-negative', 400);
      return;
    }

    const product = await prisma.product.create({
      data: {
        farmId: farm.id,
        name,
        description,
        category,
        unit,
        unitPrice: parseFloat(String(unitPrice)),
        imageUrl,
      },
      include: {
        farm: { select: { id: true, name: true, city: true, province: true } },
      },
    });

    sendSuccess(res, { product }, 'Product created', 201);
  } catch (err) {
    next(err);
  }
};

// PATCH /api/products/:id — Farmer only (own farm)
export const updateProduct = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.userId;
    const { id } = req.params as { id: string };

    const farm = await prisma.farm.findUnique({ where: { userId } });
    if (!farm) {
      sendError(res, 'Farm profile not found', 403);
      return;
    }

    const existing = await prisma.product.findUnique({ where: { id } });
    if (!existing) {
      sendError(res, 'Product not found', 404);
      return;
    }
    if (existing.farmId !== farm.id) {
      sendError(res, 'You do not own this product', 403);
      return;
    }

    const { name, description, category, unit, unitPrice, imageUrl, isActive } = req.body as {
      name?: string;
      description?: string;
      category?: string;
      unit?: string;
      unitPrice?: number;
      imageUrl?: string;
      isActive?: boolean;
    };

    const product = await prisma.product.update({
      where: { id },
      data: {
        ...(name !== undefined && { name }),
        ...(description !== undefined && { description }),
        ...(category !== undefined && { category }),
        ...(unit !== undefined && { unit }),
        ...(unitPrice !== undefined && { unitPrice: parseFloat(String(unitPrice)) }),
        ...(imageUrl !== undefined && { imageUrl }),
        ...(isActive !== undefined && { isActive }),
      },
      include: {
        farm: { select: { id: true, name: true, city: true, province: true } },
      },
    });

    sendSuccess(res, { product }, 'Product updated');
  } catch (err) {
    next(err);
  }
};

// DELETE /api/products/:id — Farmer only (own farm) or Admin
export const deleteProduct = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const userId = req.user?.userId;
    const userRole = req.user?.role;
    const { id } = req.params as { id: string };

    const existing = await prisma.product.findUnique({ where: { id } });
    if (!existing) {
      sendError(res, 'Product not found', 404);
      return;
    }

    if (userRole !== 'ADMIN') {
      const farm = await prisma.farm.findUnique({ where: { userId } });
      if (!farm || existing.farmId !== farm.id) {
        sendError(res, 'You do not have permission to delete this product', 403);
        return;
      }
    }

    // Soft-delete: set isActive = false if it has order history, hard delete otherwise
    const hasOrders = await prisma.orderItem.findFirst({ where: { productId: id } });

    if (hasOrders) {
      await prisma.product.update({ where: { id }, data: { isActive: false } });
      sendSuccess(res, null, 'Product deactivated (has order history)');
    } else {
      await prisma.product.delete({ where: { id } });
      sendSuccess(res, null, 'Product deleted');
    }
  } catch (err) {
    next(err);
  }
};

// GET /api/products/categories — unique categories for filter dropdown
export const listCategories = async (
  _req: AuthRequest,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const rows = await prisma.product.findMany({
      where: { isActive: true },
      select: { category: true },
      distinct: ['category'],
      orderBy: { category: 'asc' },
    });

    sendSuccess(res, { categories: rows.map((r) => r.category) });
  } catch (err) {
    next(err);
  }
};
