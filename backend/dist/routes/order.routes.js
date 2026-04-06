"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = require("../controllers/order.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.Router)();
router.use(auth_middleware_1.authenticate);
// Stats must come before /:id
router.get('/stats', (0, auth_middleware_1.authorize)('FARMER', 'RETAILER', 'ADMIN'), order_controller_1.orderStats);
router.get('/', (0, auth_middleware_1.authorize)('FARMER', 'RETAILER', 'ADMIN'), order_controller_1.listOrders);
router.get('/:id', (0, auth_middleware_1.authorize)('FARMER', 'RETAILER', 'ADMIN'), order_controller_1.getOrder);
// Retailers place orders
router.post('/', (0, auth_middleware_1.authorize)('RETAILER'), order_controller_1.createOrder);
// Update notes (buyer only, PENDING)
router.patch('/:id', (0, auth_middleware_1.authorize)('RETAILER'), order_controller_1.updateOrder);
// Update status (seller progresses, buyer cancels, admin anything)
router.patch('/:id/status', (0, auth_middleware_1.authorize)('FARMER', 'RETAILER', 'ADMIN'), order_controller_1.updateOrderStatus);
exports.default = router;
