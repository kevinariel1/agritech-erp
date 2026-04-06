"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listCategories = exports.deleteProduct = exports.updateProduct = exports.createProduct = exports.getProduct = exports.listProducts = void 0;
const prisma_1 = require("../config/prisma");
const response_1 = require("../utils/response");
// GET /api/products — public listing with filters
const listProducts = async (req, res, next) => {
    try {
        const { search = '', category, farmId, minPrice, maxPrice, page = '1', limit = '20', } = req.query;
        const skip = (parseInt(page) - 1) * parseInt(limit);
        const take = parseInt(limit);
        const where = {
            isActive: true,
            ...(search && {
                OR: [
                    { name: { contains: search, mode: 'insensitive' } },
                    { description: { contains: search, mode: 'insensitive' } },
                    { category: { contains: search, mode: 'insensitive' } },
                ],
            }),
            ...(category && { category: { equals: category, mode: 'insensitive' } }),
            ...(farmId && { farmId }),
            ...((minPrice || maxPrice) && {
                unitPrice: {
                    ...(minPrice && { gte: parseFloat(minPrice) }),
                    ...(maxPrice && { lte: parseFloat(maxPrice) }),
                },
            }),
        };
        const [products, total] = await Promise.all([
            prisma_1.prisma.product.findMany({
                where,
                skip,
                take,
                orderBy: { createdAt: 'desc' },
                include: {
                    farm: { select: { id: true, name: true, city: true, province: true } },
                    _count: { select: { inventories: true } },
                },
            }),
            prisma_1.prisma.product.count({ where }),
        ]);
        (0, response_1.sendSuccess)(res, {
            products,
            pagination: { page: parseInt(page), limit: take, total, totalPages: Math.ceil(total / take) },
        });
    }
    catch (err) {
        next(err);
    }
};
exports.listProducts = listProducts;
// GET /api/products/:id
const getProduct = async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await prisma_1.prisma.product.findUnique({
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
            (0, response_1.sendError)(res, 'Product not found', 404);
            return;
        }
        (0, response_1.sendSuccess)(res, { product });
    }
    catch (err) {
        next(err);
    }
};
exports.getProduct = getProduct;
// POST /api/products — Farmer only
const createProduct = async (req, res, next) => {
    try {
        const userId = req.user?.userId;
        // Get the farmer's farm
        const farm = await prisma_1.prisma.farm.findUnique({ where: { userId } });
        if (!farm) {
            (0, response_1.sendError)(res, 'Farm profile not found for this user', 403);
            return;
        }
        const { name, description, category, unit, unitPrice, imageUrl } = req.body;
        if (!name || !category || !unit || unitPrice === undefined) {
            (0, response_1.sendError)(res, 'name, category, unit and unitPrice are required', 400);
            return;
        }
        if (unitPrice < 0) {
            (0, response_1.sendError)(res, 'unitPrice must be non-negative', 400);
            return;
        }
        const product = await prisma_1.prisma.product.create({
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
        (0, response_1.sendSuccess)(res, { product }, 'Product created', 201);
    }
    catch (err) {
        next(err);
    }
};
exports.createProduct = createProduct;
// PATCH /api/products/:id — Farmer only (own farm)
const updateProduct = async (req, res, next) => {
    try {
        const userId = req.user?.userId;
        const { id } = req.params;
        const farm = await prisma_1.prisma.farm.findUnique({ where: { userId } });
        if (!farm) {
            (0, response_1.sendError)(res, 'Farm profile not found', 403);
            return;
        }
        const existing = await prisma_1.prisma.product.findUnique({ where: { id } });
        if (!existing) {
            (0, response_1.sendError)(res, 'Product not found', 404);
            return;
        }
        if (existing.farmId !== farm.id) {
            (0, response_1.sendError)(res, 'You do not own this product', 403);
            return;
        }
        const { name, description, category, unit, unitPrice, imageUrl, isActive } = req.body;
        const product = await prisma_1.prisma.product.update({
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
        (0, response_1.sendSuccess)(res, { product }, 'Product updated');
    }
    catch (err) {
        next(err);
    }
};
exports.updateProduct = updateProduct;
// DELETE /api/products/:id — Farmer only (own farm) or Admin
const deleteProduct = async (req, res, next) => {
    try {
        const userId = req.user?.userId;
        const userRole = req.user?.role;
        const { id } = req.params;
        const existing = await prisma_1.prisma.product.findUnique({ where: { id } });
        if (!existing) {
            (0, response_1.sendError)(res, 'Product not found', 404);
            return;
        }
        if (userRole !== 'ADMIN') {
            const farm = await prisma_1.prisma.farm.findUnique({ where: { userId } });
            if (!farm || existing.farmId !== farm.id) {
                (0, response_1.sendError)(res, 'You do not have permission to delete this product', 403);
                return;
            }
        }
        // Soft-delete: set isActive = false if it has order history, hard delete otherwise
        const hasOrders = await prisma_1.prisma.orderItem.findFirst({ where: { productId: id } });
        if (hasOrders) {
            await prisma_1.prisma.product.update({ where: { id }, data: { isActive: false } });
            (0, response_1.sendSuccess)(res, null, 'Product deactivated (has order history)');
        }
        else {
            await prisma_1.prisma.product.delete({ where: { id } });
            (0, response_1.sendSuccess)(res, null, 'Product deleted');
        }
    }
    catch (err) {
        next(err);
    }
};
exports.deleteProduct = deleteProduct;
// GET /api/products/categories — unique categories for filter dropdown
const listCategories = async (_req, res, next) => {
    try {
        const rows = await prisma_1.prisma.product.findMany({
            where: { isActive: true },
            select: { category: true },
            distinct: ['category'],
            orderBy: { category: 'asc' },
        });
        (0, response_1.sendSuccess)(res, { categories: rows.map((r) => r.category) });
    }
    catch (err) {
        next(err);
    }
};
exports.listCategories = listCategories;
