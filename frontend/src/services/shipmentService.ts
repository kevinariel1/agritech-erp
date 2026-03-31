import api from './api';
import type { ApiResponse } from '@/types/auth';
import type {
  Shipment, ShipmentsResponse,
  CreateShipmentPayload, UpdateShipmentStatusPayload,
} from '@/types/shipment';

export const shipmentService = {
  list: async (params: { status?: string; page?: number; limit?: number } = {}) => {
    const p = new URLSearchParams();
    if (params.status) p.set('status', params.status);
    if (params.page)   p.set('page',   String(params.page));
    if (params.limit)  p.set('limit',  String(params.limit));
    const res = await api.get<ApiResponse<ShipmentsResponse>>(`/shipments?${p}`);
    return res.data;
  },

  get: async (id: string) => {
    const res = await api.get<ApiResponse<{ shipment: Shipment }>>(`/shipments/${id}`);
    return res.data;
  },

  create: async (payload: CreateShipmentPayload) => {
    const res = await api.post<ApiResponse<{ shipment: Shipment }>>('/shipments', payload);
    return res.data;
  },

  update: async (id: string, payload: Partial<CreateShipmentPayload>) => {
    const res = await api.patch<ApiResponse<{ shipment: Shipment }>>(`/shipments/${id}`, payload);
    return res.data;
  },

  updateStatus: async (id: string, payload: UpdateShipmentStatusPayload) => {
    const res = await api.patch<ApiResponse<{ shipment: Shipment }>>(`/shipments/${id}/status`, payload);
    return res.data;
  },

  addTracking: async (id: string, payload: UpdateShipmentStatusPayload) => {
    const res = await api.post<ApiResponse<{ entry: unknown }>>(`/shipments/${id}/tracking`, payload);
    return res.data;
  },
};
