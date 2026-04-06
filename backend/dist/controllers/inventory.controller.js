"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventorySummary = exports.deleteInventory = exports.updateInventory = exports.createInventory = exports.getInventory = exports.listInventory = void 0;
const prisma_1 = require("../config/prisma");
const response_1 = require("../utils/response");
// GET /api/inventory
const listInventory = async (req, res, next) => {
    try {
        const userId = req.user?.userId;
        const role = req.user?.role;
        const { productId, qualityGrade, lowStock, // 'true' → filter quantity < threshold
        threshold = '10', page = '1', limit = '20', } = req.query;
        const skip = (parseInt(page) - 1) * parseInt(limit);
        const take = parseInt(limit);
        // Scope by role: farmers see their farm inventory, retailers see their store inventory
        let farmId;
        let retailerId;
        if (role === 'FARMER') {
            const farm = await prisma_1.prisma.farm.findUnique({ where: { userId } });
            if (!farm) {
                (0, response_1.sendError)(res, 'Farm profile not found', 403);
                return;
            }
            farmId = farm.id;
        }
        else if (role === 'RETAILER') {
            const retailer = await prisma_1.prisma.retailer.findUnique({ where: { userId } });
            if (!retailer) {
                (0, response_1.sendError)(res, 'Retailer profile not found', 403);
                return;
            }
            retailerId = retailer.id;
        }
        // ADMIN sees everything — no extra filter
        const where = {
            ...(farmId && { farmId }),
            ...(retailerId && { retailerId }),
            ...(productId && { productId }),
            ...(qualityGrade && { qualityGrade }),
            ...(lowStock === 'true' && { quantity: { lt: parseFloat(threshold) } }),
        };
        const [inventories, total] = await Promise.all([
            prisma_1.prisma.inventory.findMany({
                where,
                skip,
                take,
                orderBy: { createdAt: 'desc' },
                include: {
                    product: { select: { id: true, name: true, category: true, unit: true, unitPrice: true } },
                    farm: { select: { id: true, name: true } },
                    retailer: { select: { id: true, storeName: true } },
                },
            }),
            prisma_1.prisma.inventory.count({ where }),
        ]);
        (0, response_1.sendSuccess)(res, {
            inventories,
            pagination: { page: parseInt(page), limit: take, total, totalPages: Math.ceil(total / take) },
        });
    }
    catch (err) {
        next(err);
    }
};
exports.listInventory = listInventory;
// GET /api/inventory/:id
const getInventory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const inventory = await prisma_1.prisma.inventory.findUnique({
            where: { id },
            include: {
                product: { select: { id: true, name: true, category: true, unit: true, unitPrice: true } },
                farm: { select: { id: true, name: true, city: true, province: true } },
                retailer: { select: { id: true, storeName: true, city: true, province: true } },
            },
        });
        if (!inventory) {
            (0, response_1.sendError)(res, 'Inventory record not found', 404);
            return;
        }
        (0, response_1.sendSuccess)(res, { inventory });
    }
    catch (err) {
        next(err);
    }
};
exports.getInventory = getInventory;
// POST /api/inventory — Farmer or Retailer adds a batch
const createInventory = async (req, res, next) => {
    try {
        const userId = req.user?.userId;
        const role = req.user?.role;
        const { productId, quantity, batchNumber, harvestDate, expiryDate, qualityGrade, } = req.body;
        if (!productId || quantity === undefined || !batchNumber) {
            (0, response_1.sendError)(res, 'productId, quantity and batchNumber are required', 400);
            return;
        }
        if (quantity < 0) {
            (0, response_1.sendError)(res, 'quantity must be non-negative', 400);
            return;
        }
        // Verify product exists
        const product = await prisma_1.prisma.product.findUnique({ where: { id: productId } });
        if (!product) {
            (0, response_1.sendError)(res, 'Product not found', 404);
            return;
        }
        let farmId;
        let retailerId;
        if (role === 'FARMER') {
            const farm = await prisma_1.prisma.farm.findUnique({ where: { userId } });
            if (!farm) {
                (0, response_1.sendError)(res, 'Farm profile not found', 403);
                return;
            }
            // Farmer can only add inventory for their own products
            if (product.farmId !== farm.id) {
                (0, response_1.sendError)(res, 'You can only add inventory for your own products', 403);
                return;
            }
            farmId = farm.id;
        }
        else if (role === 'RETAILER') {
            const retailer = await prisma_1.prisma.retailer.findUnique({ where: { userId } });
            if (!retailer) {
                (0, response_1.sendError)(res, 'Retailer profile not found', 403);
                return;
            }
            retailerId = retailer.id;
        }
        const inventory = await prisma_1.prisma.inventory.create({
            data: {
                productId,
                farmId,
                retailerId,
                quantity: parseFloat(String(quantity)),
                batchNumber,
                harvestDate: harvestDate ? new Date(harvestDate) : undefined,
                expiryDate: expiryDate ? new Date(expiryDate) : undefined,
                qualityGrade,
            },
            include: {
                product: { select: { id: true, name: true, category: true, unit: true } },
            },
        });
        (0, response_1.sendSuccess)(res, { inventory }, 'Inventory batch created', 201);
    }
    catch (err) {
        next(err);
    }
};
exports.createInventory = createInventory;
// PATCH /api/inventory/:id
const updateInventory = async (req, res, next) => {
    try {
        const userId = req.user?.userId;
        const role = req.user?.role;
        const { id } = req.params;
        const existing = await prisma_1.prisma.inventory.findUnique({ where: { id } });
        if (!existing) {
            (0, response_1.sendError)(res, 'Inventory record not found', 404);
            return;
        }
        // Ownership check
        if (role === 'FARMER') {
            const farm = await prisma_1.prisma.farm.findUnique({ where: { userId } });
            if (!farm || existing.farmId !== farm.id) {
                (0, response_1.sendError)(res, 'You do not own this inventory record', 403);
                return;
            }
        }
        else if (role === 'RETAILER') {
            const retailer = await prisma_1.prisma.retailer.findUnique({ where: { userId } });
            if (!retailer || existing.retailerId !== retailer.id) {
                (0, response_1.sendError)(res, 'You do not own this inventory record', 403);
                return;
            }
        }
        const { quantity, batchNumber, harvestDate, expiryDate, qualityGrade, } = req.body;
        const inventory = await prisma_1.prisma.inventory.update({
            where: { id },
            data: {
                ...(quantity !== undefined && { quantity: parseFloat(String(quantity)) }),
                ...(batchNumber !== undefined && { batchNumber }),
                ...(qualityGrade !== undefined && { qualityGrade }),
                ...(harvestDate !== undefined && { harvestDate: harvestDate ? new Date(harvestDate) : null }),
                ...(expiryDate !== undefined && { expiryDate: expiryDate ? new Date(expiryDate) : null }),
            },
            include: {
                product: { select: { id: true, name: true, category: true, unit: true } },
            },
        });
        (0, response_1.sendSuccess)(res, { inventory }, 'Inventory updated');
    }
    catch (err) {
        next(err);
    }
};
exports.updateInventory = updateInventory;
// DELETE /api/inventory/:id
const deleteInventory = async (req, res, next) => {
    try {
        const userId = req.user?.userId;
        const role = req.user?.role;
        const { id } = req.params;
        const existing = await prisma_1.prisma.inventory.findUnique({ where: { id } });
        if (!existing) {
            (0, response_1.sendError)(res, 'Inventory record not found', 404);
            return;
        }
        if (role !== 'ADMIN') {
            if (role === 'FARMER') {
                const farm = await prisma_1.prisma.farm.findUnique({ where: { userId } });
                if (!farm || existing.farmId !== farm.id) {
                    (0, response_1.sendError)(res, 'You do not have permission', 403);
                    return;
                }
            }
            else if (role === 'RETAILER') {
                const retailer = await prisma_1.prisma.retailer.findUnique({ where: { userId } });
                if (!retailer || existing.retailerId !== retailer.id) {
                    (0, response_1.sendError)(res, 'You do not have permission', 403);
                    return;
                }
            }
        }
        await prisma_1.prisma.inventory.delete({ where: { id } });
        (0, response_1.sendSuccess)(res, null, 'Inventory record deleted');
    }
    catch (err) {
        next(err);
    }
};
exports.deleteInventory = deleteInventory;
// GET /api/inventory/summary — aggregated stock summary per product
const inventorySummary = async (req, res, next) => {
    try {
        const userId = req.user?.userId;
        const role = req.user?.role;
        let farmId;
        let retailerId;
        if (role === 'FARMER') {
            const farm = await prisma_1.prisma.farm.findUnique({ where: { userId } });
            if (!farm) {
                (0, response_1.sendError)(res, 'Farm profile not found', 403);
                return;
            }
            farmId = farm.id;
        }
        else if (role === 'RETAILER') {
            const retailer = await prisma_1.prisma.retailer.findUnique({ where: { userId } });
            if (!retailer) {
                (0, response_1.sendError)(res, 'Retailer profile not found', 403);
                return;
            }
            retailerId = retailer.id;
        }
        const summary = await prisma_1.prisma.inventory.groupBy({
            by: ['productId'],
            where: {
                ...(farmId && { farmId }),
                ...(retailerId && { retailerId }),
            },
            _sum: { quantity: true },
            _count: { id: true },
        });
        // Enrich with product names
        const productIds = summary.map((s) => s.productId);
        const products = await prisma_1.prisma.product.findMany({
            where: { id: { in: productIds } },
            select: { id: true, name: true, category: true, unit: true, unitPrice: true },
        });
        const productMap = Object.fromEntries(products.map((p) => [p.id, p]));
        const enriched = summary.map((s) => ({
            product: productMap[s.productId],
            totalQty: s._sum.quantity ?? 0,
            batchCount: s._count.id,
        }));
        (0, response_1.sendSuccess)(res, { summary: enriched });
    }
    catch (err) {
        next(err);
    }
};
exports.inventorySummary = inventorySummary;
