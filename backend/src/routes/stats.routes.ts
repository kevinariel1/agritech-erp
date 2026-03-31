import { Router } from 'express';
import { dashboardStats } from '../controllers/stats.controller';
import { authenticate, authorize } from '../middleware/auth.middleware';

const router = Router();
router.use(authenticate);
router.get('/', authorize('FARMER', 'RETAILER', 'DISTRIBUTOR', 'ADMIN'), dashboardStats);
export default router;
