"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const product_controller_1 = require("../controllers/product.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.Router)();
// Public routes
router.get('/', product_controller_1.listProducts);
router.get('/categories', product_controller_1.listCategories);
router.get('/:id', product_controller_1.getProduct);
// Farmer-only routes
router.post('/', auth_middleware_1.authenticate, (0, auth_middleware_1.authorize)('FARMER'), product_controller_1.createProduct);
router.patch('/:id', auth_middleware_1.authenticate, (0, auth_middleware_1.authorize)('FARMER', 'ADMIN'), product_controller_1.updateProduct);
router.delete('/:id', auth_middleware_1.authenticate, (0, auth_middleware_1.authorize)('FARMER', 'ADMIN'), product_controller_1.deleteProduct);
exports.default = router;
