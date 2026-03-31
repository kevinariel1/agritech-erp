export type ShipmentStatus = 'PREPARING' | 'IN_TRANSIT' | 'DELIVERED' | 'FAILED';

export interface TrackingEntry {
  id: string;
  shipmentId: string;
  status: ShipmentStatus;
  location?: string | null;
  notes?: string | null;
  timestamp: string;
}

export interface ShipmentOrder {
  id: string;
  orderNumber: string;
  status: string;
  totalAmount: number;
  buyer:  { id: string; firstName: string; lastName: string; email?: string; phone?: string };
  seller: { id: string; firstName: string; lastName: string; email?: string; phone?: string };
  orderItems?: { id: string; quantity: number; product: { id: string; name: string; unit: string } }[];
}

export interface Shipment {
  id: string;
  orderId: string;
  order: ShipmentOrder;
  distributorId?: string | null;
  distributor?: { id: string; companyName: string; city?: string; province?: string } | null;
  trackingNumber: string;
  status: ShipmentStatus;
  pickupAddress: string;
  deliveryAddress: string;
  estimatedPickup?: string | null;
  actualPickup?: string | null;
  estimatedDelivery?: string | null;
  actualDelivery?: string | null;
  driverName?: string | null;
  vehicleNumber?: string | null;
  notes?: string | null;
  createdAt: string;
  updatedAt: string;
  trackingHistory: TrackingEntry[];
}

export interface ShipmentsResponse {
  shipments: Shipment[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface CreateShipmentPayload {
  orderId: string;
  distributorId?: string;
  pickupAddress: string;
  deliveryAddress: string;
  estimatedPickup?: string;
  estimatedDelivery?: string;
  driverName?: string;
  vehicleNumber?: string;
  notes?: string;
}

export interface UpdateShipmentStatusPayload {
  status: ShipmentStatus;
  location?: string;
  notes?: string;
}
