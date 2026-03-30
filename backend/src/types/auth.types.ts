import { UserRole } from '../../generated/prisma';
import { Request } from 'express';

export interface JwtPayload {
  userId: string;
  email: string;
  role: UserRole;
}

export interface AuthRequest extends Request {
  user?: JwtPayload;
}

export interface RegisterBody {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: UserRole;
  // Farmer-specific
  farmName?: string;
  farmAddress?: string;
  farmCity?: string;
  farmProvince?: string;
  // Distributor-specific
  companyName?: string;
  distributorAddress?: string;
  distributorCity?: string;
  distributorProvince?: string;
  // Retailer-specific
  storeName?: string;
  storeAddress?: string;
  storeCity?: string;
  storeProvince?: string;
  storeType?: string;
}

export interface LoginBody {
  email: string;
  password: string;
}
