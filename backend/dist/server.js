"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ override: true });
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const product_routes_1 = __importDefault(require("./routes/product.routes"));
const inventory_routes_1 = __importDefault(require("./routes/inventory.routes"));
const order_routes_1 = __importDefault(require("./routes/order.routes"));
const shipment_routes_1 = __importDefault(require("./routes/shipment.routes"));
const payment_routes_1 = __importDefault(require("./routes/payment.routes"));
const stats_routes_1 = __importDefault(require("./routes/stats.routes"));
const admin_routes_1 = __importDefault(require("./routes/admin.routes"));
const error_middleware_1 = require("./middleware/error.middleware");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
// Middleware
app.use((0, cors_1.default)({
    origin: process.env.CLIENT_URL || 'http://localhost:5173',
    credentials: true,
}));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Health check
app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', message: 'AgriTech ERP API is running' });
});
// Routes
app.use('/api/auth', auth_routes_1.default);
app.use('/api/products', product_routes_1.default);
app.use('/api/inventory', inventory_routes_1.default);
app.use('/api/orders', order_routes_1.default);
app.use('/api/shipments', shipment_routes_1.default);
app.use('/api/payments', payment_routes_1.default);
app.use('/api/dashboard', stats_routes_1.default);
app.use('/api/admin', admin_routes_1.default);
// 404 & error handling (must be last)
app.use(error_middleware_1.notFound);
app.use(error_middleware_1.errorHandler);
// Only listen when running directly (not on Vercel)
if (process.env.NODE_ENV !== 'production') {
    app.listen(PORT, () => {
        console.log(`🚀 Server running on http://localhost:${PORT}`);
    });
}
exports.default = app;
