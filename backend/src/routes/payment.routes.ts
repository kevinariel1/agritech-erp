import { Router } from 'express';
import {
  listPayments,
  getPayment,
  getPaymentByOrder,
  createPayment,
  updatePaymentStatus,
  paymentStats,
} from '../controllers/payment.controller';
import { authenticate, authorize } from '../middleware/auth.middleware';

const router = Router();

router.use(authenticate);

// stats and order-lookup must come before /:id
router.get('/stats',            authorize('FARMER', 'RETAILER', 'ADMIN'), paymentStats);
router.get('/order/:orderId',   authorize('FARMER', 'RETAILER', 'ADMIN'), getPaymentByOrder);
router.get('/',                 authorize('FARMER', 'RETAILER', 'ADMIN'), listPayments);
router.get('/:id',              authorize('FARMER', 'RETAILER', 'ADMIN'), getPayment);

// Retailer submits payment
router.post('/',                authorize('RETAILER'),                    createPayment);
// Seller confirms / admin overrides
router.patch('/:id/status',     authorize('FARMER', 'ADMIN'),            updatePaymentStatus);

export default router;
