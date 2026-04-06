"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shipment_controller_1 = require("../controllers/shipment.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.Router)();
router.use(auth_middleware_1.authenticate);
router.get('/', (0, auth_middleware_1.authorize)('FARMER', 'RETAILER', 'DISTRIBUTOR', 'ADMIN'), shipment_controller_1.listShipments);
router.get('/:id', (0, auth_middleware_1.authorize)('FARMER', 'RETAILER', 'DISTRIBUTOR', 'ADMIN'), shipment_controller_1.getShipment);
// Seller (FARMER) or admin creates the shipment once the order is SHIPPED
router.post('/', (0, auth_middleware_1.authorize)('FARMER', 'ADMIN'), shipment_controller_1.createShipment);
// Distributor or farmer or admin updates details / status
router.patch('/:id', (0, auth_middleware_1.authorize)('FARMER', 'DISTRIBUTOR', 'ADMIN'), shipment_controller_1.updateShipment);
router.patch('/:id/status', (0, auth_middleware_1.authorize)('FARMER', 'DISTRIBUTOR', 'ADMIN'), shipment_controller_1.updateShipmentStatus);
router.post('/:id/tracking', (0, auth_middleware_1.authorize)('FARMER', 'DISTRIBUTOR', 'ADMIN'), shipment_controller_1.addTrackingEntry);
exports.default = router;
