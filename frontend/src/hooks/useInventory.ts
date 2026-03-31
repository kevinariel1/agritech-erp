import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { inventoryService } from '@/services/inventoryService';
import type { InventoryFilters, CreateInventoryPayload, UpdateInventoryPayload } from '@/types/inventory';

export const INV_KEYS = {
  all:     ['inventory'] as const,
  list:    (filters: InventoryFilters) => ['inventory', 'list', filters] as const,
  detail:  (id: string) => ['inventory', 'detail', id] as const,
  summary: () => ['inventory', 'summary'] as const,
};

export const useInventory = (filters: InventoryFilters = {}) =>
  useQuery({
    queryKey: INV_KEYS.list(filters),
    queryFn: () => inventoryService.list(filters),
    select: (d) => d.data,
  });

export const useInventorySummary = () =>
  useQuery({
    queryKey: INV_KEYS.summary(),
    queryFn: () => inventoryService.summary(),
    select: (d) => d.data.summary,
  });

export const useCreateInventory = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateInventoryPayload) => inventoryService.create(payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: INV_KEYS.all }),
  });
};

export const useUpdateInventory = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdateInventoryPayload }) =>
      inventoryService.update(id, payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: INV_KEYS.all }),
  });
};

export const useDeleteInventory = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => inventoryService.delete(id),
    onSuccess: () => qc.invalidateQueries({ queryKey: INV_KEYS.all }),
  });
};
