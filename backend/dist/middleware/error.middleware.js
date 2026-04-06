"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = exports.errorHandler = void 0;
const response_1 = require("../utils/response");
const errorHandler = (err, _req, res, _next) => {
    console.error('Unhandled error:', err);
    // Prisma known request error
    if (err.constructor.name === 'PrismaClientKnownRequestError') {
        const prismaError = err;
        if (prismaError.code === 'P2002') {
            const field = prismaError.meta?.target?.[0] ?? 'field';
            (0, response_1.sendError)(res, `A record with this ${field} already exists`, 409);
            return;
        }
        if (prismaError.code === 'P2025') {
            (0, response_1.sendError)(res, 'Record not found', 404);
            return;
        }
    }
    (0, response_1.sendError)(res, err.message || 'Something went wrong', 500);
};
exports.errorHandler = errorHandler;
const notFound = (_req, res) => {
    (0, response_1.sendError)(res, 'Route not found', 404);
};
exports.notFound = notFound;
