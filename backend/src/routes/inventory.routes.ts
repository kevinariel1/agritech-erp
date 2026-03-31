import { Router } from 'express';
import {
  listInventory,
  getInventory,
  createInventory,
  updateInventory,
  deleteInventory,
  inventorySummary,
} from '../controllers/inventory.controller';
import { authenticate, authorize } from '../middleware/auth.middleware';

const router = Router();

// All inventory routes require auth
router.use(authenticate);

router.get('/summary', authorize('FARMER', 'RETAILER', 'ADMIN'), inventorySummary);
router.get('/',        authorize('FARMER', 'RETAILER', 'ADMIN'), listInventory);
router.get('/:id',     authorize('FARMER', 'RETAILER', 'ADMIN'), getInventory);

router.post('/',       authorize('FARMER', 'RETAILER'),          createInventory);
router.patch('/:id',   authorize('FARMER', 'RETAILER', 'ADMIN'), updateInventory);
router.delete('/:id',  authorize('FARMER', 'RETAILER', 'ADMIN'), deleteInventory);

export default router;
