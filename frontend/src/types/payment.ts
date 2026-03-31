export type PaymentStatus = 'PENDING' | 'PAID' | 'FAILED' | 'REFUNDED';

export interface PaymentOrder {
  id: string;
  orderNumber: string;
  totalAmount: number;
  status: string;
  buyerId?: string;
  sellerId?: string;
  buyer:  { id: string; firstName: string; lastName: string; email: string; phone?: string };
  seller: { id: string; firstName: string; lastName: string; email?: string };
  orderItems?: { id: string; quantity: number; product: { id: string; name: string; unit: string } }[];
}

export interface Payment {
  id: string;
  orderId: string;
  order: PaymentOrder;
  amount: number;
  paymentMethod: string;
  status: PaymentStatus;
  paidAt?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface PaymentsResponse {
  payments: Payment[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface PaymentStats {
  counts: Partial<Record<PaymentStatus, number>>;
  totalPaid: number;
  byMethod: { method: string; total: number; count: number }[];
}

export interface CreatePaymentPayload {
  orderId: string;
  paymentMethod: string;
}
