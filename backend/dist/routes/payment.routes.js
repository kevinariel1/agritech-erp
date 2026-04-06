"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const payment_controller_1 = require("../controllers/payment.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.Router)();
router.use(auth_middleware_1.authenticate);
// stats and order-lookup must come before /:id
router.get('/stats', (0, auth_middleware_1.authorize)('FARMER', 'RETAILER', 'ADMIN'), payment_controller_1.paymentStats);
router.get('/order/:orderId', (0, auth_middleware_1.authorize)('FARMER', 'RETAILER', 'ADMIN'), payment_controller_1.getPaymentByOrder);
router.get('/', (0, auth_middleware_1.authorize)('FARMER', 'RETAILER', 'ADMIN'), payment_controller_1.listPayments);
router.get('/:id', (0, auth_middleware_1.authorize)('FARMER', 'RETAILER', 'ADMIN'), payment_controller_1.getPayment);
// Retailer submits payment
router.post('/', (0, auth_middleware_1.authorize)('RETAILER'), payment_controller_1.createPayment);
// Seller confirms / admin overrides
router.patch('/:id/status', (0, auth_middleware_1.authorize)('FARMER', 'ADMIN'), payment_controller_1.updatePaymentStatus);
exports.default = router;
