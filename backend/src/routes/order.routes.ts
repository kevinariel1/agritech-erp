import { Router } from 'express';
import {
  listOrders,
  getOrder,
  createOrder,
  updateOrderStatus,
  updateOrder,
  orderStats,
} from '../controllers/order.controller';
import { authenticate, authorize } from '../middleware/auth.middleware';

const router = Router();

router.use(authenticate);

// Stats must come before /:id
router.get('/stats',    authorize('FARMER', 'RETAILER', 'ADMIN'), orderStats);
router.get('/',         authorize('FARMER', 'RETAILER', 'ADMIN'), listOrders);
router.get('/:id',      authorize('FARMER', 'RETAILER', 'ADMIN'), getOrder);

// Retailers place orders
router.post('/',               authorize('RETAILER'),                    createOrder);
// Update notes (buyer only, PENDING)
router.patch('/:id',           authorize('RETAILER'),                    updateOrder);
// Update status (seller progresses, buyer cancels, admin anything)
router.patch('/:id/status',    authorize('FARMER', 'RETAILER', 'ADMIN'), updateOrderStatus);

export default router;
