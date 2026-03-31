export type OrderStatus = 'PENDING' | 'CONFIRMED' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED';
export type PaymentStatus = 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED';
export type ShipmentStatus = 'PREPARING' | 'IN_TRANSIT' | 'DELIVERED' | 'FAILED';

export interface OrderUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
}

export interface OrderProduct {
  id: string;
  name: string;
  category: string;
  unit: string;
  unitPrice?: number;
  imageUrl?: string | null;
}

export interface OrderItem {
  id: string;
  orderId: string;
  productId: string;
  product: OrderProduct;
  quantity: number;
  unitPrice: number;
  subtotal: number;
  createdAt: string;
}

export interface OrderShipment {
  id: string;
  status: ShipmentStatus;
  trackingNumber: string;
  estimatedDelivery?: string | null;
}

export interface OrderPayment {
  id: string;
  status: PaymentStatus;
  amount: number;
  paymentMethod: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  buyerId: string;
  buyer: OrderUser;
  sellerId: string;
  seller: OrderUser;
  status: OrderStatus;
  totalAmount: number;
  notes?: string | null;
  createdAt: string;
  updatedAt: string;
  orderItems: OrderItem[];
  shipment?: OrderShipment | null;
  payment?: OrderPayment | null;
}

export interface OrdersResponse {
  orders: Order[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface OrderStats {
  stats: Partial<Record<OrderStatus, number>>;
  deliveredRevenue: number;
}

export interface CreateOrderPayload {
  items: { productId: string; quantity: number }[];
  notes?: string;
}
