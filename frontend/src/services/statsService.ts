import api from './api';
import type { ApiResponse } from '@/types/auth';

export interface DashboardData {
  // Common
  orderStatusMap: Record<string, number>;
  totalRevenue: number;
  recentOrders: {
    id: string;
    orderNumber: string;
    status: string;
    totalAmount: number;
    createdAt: string;
    buyer:  { firstName: string; lastName: string };
    seller: { firstName: string; lastName: string };
    orderItems: { product: { name: string } }[];
  }[];
  // Farmer
  productCount?: number;
  inventoryCount?: number;
  lowStockCount?: number;
  expiredInventory?: number;
  pendingPayments?: number;
  // Retailer
  activeOrders?: number;
  totalSpent?: number;
  // Admin
  usersByRole?: Record<string, number>;
  totalProducts?: number;
  totalInventory?: number;
  systemRevenue?: number;
  recentUsers?: { id: string; firstName: string; lastName: string; email: string; role: string; createdAt: string }[];
}

export const statsService = {
  dashboard: async () => {
    const res = await api.get<ApiResponse<DashboardData>>('/dashboard');
    return res.data;
  },
};
