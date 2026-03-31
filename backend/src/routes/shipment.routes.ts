import { Router } from 'express';
import {
  listShipments,
  getShipment,
  createShipment,
  updateShipment,
  updateShipmentStatus,
  addTrackingEntry,
} from '../controllers/shipment.controller';
import { authenticate, authorize } from '../middleware/auth.middleware';

const router = Router();

router.use(authenticate);

router.get('/',           authorize('FARMER', 'RETAILER', 'DISTRIBUTOR', 'ADMIN'), listShipments);
router.get('/:id',        authorize('FARMER', 'RETAILER', 'DISTRIBUTOR', 'ADMIN'), getShipment);

// Seller (FARMER) or admin creates the shipment once the order is SHIPPED
router.post('/',          authorize('FARMER', 'ADMIN'),                            createShipment);
// Distributor or farmer or admin updates details / status
router.patch('/:id',             authorize('FARMER', 'DISTRIBUTOR', 'ADMIN'),      updateShipment);
router.patch('/:id/status',      authorize('FARMER', 'DISTRIBUTOR', 'ADMIN'),      updateShipmentStatus);
router.post('/:id/tracking',     authorize('FARMER', 'DISTRIBUTOR', 'ADMIN'),      addTrackingEntry);

export default router;
