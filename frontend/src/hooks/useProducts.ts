import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { productService } from '@/services/productService';
import type { ProductFilters, CreateProductPayload, UpdateProductPayload } from '@/types/product';

export const PRODUCT_KEYS = {
  all: ['products'] as const,
  list: (filters: ProductFilters) => ['products', 'list', filters] as const,
  detail: (id: string) => ['products', 'detail', id] as const,
  categories: () => ['products', 'categories'] as const,
};

export const useProducts = (filters: ProductFilters = {}) =>
  useQuery({
    queryKey: PRODUCT_KEYS.list(filters),
    queryFn: () => productService.list(filters),
    select: (data) => data.data,
  });

export const useProduct = (id: string) =>
  useQuery({
    queryKey: PRODUCT_KEYS.detail(id),
    queryFn: () => productService.get(id),
    enabled: !!id,
    select: (data) => data.data.product,
  });

export const useCategories = () =>
  useQuery({
    queryKey: PRODUCT_KEYS.categories(),
    queryFn: () => productService.categories(),
    staleTime: 5 * 60_000,
    select: (data) => data.data.categories,
  });

export const useCreateProduct = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateProductPayload) => productService.create(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: PRODUCT_KEYS.all }),
  });
};

export const useUpdateProduct = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdateProductPayload }) =>
      productService.update(id, payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: PRODUCT_KEYS.all }),
  });
};

export const useDeleteProduct = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => productService.delete(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: PRODUCT_KEYS.all }),
  });
};
