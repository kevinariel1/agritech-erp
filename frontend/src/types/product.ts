export interface Product {
  id: string;
  farmId: string;
  farm?: {
    id: string;
    name: string;
    city: string;
    province: string;
    user?: { firstName: string; lastName: string; phone?: string };
  };
  name: string;
  description?: string | null;
  category: string;
  unit: string;
  unitPrice: number;
  imageUrl?: string | null;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
  _count?: { inventories: number; orderItems?: number };
  inventories?: {
    id: string;
    quantity: number;
    qualityGrade?: string | null;
    harvestDate?: string | null;
    expiryDate?: string | null;
    batchNumber: string;
  }[];
}

export interface ProductFilters {
  search?: string;
  category?: string;
  farmId?: string;
  minPrice?: string;
  maxPrice?: string;
  page?: number;
  limit?: number;
}

export interface ProductsResponse {
  products: Product[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface CreateProductPayload {
  name: string;
  description?: string;
  category: string;
  unit: string;
  unitPrice: number;
  imageUrl?: string;
}

export interface UpdateProductPayload extends Partial<CreateProductPayload> {
  isActive?: boolean;
}
