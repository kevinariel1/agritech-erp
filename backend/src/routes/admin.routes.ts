import { Router } from 'express';
import { listUsers, toggleUserActive, systemStats } from '../controllers/admin.controller';
import { authenticate, authorize } from '../middleware/auth.middleware';

const router = Router();
router.use(authenticate);
router.use(authorize('ADMIN'));

router.get('/stats',                 systemStats);
router.get('/users',                 listUsers);
router.patch('/users/:id/toggle',    toggleUserActive);

export default router;
