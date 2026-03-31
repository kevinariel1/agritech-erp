import api from './api';
import type { ApiResponse } from '@/types/auth';
import type {
  InventoryItem,
  InventoryFilters,
  InventoryResponse,
  InventorySummaryItem,
  CreateInventoryPayload,
  UpdateInventoryPayload,
} from '@/types/inventory';

export const inventoryService = {
  list: async (filters: InventoryFilters = {}) => {
    const params = new URLSearchParams();
    if (filters.productId)   params.set('productId',   filters.productId);
    if (filters.qualityGrade)params.set('qualityGrade',filters.qualityGrade);
    if (filters.lowStock)    params.set('lowStock',     'true');
    if (filters.threshold)   params.set('threshold',   String(filters.threshold));
    if (filters.page)        params.set('page',        String(filters.page));
    if (filters.limit)       params.set('limit',       String(filters.limit));
    const res = await api.get<ApiResponse<InventoryResponse>>(`/inventory?${params}`);
    return res.data;
  },

  get: async (id: string) => {
    const res = await api.get<ApiResponse<{ inventory: InventoryItem }>>(`/inventory/${id}`);
    return res.data;
  },

  summary: async () => {
    const res = await api.get<ApiResponse<{ summary: InventorySummaryItem[] }>>('/inventory/summary');
    return res.data;
  },

  create: async (payload: CreateInventoryPayload) => {
    const res = await api.post<ApiResponse<{ inventory: InventoryItem }>>('/inventory', payload);
    return res.data;
  },

  update: async (id: string, payload: UpdateInventoryPayload) => {
    const res = await api.patch<ApiResponse<{ inventory: InventoryItem }>>(`/inventory/${id}`, payload);
    return res.data;
  },

  delete: async (id: string) => {
    const res = await api.delete<ApiResponse<null>>(`/inventory/${id}`);
    return res.data;
  },
};
