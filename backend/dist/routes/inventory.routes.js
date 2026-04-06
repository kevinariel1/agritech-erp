"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inventory_controller_1 = require("../controllers/inventory.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.Router)();
// All inventory routes require auth
router.use(auth_middleware_1.authenticate);
router.get('/summary', (0, auth_middleware_1.authorize)('FARMER', 'RETAILER', 'ADMIN'), inventory_controller_1.inventorySummary);
router.get('/', (0, auth_middleware_1.authorize)('FARMER', 'RETAILER', 'ADMIN'), inventory_controller_1.listInventory);
router.get('/:id', (0, auth_middleware_1.authorize)('FARMER', 'RETAILER', 'ADMIN'), inventory_controller_1.getInventory);
router.post('/', (0, auth_middleware_1.authorize)('FARMER', 'RETAILER'), inventory_controller_1.createInventory);
router.patch('/:id', (0, auth_middleware_1.authorize)('FARMER', 'RETAILER', 'ADMIN'), inventory_controller_1.updateInventory);
router.delete('/:id', (0, auth_middleware_1.authorize)('FARMER', 'RETAILER', 'ADMIN'), inventory_controller_1.deleteInventory);
exports.default = router;
