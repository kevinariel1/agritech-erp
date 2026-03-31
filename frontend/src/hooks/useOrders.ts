import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { orderService } from '@/services/orderService';
import type { CreateOrderPayload, OrderStatus } from '@/types/order';

export const ORDER_KEYS = {
  all:    ['orders'] as const,
  list:   (params: object) => ['orders', 'list', params] as const,
  detail: (id: string)     => ['orders', 'detail', id]   as const,
  stats:  ()               => ['orders', 'stats']         as const,
};

export const useOrders = (params: { status?: string; page?: number; limit?: number } = {}) =>
  useQuery({
    queryKey: ORDER_KEYS.list(params),
    queryFn:  () => orderService.list(params),
    select:   (d) => d.data,
  });

export const useOrder = (id: string) =>
  useQuery({
    queryKey: ORDER_KEYS.detail(id),
    queryFn:  () => orderService.get(id),
    enabled:  !!id,
    select:   (d) => d.data.order,
  });

export const useOrderStats = () =>
  useQuery({
    queryKey: ORDER_KEYS.stats(),
    queryFn:  () => orderService.stats(),
    select:   (d) => d.data,
  });

export const useCreateOrder = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateOrderPayload) => orderService.create(payload),
    onSuccess:  () => qc.invalidateQueries({ queryKey: ORDER_KEYS.all }),
  });
};

export const useUpdateOrderStatus = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: OrderStatus }) =>
      orderService.updateStatus(id, status),
    onSuccess: () => qc.invalidateQueries({ queryKey: ORDER_KEYS.all }),
  });
};
