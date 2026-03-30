import api from './api';
import type { LoginPayload, RegisterPayload, ApiResponse, AuthResponseData, User } from '@/types/auth';

export const authService = {
  login: async (payload: LoginPayload) => {
    const res = await api.post<ApiResponse<AuthResponseData>>('/auth/login', payload);
    return res.data;
  },

  register: async (payload: RegisterPayload) => {
    const res = await api.post<ApiResponse<AuthResponseData>>('/auth/register', payload);
    return res.data;
  },

  getMe: async () => {
    const res = await api.get<ApiResponse<{ user: User }>>('/auth/me');
    return res.data;
  },

  updateMe: async (payload: { firstName?: string; lastName?: string; phone?: string }) => {
    const res = await api.patch<ApiResponse<{ user: User }>>('/auth/me', payload);
    return res.data;
  },

  changePassword: async (payload: { currentPassword: string; newPassword: string }) => {
    const res = await api.patch<ApiResponse<null>>('/auth/change-password', payload);
    return res.data;
  },
};
