import api from './api';
import type { ApiResponse } from '@/types/auth';
import type {
  Product,
  ProductFilters,
  ProductsResponse,
  CreateProductPayload,
  UpdateProductPayload,
} from '@/types/product';

export const productService = {
  list: async (filters: ProductFilters = {}) => {
    const params = new URLSearchParams();
    if (filters.search)    params.set('search', filters.search);
    if (filters.category)  params.set('category', filters.category);
    if (filters.farmId)    params.set('farmId', filters.farmId);
    if (filters.minPrice)  params.set('minPrice', filters.minPrice);
    if (filters.maxPrice)  params.set('maxPrice', filters.maxPrice);
    if (filters.page)      params.set('page', String(filters.page));
    if (filters.limit)     params.set('limit', String(filters.limit));

    const res = await api.get<ApiResponse<ProductsResponse>>(`/products?${params}`);
    return res.data;
  },

  get: async (id: string) => {
    const res = await api.get<ApiResponse<{ product: Product }>>(`/products/${id}`);
    return res.data;
  },

  create: async (payload: CreateProductPayload) => {
    const res = await api.post<ApiResponse<{ product: Product }>>('/products', payload);
    return res.data;
  },

  update: async (id: string, payload: UpdateProductPayload) => {
    const res = await api.patch<ApiResponse<{ product: Product }>>(`/products/${id}`, payload);
    return res.data;
  },

  delete: async (id: string) => {
    const res = await api.delete<ApiResponse<null>>(`/products/${id}`);
    return res.data;
  },

  categories: async () => {
    const res = await api.get<ApiResponse<{ categories: string[] }>>('/products/categories');
    return res.data;
  },
};
