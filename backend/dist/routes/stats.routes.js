"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const stats_controller_1 = require("../controllers/stats.controller");
const auth_middleware_1 = require("../middleware/auth.middleware");
const router = (0, express_1.Router)();
router.use(auth_middleware_1.authenticate);
router.get('/', (0, auth_middleware_1.authorize)('FARMER', 'RETAILER', 'DISTRIBUTOR', 'ADMIN'), stats_controller_1.dashboardStats);
exports.default = router;
