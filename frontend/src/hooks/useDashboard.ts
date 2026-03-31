import { useQuery } from '@tanstack/react-query';
import { statsService } from '@/services/statsService';

export const useDashboard = () =>
  useQuery({
    queryKey: ['dashboard'],
    queryFn:  () => statsService.dashboard(),
    select:   (d) => d.data,
    staleTime: 30_000, // refresh every 30s
  });
