import api from './api';
import type { ApiResponse } from '@/types/auth';
import type { Payment, PaymentsResponse, PaymentStats, CreatePaymentPayload, PaymentStatus } from '@/types/payment';

export const paymentService = {
  list: async (params: { status?: string; page?: number; limit?: number } = {}) => {
    const p = new URLSearchParams();
    if (params.status) p.set('status', params.status);
    if (params.page)   p.set('page',   String(params.page));
    if (params.limit)  p.set('limit',  String(params.limit));
    const res = await api.get<ApiResponse<PaymentsResponse>>(`/payments?${p}`);
    return res.data;
  },

  get: async (id: string) => {
    const res = await api.get<ApiResponse<{ payment: Payment }>>(`/payments/${id}`);
    return res.data;
  },

  getByOrder: async (orderId: string) => {
    const res = await api.get<ApiResponse<{ payment: Payment }>>(`/payments/order/${orderId}`);
    return res.data;
  },

  stats: async () => {
    const res = await api.get<ApiResponse<PaymentStats>>('/payments/stats');
    return res.data;
  },

  create: async (payload: CreatePaymentPayload) => {
    const res = await api.post<ApiResponse<{ payment: Payment }>>('/payments', payload);
    return res.data;
  },

  updateStatus: async (id: string, status: PaymentStatus) => {
    const res = await api.patch<ApiResponse<{ payment: Payment }>>(`/payments/${id}/status`, { status });
    return res.data;
  },
};
