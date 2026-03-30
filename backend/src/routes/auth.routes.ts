import { Router } from 'express';
import { register, login, getMe, updateMe, changePassword } from '../controllers/auth.controller';
import { authenticate } from '../middleware/auth.middleware';

const router = Router();

// Public routes
router.post('/register', register);
router.post('/login', login);

// Protected routes (require valid JWT)
router.get('/me', authenticate, getMe);
router.patch('/me', authenticate, updateMe);
router.patch('/change-password', authenticate, changePassword);

export default router;
