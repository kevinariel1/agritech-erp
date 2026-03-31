import api from './api';
import type { ApiResponse } from '@/types/auth';
import type { Order, OrdersResponse, OrderStats, CreateOrderPayload, OrderStatus } from '@/types/order';

export const orderService = {
  list: async (params: { status?: string; page?: number; limit?: number } = {}) => {
    const p = new URLSearchParams();
    if (params.status) p.set('status', params.status);
    if (params.page)   p.set('page',   String(params.page));
    if (params.limit)  p.set('limit',  String(params.limit));
    const res = await api.get<ApiResponse<OrdersResponse>>(`/orders?${p}`);
    return res.data;
  },

  get: async (id: string) => {
    const res = await api.get<ApiResponse<{ order: Order }>>(`/orders/${id}`);
    return res.data;
  },

  stats: async () => {
    const res = await api.get<ApiResponse<OrderStats>>('/orders/stats');
    return res.data;
  },

  create: async (payload: CreateOrderPayload) => {
    const res = await api.post<ApiResponse<{ order: Order }>>('/orders', payload);
    return res.data;
  },

  updateStatus: async (id: string, status: OrderStatus) => {
    const res = await api.patch<ApiResponse<{ order: Order }>>(`/orders/${id}/status`, { status });
    return res.data;
  },

  updateNotes: async (id: string, notes: string) => {
    const res = await api.patch<ApiResponse<{ order: Order }>>(`/orders/${id}`, { notes });
    return res.data;
  },
};
