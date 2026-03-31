export interface InventoryItem {
  id: string;
  productId: string;
  product?: {
    id: string;
    name: string;
    category: string;
    unit: string;
    unitPrice: number;
  };
  farmId?: string | null;
  farm?: { id: string; name: string } | null;
  retailerId?: string | null;
  retailer?: { id: string; storeName: string } | null;
  quantity: number;
  batchNumber: string;
  harvestDate?: string | null;
  expiryDate?: string | null;
  qualityGrade?: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface InventoryFilters {
  productId?: string;
  qualityGrade?: string;
  lowStock?: boolean;
  threshold?: number;
  page?: number;
  limit?: number;
}

export interface InventoryResponse {
  inventories: InventoryItem[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

export interface InventorySummaryItem {
  product: {
    id: string;
    name: string;
    category: string;
    unit: string;
    unitPrice: number;
  };
  totalQty: number;
  batchCount: number;
}

export interface CreateInventoryPayload {
  productId: string;
  quantity: number;
  batchNumber: string;
  harvestDate?: string;
  expiryDate?: string;
  qualityGrade?: string;
}

export interface UpdateInventoryPayload {
  quantity?: number;
  batchNumber?: string;
  harvestDate?: string | null;
  expiryDate?: string | null;
  qualityGrade?: string | null;
}
