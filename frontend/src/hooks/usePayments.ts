import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { paymentService } from '@/services/paymentService';
import type { CreatePaymentPayload, PaymentStatus } from '@/types/payment';

export const PAY_KEYS = {
  all:     ['payments'] as const,
  list:    (params: object)   => ['payments', 'list', params]       as const,
  detail:  (id: string)       => ['payments', 'detail', id]         as const,
  byOrder: (orderId: string)  => ['payments', 'by-order', orderId]  as const,
  stats:   ()                 => ['payments', 'stats']              as const,
};

export const usePayments = (params: { status?: string; page?: number; limit?: number } = {}) =>
  useQuery({
    queryKey: PAY_KEYS.list(params),
    queryFn:  () => paymentService.list(params),
    select:   (d) => d.data,
  });

export const usePaymentStats = () =>
  useQuery({
    queryKey: PAY_KEYS.stats(),
    queryFn:  () => paymentService.stats(),
    select:   (d) => d.data,
  });

export const usePaymentByOrder = (orderId: string) =>
  useQuery({
    queryKey: PAY_KEYS.byOrder(orderId),
    queryFn:  () => paymentService.getByOrder(orderId),
    enabled:  !!orderId,
    select:   (d) => d.data.payment,
    retry:    false, // 404 is expected when no payment yet
  });

export const useCreatePayment = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreatePaymentPayload) => paymentService.create(payload),
    onSuccess:  () => qc.invalidateQueries({ queryKey: PAY_KEYS.all }),
  });
};

export const useUpdatePaymentStatus = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: PaymentStatus }) =>
      paymentService.updateStatus(id, status),
    onSuccess: () => qc.invalidateQueries({ queryKey: PAY_KEYS.all }),
  });
};
