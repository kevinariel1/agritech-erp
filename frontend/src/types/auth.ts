export type UserRole = 'FARMER' | 'DISTRIBUTOR' | 'RETAILER' | 'ADMIN';

export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: UserRole;
  isActive: boolean;
  emailVerified: boolean;
  createdAt: string;
  farm?: { id: string; name: string; city: string; province: string } | null;
  retailer?: { id: string; storeName: string; city: string; province: string } | null;
  distributor?: { id: string; companyName: string; city: string; province: string } | null;
}

export interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: UserRole;
  // Farmer
  farmName?: string;
  farmAddress?: string;
  farmCity?: string;
  farmProvince?: string;
  // Distributor
  companyName?: string;
  distributorAddress?: string;
  distributorCity?: string;
  distributorProvince?: string;
  // Retailer
  storeName?: string;
  storeAddress?: string;
  storeCity?: string;
  storeProvince?: string;
  storeType?: string;
}

export interface ApiResponse<T> {
  success: boolean;
  message: string;
  data: T;
}

export interface AuthResponseData {
  token: string;
  user: Pick<User, 'id' | 'email' | 'firstName' | 'lastName' | 'role'>;
}
