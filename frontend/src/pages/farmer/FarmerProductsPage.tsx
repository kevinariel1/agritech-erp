import { useState, useEffect } from 'react';
import { Plus, Search, Edit2, Trash2, Package, RefreshCw, Filter, AlertCircle, CheckCircle } from 'lucide-react';
import { useProducts, useCategories, useCreateProduct, useUpdateProduct, useDeleteProduct } from '@/hooks/useProducts';
import { Modal } from '@/components/shared/Modal';
import type { Product, CreateProductPayload, UpdateProductPayload } from '@/types/product';

// ── Helpers ─────────────────────────────────────────────────
const formatPrice = (n: number) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);

const UNITS = ['kg', 'pcs', 'liter', 'ikat', 'buah', 'karung', 'ton', 'gram', 'lusin'];

// ── Product Form ─────────────────────────────────────────────
interface ProductFormProps {
  initial?: Partial<CreateProductPayload>;
  onSubmit: (data: CreateProductPayload) => void;
  isLoading: boolean;
  error: string;
}

const ProductForm = ({ initial, onSubmit, isLoading, error }: ProductFormProps) => {
  const { data: categories = [] } = useCategories();
  const [form, setForm] = useState<CreateProductPayload>({
    name: initial?.name ?? '',
    description: initial?.description ?? '',
    category: initial?.category ?? '',
    unit: initial?.unit ?? 'kg',
    unitPrice: initial?.unitPrice ?? 0,
    imageUrl: initial?.imageUrl ?? '',
  });

  const set = (field: keyof CreateProductPayload, value: string | number) =>
    setForm((p) => ({ ...p, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
      {error && (
        <div style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)',
          background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.25)',
          color: '#f87171', fontSize: '0.875rem',
        }}>
          <AlertCircle size={15} style={{ flexShrink: 0 }} />
          {error}
        </div>
      )}

      <div>
        <label className="field-label">Product name *</label>
        <input className="field-input" placeholder="e.g. Organic Tomato" value={form.name}
          onChange={(e) => set('name', e.target.value)} required />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label className="field-label">Category *</label>
          <input className="field-input" placeholder="e.g. Vegetables"
            value={form.category} onChange={(e) => set('category', e.target.value)}
            list="category-list" required />
          <datalist id="category-list">
            {categories.map((c) => <option key={c} value={c} />)}
          </datalist>
        </div>
        <div>
          <label className="field-label">Unit *</label>
          <select className="field-input" value={form.unit} onChange={(e) => set('unit', e.target.value)}>
            {UNITS.map((u) => <option key={u} value={u}>{u}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label className="field-label">Price per unit (IDR) *</label>
        <input className="field-input" type="number" min={0} placeholder="e.g. 15000"
          value={form.unitPrice || ''} onChange={(e) => set('unitPrice', parseFloat(e.target.value) || 0)} required />
      </div>

      <div>
        <label className="field-label">Description</label>
        <textarea className="field-input" placeholder="Describe your product..." rows={3}
          style={{ resize: 'vertical', minHeight: 80 }}
          value={form.description ?? ''} onChange={(e) => set('description', e.target.value)} />
      </div>

      <div>
        <label className="field-label">Image URL <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(optional)</span></label>
        <input className="field-input" type="url" placeholder="https://..." value={form.imageUrl ?? ''}
          onChange={(e) => set('imageUrl', e.target.value)} />
      </div>

      <button type="submit" disabled={isLoading} className="btn-primary" style={{ marginTop: '0.5rem' }}>
        {isLoading ? (
          <>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ animation: 'spin-slow 0.8s linear infinite' }}>
              <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
              <path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
            </svg>
            Saving...
          </>
        ) : initial?.name ? 'Update product' : 'Add product'}
      </button>
    </form>
  );
};

// ── Product Card ─────────────────────────────────────────────
interface ProductCardProps {
  product: Product;
  onEdit: (p: Product) => void;
  onDelete: (p: Product) => void;
}

const ProductCard = ({ product, onEdit, onDelete }: ProductCardProps) => (
  <div style={{
    background: 'var(--surface-2)',
    border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-lg)',
    overflow: 'hidden',
    transition: 'all var(--transition-base)',
    display: 'flex',
    flexDirection: 'column',
  }}
    onMouseEnter={(e) => {
      (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-light)';
      (e.currentTarget as HTMLElement).style.transform = 'translateY(-2px)';
      (e.currentTarget as HTMLElement).style.boxShadow = 'var(--shadow-md)';
    }}
    onMouseLeave={(e) => {
      (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)';
      (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
      (e.currentTarget as HTMLElement).style.boxShadow = 'none';
    }}
  >
    {/* Image / placeholder */}
    <div style={{
      height: 140,
      background: product.imageUrl
        ? `url(${product.imageUrl}) center/cover no-repeat`
        : 'linear-gradient(135deg, var(--surface-3), var(--surface-4))',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      position: 'relative',
    }}>
      {!product.imageUrl && <Package size={36} style={{ color: 'var(--text-muted)', opacity: 0.5 }} />}
      {/* Status badge */}
      <div style={{ position: 'absolute', top: 10, right: 10 }}>
        <span className={product.isActive ? 'badge badge-green' : 'badge badge-red'}
          style={{ fontSize: '0.68rem' }}>
          {product.isActive ? '● Active' : '● Inactive'}
        </span>
      </div>
      {/* Category chip */}
      <div style={{ position: 'absolute', bottom: 10, left: 10 }}>
        <span className="badge" style={{
          background: 'rgba(0,0,0,0.5)', color: 'var(--text-secondary)',
          fontSize: '0.68rem', backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255,255,255,0.08)',
        }}>
          {product.category}
        </span>
      </div>
    </div>

    {/* Content */}
    <div style={{ padding: '1rem', flex: 1, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <h3 style={{
        fontFamily: 'var(--font-display)', fontSize: '0.9375rem', fontWeight: 700,
        color: 'var(--text-primary)',
        overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
      }}>
        {product.name}
      </h3>

      {product.description && (
        <p style={{
          fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.5,
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          {product.description}
        </p>
      )}

      <div style={{ marginTop: 'auto', paddingTop: '0.5rem' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem', marginBottom: '0.5rem' }}>
          <span style={{
            fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800,
            color: 'var(--green-400)',
          }}>
            {formatPrice(product.unitPrice)}
          </span>
          <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>/{product.unit}</span>
        </div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          📦 {product._count?.inventories ?? 0} inventory batch(es)
        </div>
      </div>
    </div>

    {/* Actions */}
    <div style={{
      display: 'flex', gap: '0.5rem', padding: '0.75rem 1rem',
      borderTop: '1px solid var(--border-subtle)',
    }}>
      <button onClick={() => onEdit(product)} className="btn-outline"
        style={{ flex: 1, padding: '0.5rem', fontSize: '0.8rem' }}>
        <Edit2 size={14} /> Edit
      </button>
      <button onClick={() => onDelete(product)}
        style={{
          flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.375rem',
          padding: '0.5rem', fontSize: '0.8rem', fontWeight: 500,
          background: 'transparent', border: '1px solid rgba(239,68,68,0.25)',
          borderRadius: 'var(--radius-md)', cursor: 'pointer', color: '#f87171',
          transition: 'all var(--transition-fast)', fontFamily: 'var(--font-sans)',
        }}
        onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(239,68,68,0.1)'; }}
        onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
      >
        <Trash2 size={14} /> Delete
      </button>
    </div>
  </div>
);

// ── Toast notification ────────────────────────────────────────
const Toast = ({ message, type }: { message: string; type: 'success' | 'error' }) => (
  <div className="animate-fade-in-up" style={{
    position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 2000,
    display: 'flex', alignItems: 'center', gap: '0.625rem',
    padding: '0.875rem 1.25rem',
    background: type === 'success' ? 'rgba(22,163,74,0.9)' : 'rgba(220,38,38,0.9)',
    backdropFilter: 'blur(8px)',
    borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)',
    color: '#fff', fontSize: '0.875rem', fontWeight: 500,
    border: `1px solid ${type === 'success' ? 'rgba(74,222,128,0.4)' : 'rgba(248,113,113,0.4)'}`,
  }}>
    {type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
    {message}
  </div>
);

// ── Main Page ────────────────────────────────────────────────
export const FarmerProductsPage = () => {
  const [search, setSearch] = useState('');
  const [debouncedSearch, setDebouncedSearch] = useState('');
  const [category, setCategory] = useState('');
  const [page, setPage] = useState(1);
  const [modalMode, setModalMode] = useState<'create' | 'edit' | 'delete' | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [formError, setFormError] = useState('');

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => { setDebouncedSearch(search); setPage(1); }, 400);
    return () => clearTimeout(timer);
  }, [search]);

  const { data, isLoading, refetch } = useProducts({
    search: debouncedSearch,
    category: category || undefined,
    page,
    limit: 12,
  });

  const { data: categories = [] } = useCategories();
  const createMutation = useCreateProduct();
  const updateMutation = useUpdateProduct();
  const deleteMutation = useDeleteProduct();

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const openCreate = () => { setSelectedProduct(null); setFormError(''); setModalMode('create'); };
  const openEdit   = (p: Product) => { setSelectedProduct(p); setFormError(''); setModalMode('edit'); };
  const openDelete = (p: Product) => { setSelectedProduct(p); setModalMode('delete'); };
  const closeModal = () => { setModalMode(null); setSelectedProduct(null); setFormError(''); };

  const handleCreate = async (data: CreateProductPayload) => {
    setFormError('');
    try {
      await createMutation.mutateAsync(data);
      closeModal();
      showToast('Product created successfully!', 'success');
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message ?? 'Failed to create product.';
      setFormError(msg);
    }
  };

  const handleUpdate = async (data: UpdateProductPayload) => {
    if (!selectedProduct) return;
    setFormError('');
    try {
      await updateMutation.mutateAsync({ id: selectedProduct.id, payload: data });
      closeModal();
      showToast('Product updated successfully!', 'success');
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message ?? 'Failed to update product.';
      setFormError(msg);
    }
  };

  const handleDelete = async () => {
    if (!selectedProduct) return;
    try {
      await deleteMutation.mutateAsync(selectedProduct.id);
      closeModal();
      showToast('Product deleted.', 'success');
    } catch {
      showToast('Failed to delete product.', 'error');
    }
  };

  const products = data?.products ?? [];
  const pagination = data?.pagination;

  return (
    <div>
      {/* Page header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '2rem', gap: '1rem', flexWrap: 'wrap' }}>
        <div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800,
            letterSpacing: '-0.03em', marginBottom: '0.25rem',
            background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--green-400) 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            My Products
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Manage and list your farm products for buyers
          </p>
        </div>
        <button id="add-product-btn" onClick={openCreate} className="btn-primary" style={{ width: 'auto', padding: '0.75rem 1.5rem' }}>
          <Plus size={18} /> Add Product
        </button>
      </div>

      {/* Filters bar */}
      <div style={{
        display: 'flex', gap: '0.75rem', marginBottom: '1.75rem', flexWrap: 'wrap',
      }}>
        {/* Search */}
        <div style={{ position: 'relative', flex: '1', minWidth: 200 }}>
          <Search size={16} style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            className="field-input"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{ paddingLeft: '2.5rem' }}
          />
        </div>

        {/* Category filter */}
        <div style={{ position: 'relative', minWidth: 180 }}>
          <Filter size={16} style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <select className="field-input" value={category} onChange={(e) => { setCategory(e.target.value); setPage(1); }}
            style={{ paddingLeft: '2.5rem' }}>
            <option value="">All categories</option>
            {categories.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <button onClick={() => refetch()} className="btn-outline" style={{ padding: '0.75rem', flexShrink: 0 }} title="Refresh">
          <RefreshCw size={16} />
        </button>
      </div>

      {/* States */}
      {isLoading && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
          {[...Array(6)].map((_, i) => (
            <div key={i} style={{
              height: 320, borderRadius: 'var(--radius-lg)',
              background: 'var(--surface-2)', border: '1px solid var(--border-subtle)',
              animation: 'pulse-glow 2s ease-in-out infinite',
            }} />
          ))}
        </div>
      )}

      {!isLoading && products.length === 0 && (
        <div className="glass-card" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
          <Package size={48} style={{ color: 'var(--text-muted)', marginBottom: '1rem', opacity: 0.5 }} />
          <h3 style={{ marginBottom: '0.5rem', fontFamily: 'var(--font-display)' }}>No products yet</h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.5rem' }}>
            {search || category ? 'Try adjusting your filters.' : 'Add your first product to start selling.'}
          </p>
          {!search && !category && (
            <button onClick={openCreate} className="btn-primary" style={{ width: 'auto', padding: '0.75rem 1.5rem' }}>
              <Plus size={18} /> Add your first product
            </button>
          )}
        </div>
      )}

      {/* Product grid */}
      {!isLoading && products.length > 0 && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1.25rem' }}>
            {products.map((p) => (
              <ProductCard key={p.id} product={p} onEdit={openEdit} onDelete={openDelete} />
            ))}
          </div>

          {/* Pagination */}
          {pagination && pagination.totalPages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0.5rem', marginTop: '2rem' }}>
              <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)} className="btn-outline"
                style={{ padding: '0.5rem 1rem', opacity: page <= 1 ? 0.4 : 1 }}>
                Previous
              </button>
              <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)', padding: '0 0.5rem' }}>
                Page {page} of {pagination.totalPages}
              </span>
              <button disabled={page >= pagination.totalPages} onClick={() => setPage((p) => p + 1)} className="btn-outline"
                style={{ padding: '0.5rem 1rem', opacity: page >= pagination.totalPages ? 0.4 : 1 }}>
                Next
              </button>
            </div>
          )}

          <div style={{ textAlign: 'center', marginTop: '0.75rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Showing {products.length} of {pagination?.total ?? products.length} products
          </div>
        </>
      )}

      {/* Create Modal */}
      <Modal isOpen={modalMode === 'create'} onClose={closeModal} title="Add New Product">
        <ProductForm
          onSubmit={handleCreate}
          isLoading={createMutation.isPending}
          error={formError}
        />
      </Modal>

      {/* Edit Modal */}
      <Modal isOpen={modalMode === 'edit'} onClose={closeModal} title="Edit Product">
        {selectedProduct && (
          <ProductForm
            initial={{
              ...selectedProduct,
              description: selectedProduct.description ?? undefined,
              imageUrl: selectedProduct.imageUrl ?? undefined,
            }}
            onSubmit={handleUpdate}
            isLoading={updateMutation.isPending}
            error={formError}
          />
        )}
      </Modal>

      {/* Delete Confirm Modal */}
      <Modal isOpen={modalMode === 'delete'} onClose={closeModal} title="Delete Product" maxWidth={400}>
        <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🗑️</div>
          <h3 style={{ fontFamily: 'var(--font-display)', marginBottom: '0.5rem' }}>
            Delete "{selectedProduct?.name}"?
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '2rem' }}>
            {selectedProduct?._count?.inventories
              ? 'This will deactivate the product (it has inventory history).'
              : 'This action cannot be undone.'}
          </p>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button onClick={closeModal} className="btn-outline" style={{ flex: 1 }}>Cancel</button>
            <button
              onClick={handleDelete}
              disabled={deleteMutation.isPending}
              style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                padding: '0.8125rem 1.5rem',
                background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
                color: '#fff', border: 'none', borderRadius: 'var(--radius-md)',
                cursor: 'pointer', fontWeight: 600, fontSize: '0.9375rem',
                fontFamily: 'var(--font-display)',
              }}
            >
              {deleteMutation.isPending ? 'Deleting...' : <><Trash2 size={16} /> Delete</>}
            </button>
          </div>
        </div>
      </Modal>

      {/* Toast */}
      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
};
