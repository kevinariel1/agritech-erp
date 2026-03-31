import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { shipmentService } from '@/services/shipmentService';
import type { CreateShipmentPayload, UpdateShipmentStatusPayload } from '@/types/shipment';

export const SHIP_KEYS = {
  all:    ['shipments'] as const,
  list:   (params: object)  => ['shipments', 'list', params]    as const,
  detail: (id: string)      => ['shipments', 'detail', id]      as const,
};

export const useShipments = (params: { status?: string; page?: number; limit?: number } = {}) =>
  useQuery({
    queryKey: SHIP_KEYS.list(params),
    queryFn:  () => shipmentService.list(params),
    select:   (d) => d.data,
  });

export const useShipment = (id: string) =>
  useQuery({
    queryKey: SHIP_KEYS.detail(id),
    queryFn:  () => shipmentService.get(id),
    enabled:  !!id,
    select:   (d) => d.data.shipment,
  });

export const useCreateShipment = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (payload: CreateShipmentPayload) => shipmentService.create(payload),
    onSuccess:  () => qc.invalidateQueries({ queryKey: SHIP_KEYS.all }),
  });
};

export const useUpdateShipmentStatus = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdateShipmentStatusPayload }) =>
      shipmentService.updateStatus(id, payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: SHIP_KEYS.all }),
  });
};

export const useAddTracking = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, payload }: { id: string; payload: UpdateShipmentStatusPayload }) =>
      shipmentService.addTracking(id, payload),
    onSuccess: () => qc.invalidateQueries({ queryKey: SHIP_KEYS.all }),
  });
};
