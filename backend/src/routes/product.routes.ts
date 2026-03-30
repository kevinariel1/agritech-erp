import { Router } from 'express';
import {
  listProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  listCategories,
} from '../controllers/product.controller';
import { authenticate, authorize } from '../middleware/auth.middleware';

const router = Router();

// Public routes
router.get('/', listProducts);
router.get('/categories', listCategories);
router.get('/:id', getProduct);

// Farmer-only routes
router.post('/', authenticate, authorize('FARMER'), createProduct);
router.patch('/:id', authenticate, authorize('FARMER', 'ADMIN'), updateProduct);
router.delete('/:id', authenticate, authorize('FARMER', 'ADMIN'), deleteProduct);

export default router;
