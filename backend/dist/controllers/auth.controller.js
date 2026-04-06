"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.changePassword = exports.updateMe = exports.getMe = exports.login = exports.register = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const prisma_1 = require("../config/prisma");
const jwt_1 = require("../utils/jwt");
const response_1 = require("../utils/response");
// POST /api/auth/register
const register = async (req, res, next) => {
    try {
        const body = req.body;
        const { email, password, firstName, lastName, phone, role, 
        // Farmer
        farmName, farmAddress, farmCity, farmProvince, 
        // Distributor
        companyName, distributorAddress, distributorCity, distributorProvince, 
        // Retailer
        storeName, storeAddress, storeCity, storeProvince, storeType, } = body;
        // Validate required fields
        if (!email || !password || !firstName || !lastName || !role) {
            (0, response_1.sendError)(res, 'email, password, firstName, lastName and role are required', 400);
            return;
        }
        // Validate role
        const validRoles = ['FARMER', 'DISTRIBUTOR', 'RETAILER', 'ADMIN'];
        if (!validRoles.includes(role)) {
            (0, response_1.sendError)(res, `role must be one of: ${validRoles.join(', ')}`, 400);
            return;
        }
        // Check email uniqueness
        const existing = await prisma_1.prisma.user.findUnique({ where: { email } });
        if (existing) {
            (0, response_1.sendError)(res, 'Email is already registered', 409);
            return;
        }
        // Hash password
        const hashedPassword = await bcryptjs_1.default.hash(password, 12);
        // Create user + role-specific profile in a transaction
        const user = await prisma_1.prisma.$transaction(async (tx) => {
            const newUser = await tx.user.create({
                data: {
                    email,
                    password: hashedPassword,
                    firstName,
                    lastName,
                    phone,
                    role,
                },
            });
            if (role === 'FARMER') {
                if (!farmName || !farmAddress || !farmCity || !farmProvince) {
                    throw new Error('farmName, farmAddress, farmCity, farmProvince are required for FARMER');
                }
                await tx.farm.create({
                    data: {
                        userId: newUser.id,
                        name: farmName,
                        address: farmAddress,
                        city: farmCity,
                        province: farmProvince,
                    },
                });
            }
            if (role === 'DISTRIBUTOR') {
                if (!companyName || !distributorAddress || !distributorCity || !distributorProvince) {
                    throw new Error('companyName, distributorAddress, distributorCity, distributorProvince are required for DISTRIBUTOR');
                }
                await tx.distributor.create({
                    data: {
                        userId: newUser.id,
                        companyName,
                        address: distributorAddress,
                        city: distributorCity,
                        province: distributorProvince,
                    },
                });
            }
            if (role === 'RETAILER') {
                if (!storeName || !storeAddress || !storeCity || !storeProvince) {
                    throw new Error('storeName, storeAddress, storeCity, storeProvince are required for RETAILER');
                }
                await tx.retailer.create({
                    data: {
                        userId: newUser.id,
                        storeName,
                        address: storeAddress,
                        city: storeCity,
                        province: storeProvince,
                        storeType,
                    },
                });
            }
            return newUser;
        });
        // Generate token
        const token = (0, jwt_1.generateToken)({ userId: user.id, email: user.email, role: user.role });
        (0, response_1.sendSuccess)(res, {
            token,
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
            },
        }, 'Registration successful', 201);
    }
    catch (err) {
        next(err);
    }
};
exports.register = register;
// POST /api/auth/login
const login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            (0, response_1.sendError)(res, 'Email and password are required', 400);
            return;
        }
        const user = await prisma_1.prisma.user.findUnique({ where: { email } });
        if (!user) {
            (0, response_1.sendError)(res, 'Invalid email or password', 401);
            return;
        }
        if (!user.isActive) {
            (0, response_1.sendError)(res, 'Account is deactivated. Contact support.', 403);
            return;
        }
        const isPasswordValid = await bcryptjs_1.default.compare(password, user.password);
        if (!isPasswordValid) {
            (0, response_1.sendError)(res, 'Invalid email or password', 401);
            return;
        }
        const token = (0, jwt_1.generateToken)({ userId: user.id, email: user.email, role: user.role });
        (0, response_1.sendSuccess)(res, {
            token,
            user: {
                id: user.id,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                role: user.role,
            },
        }, 'Login successful');
    }
    catch (err) {
        next(err);
    }
};
exports.login = login;
// GET /api/auth/me  (protected)
const getMe = async (req, res, next) => {
    try {
        const userId = req.user?.userId;
        const user = await prisma_1.prisma.user.findUnique({
            where: { id: userId },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                phone: true,
                role: true,
                isActive: true,
                emailVerified: true,
                createdAt: true,
                farm: {
                    select: { id: true, name: true, city: true, province: true },
                },
                retailer: {
                    select: { id: true, storeName: true, city: true, province: true },
                },
                distributor: {
                    select: { id: true, companyName: true, city: true, province: true },
                },
            },
        });
        if (!user) {
            (0, response_1.sendError)(res, 'User not found', 404);
            return;
        }
        (0, response_1.sendSuccess)(res, { user });
    }
    catch (err) {
        next(err);
    }
};
exports.getMe = getMe;
// PATCH /api/auth/me  (protected)
const updateMe = async (req, res, next) => {
    try {
        const userId = req.user?.userId;
        const { firstName, lastName, phone } = req.body;
        const user = await prisma_1.prisma.user.update({
            where: { id: userId },
            data: { firstName, lastName, phone },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                phone: true,
                role: true,
            },
        });
        (0, response_1.sendSuccess)(res, { user }, 'Profile updated');
    }
    catch (err) {
        next(err);
    }
};
exports.updateMe = updateMe;
// PATCH /api/auth/change-password  (protected)
const changePassword = async (req, res, next) => {
    try {
        const userId = req.user?.userId;
        const { currentPassword, newPassword } = req.body;
        if (!currentPassword || !newPassword) {
            (0, response_1.sendError)(res, 'currentPassword and newPassword are required', 400);
            return;
        }
        if (newPassword.length < 8) {
            (0, response_1.sendError)(res, 'New password must be at least 8 characters', 400);
            return;
        }
        const user = await prisma_1.prisma.user.findUnique({ where: { id: userId } });
        if (!user) {
            (0, response_1.sendError)(res, 'User not found', 404);
            return;
        }
        const isValid = await bcryptjs_1.default.compare(currentPassword, user.password);
        if (!isValid) {
            (0, response_1.sendError)(res, 'Current password is incorrect', 401);
            return;
        }
        const hashed = await bcryptjs_1.default.hash(newPassword, 12);
        await prisma_1.prisma.user.update({ where: { id: userId }, data: { password: hashed } });
        (0, response_1.sendSuccess)(res, null, 'Password changed successfully');
    }
    catch (err) {
        next(err);
    }
};
exports.changePassword = changePassword;
