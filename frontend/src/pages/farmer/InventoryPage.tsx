import { useState } from 'react';
import {
  Plus, Warehouse, Edit2, Trash2, RefreshCw,
  AlertTriangle, CheckCircle, AlertCircle, Package,
  BarChart3, TrendingDown,
} from 'lucide-react';
import {
  useInventory, useInventorySummary,
  useCreateInventory, useUpdateInventory, useDeleteInventory,
} from '@/hooks/useInventory';
import { useProducts } from '@/hooks/useProducts';
import { Modal } from '@/components/shared/Modal';
import type { InventoryItem, CreateInventoryPayload, UpdateInventoryPayload } from '@/types/inventory';

// ── Helpers ──────────────────────────────────────────────────
const fmtDate = (d?: string | null) =>
  d ? new Date(d).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' }) : '—';

const isExpiringSoon = (d?: string | null) => {
  if (!d) return false;
  const diff = new Date(d).getTime() - Date.now();
  return diff > 0 && diff < 7 * 24 * 60 * 60 * 1000; // within 7 days
};
const isExpired = (d?: string | null) => !!d && new Date(d) < new Date();

const QUALITY_GRADES = ['Premium', 'A', 'B', 'C'];
const QUALITY_COLORS: Record<string, string> = {
  Premium: '#a78bfa', A: '#4ade80', B: '#facc15', C: '#f87171',
};

// ── Toast ────────────────────────────────────────────────────
const Toast = ({ message, type }: { message: string; type: 'success' | 'error' }) => (
  <div className="animate-fade-in-up" style={{
    position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 2000,
    display: 'flex', alignItems: 'center', gap: '0.625rem',
    padding: '0.875rem 1.25rem',
    background: type === 'success' ? 'rgba(22,163,74,0.9)' : 'rgba(220,38,38,0.9)',
    backdropFilter: 'blur(8px)', borderRadius: 'var(--radius-md)',
    boxShadow: 'var(--shadow-lg)', color: '#fff', fontSize: '0.875rem', fontWeight: 500,
    border: `1px solid ${type === 'success' ? 'rgba(74,222,128,0.4)' : 'rgba(248,113,113,0.4)'}`,
  }}>
    {type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
    {message}
  </div>
);

// ── Summary card ─────────────────────────────────────────────
const SummaryCard = ({ icon, label, value, color = 'var(--green-400)' }: {
  icon: React.ReactNode; label: string; value: string | number; color?: string;
}) => (
  <div style={{
    background: 'var(--surface-2)', border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-lg)', padding: '1.125rem 1.25rem',
    display: 'flex', alignItems: 'center', gap: '1rem',
  }}>
    <div style={{ padding: '0.625rem', background: `${color}18`, borderRadius: 'var(--radius-md)', color, flexShrink: 0 }}>
      {icon}
    </div>
    <div>
      <div style={{ fontSize: '1.25rem', fontWeight: 800, fontFamily: 'var(--font-display)', color }}>{value}</div>
      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{label}</div>
    </div>
  </div>
);

// ── Inventory Form ────────────────────────────────────────────
interface InventoryFormProps {
  initial?: Partial<CreateInventoryPayload>;
  isEdit?: boolean;
  onSubmit: (data: CreateInventoryPayload | UpdateInventoryPayload) => void;
  isLoading: boolean;
  error: string;
}

const InventoryForm = ({ initial, isEdit = false, onSubmit, isLoading, error }: InventoryFormProps) => {
  const { data: productsData } = useProducts({ limit: 100 });
  const products = productsData?.products ?? [];

  const [form, setForm] = useState({
    productId:    initial?.productId    ?? '',
    quantity:     initial?.quantity     ?? 0,
    batchNumber:  initial?.batchNumber  ?? '',
    harvestDate:  initial?.harvestDate  ?? '',
    expiryDate:   initial?.expiryDate   ?? '',
    qualityGrade: initial?.qualityGrade ?? '',
  });

  const set = (field: string, value: string | number) =>
    setForm((p) => ({ ...p, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const payload: CreateInventoryPayload = {
      productId:    form.productId,
      quantity:     parseFloat(String(form.quantity)) || 0,
      batchNumber:  form.batchNumber,
      harvestDate:  form.harvestDate || undefined,
      expiryDate:   form.expiryDate  || undefined,
      qualityGrade: form.qualityGrade || undefined,
    };
    if (!isEdit) {
      onSubmit(payload);
    } else {
      const updatePayload: UpdateInventoryPayload = {
        quantity:     payload.quantity,
        batchNumber:  payload.batchNumber,
        harvestDate:  payload.harvestDate,
        expiryDate:   payload.expiryDate,
        qualityGrade: payload.qualityGrade,
      };
      onSubmit(updatePayload);
    }
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

      {!isEdit && (
        <div>
          <label className="field-label">Product *</label>
          <select className="field-input" value={form.productId}
            onChange={(e) => set('productId', e.target.value)} required>
            <option value="">— Select a product —</option>
            {products.map((p) => (
              <option key={p.id} value={p.id}>{p.name} ({p.unit})</option>
            ))}
          </select>
        </div>
      )}

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label className="field-label">Quantity *</label>
          <input className="field-input" type="number" min={0} step="0.01"
            placeholder="e.g. 50" value={form.quantity || ''}
            onChange={(e) => set('quantity', e.target.value)} required />
        </div>
        <div>
          <label className="field-label">Batch number *</label>
          <input className="field-input" placeholder="e.g. BTH-2025-001"
            value={form.batchNumber} onChange={(e) => set('batchNumber', e.target.value)} required />
        </div>
      </div>

      <div>
        <label className="field-label">Quality grade</label>
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {['', ...QUALITY_GRADES].map((g) => (
            <button key={g} type="button"
              onClick={() => set('qualityGrade', g)}
              style={{
                padding: '0.375rem 0.875rem', borderRadius: 99,
                border: `1px solid ${form.qualityGrade === g ? (QUALITY_COLORS[g] ?? 'var(--green-500)') : 'var(--border-light)'}`,
                background: form.qualityGrade === g ? `${QUALITY_COLORS[g] ?? 'var(--green-500)'}22` : 'transparent',
                color: form.qualityGrade === g ? (QUALITY_COLORS[g] ?? 'var(--green-400)') : 'var(--text-muted)',
                cursor: 'pointer', fontSize: '0.8125rem', fontWeight: 500,
                transition: 'all var(--transition-fast)',
              }}>
              {g || 'None'}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        <div>
          <label className="field-label">Harvest date</label>
          <input className="field-input" type="date" value={form.harvestDate ?? ''}
            onChange={(e) => set('harvestDate', e.target.value)} />
        </div>
        <div>
          <label className="field-label">Expiry date</label>
          <input className="field-input" type="date" value={form.expiryDate ?? ''}
            onChange={(e) => set('expiryDate', e.target.value)} />
        </div>
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
        ) : isEdit ? 'Update batch' : 'Add inventory batch'}
      </button>
    </form>
  );
};

// ── Inventory Row ─────────────────────────────────────────────
const InventoryRow = ({ item, onEdit, onDelete }: {
  item: InventoryItem;
  onEdit: (i: InventoryItem) => void;
  onDelete: (i: InventoryItem) => void;
}) => {
  const expired     = isExpired(item.expiryDate);
  const expiringSoon = isExpiringSoon(item.expiryDate);
  const grade = item.qualityGrade;

  return (
    <tr style={{ borderBottom: '1px solid var(--border-subtle)', transition: 'background var(--transition-fast)' }}
      onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(34,197,94,0.03)')}
      onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
    >
      <td style={{ padding: '0.875rem 1rem' }}>
        <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{item.product?.name}</div>
        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.product?.category}</div>
      </td>
      <td style={{ padding: '0.875rem 1rem' }}>
        <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
          {item.batchNumber}
        </span>
      </td>
      <td style={{ padding: '0.875rem 1rem', textAlign: 'right' }}>
        <span style={{ fontWeight: 700, color: item.quantity < 10 ? '#f87171' : 'var(--green-400)', fontSize: '0.9375rem' }}>
          {item.quantity}
        </span>
        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginLeft: '0.25rem' }}>
          {item.product?.unit}
        </span>
      </td>
      <td style={{ padding: '0.875rem 1rem' }}>
        {grade ? (
          <span style={{
            padding: '0.2rem 0.6rem', borderRadius: 99, fontSize: '0.75rem', fontWeight: 600,
            color: QUALITY_COLORS[grade] ?? 'var(--text-secondary)',
            background: `${QUALITY_COLORS[grade] ?? '#888'}20`,
            border: `1px solid ${QUALITY_COLORS[grade] ?? '#888'}40`,
          }}>
            {grade}
          </span>
        ) : <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>—</span>}
      </td>
      <td style={{ padding: '0.875rem 1rem', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
        {fmtDate(item.harvestDate)}
      </td>
      <td style={{ padding: '0.875rem 1rem' }}>
        {item.expiryDate ? (
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
            fontSize: '0.8rem', fontWeight: 500,
            color: expired ? '#f87171' : expiringSoon ? '#facc15' : 'var(--text-secondary)',
          }}>
            {expired && <AlertTriangle size={12} />}
            {fmtDate(item.expiryDate)}
            {expired && ' (expired)'}
            {!expired && expiringSoon && ' (soon)'}
          </span>
        ) : <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>—</span>}
      </td>
      <td style={{ padding: '0.875rem 1rem' }}>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button onClick={() => onEdit(item)} title="Edit" style={{
            background: 'rgba(34,197,94,0.08)', border: '1px solid var(--border-light)',
            borderRadius: 6, padding: '0.375rem', cursor: 'pointer', color: 'var(--green-400)',
            display: 'flex', alignItems: 'center', transition: 'all var(--transition-fast)',
          }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(34,197,94,0.18)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(34,197,94,0.08)')}
          ><Edit2 size={14} /></button>
          <button onClick={() => onDelete(item)} title="Delete" style={{
            background: 'rgba(239,68,68,0.06)', border: '1px solid rgba(239,68,68,0.2)',
            borderRadius: 6, padding: '0.375rem', cursor: 'pointer', color: '#f87171',
            display: 'flex', alignItems: 'center', transition: 'all var(--transition-fast)',
          }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(239,68,68,0.14)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(239,68,68,0.06)')}
          ><Trash2 size={14} /></button>
        </div>
      </td>
    </tr>
  );
};

// ── Main Page ─────────────────────────────────────────────────
export const InventoryPage = () => {
  const [page, setPage] = useState(1);
  const [lowStock, setLowStock] = useState(false);
  const [modalMode, setModalMode] = useState<'create' | 'edit' | 'delete' | null>(null);
  const [selected, setSelected] = useState<InventoryItem | null>(null);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);
  const [formError, setFormError] = useState('');

  const { data, isLoading, refetch } = useInventory({ page, limit: 15, lowStock: lowStock || undefined });
  const { data: summary = [] } = useInventorySummary();

  const createMut = useCreateInventory();
  const updateMut = useUpdateInventory();
  const deleteMut = useDeleteInventory();

  // Derived stats
  const totalBatches = data?.pagination.total ?? 0;
  const lowStockCount = summary.filter((s) => s.totalQty < 10).length;
  const expiredCount  = (data?.inventories ?? []).filter((i) => isExpired(i.expiryDate)).length;

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const openCreate = () => { setSelected(null); setFormError(''); setModalMode('create'); };
  const openEdit   = (i: InventoryItem) => { setSelected(i); setFormError(''); setModalMode('edit'); };
  const openDelete = (i: InventoryItem) => { setSelected(i); setModalMode('delete'); };
  const closeModal = () => { setModalMode(null); setSelected(null); setFormError(''); };

  const handleCreate = async (data: CreateInventoryPayload | UpdateInventoryPayload) => {
    setFormError('');
    try {
      await createMut.mutateAsync(data as CreateInventoryPayload);
      closeModal();
      showToast('Inventory batch added!', 'success');
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message ?? 'Failed to create batch.';
      setFormError(msg);
    }
  };

  const handleUpdate = async (data: CreateInventoryPayload | UpdateInventoryPayload) => {
    if (!selected) return;
    setFormError('');
    try {
      await updateMut.mutateAsync({ id: selected.id, payload: data as UpdateInventoryPayload });
      closeModal();
      showToast('Inventory batch updated!', 'success');
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message ?? 'Failed to update batch.';
      setFormError(msg);
    }
  };

  const handleDelete = async () => {
    if (!selected) return;
    try {
      await deleteMut.mutateAsync(selected.id);
      closeModal();
      showToast('Batch deleted.', 'success');
    } catch {
      showToast('Failed to delete batch.', 'error');
    }
  };

  const items = data?.inventories ?? [];
  const pagination = data?.pagination;

  return (
    <div>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '1.75rem', gap: '1rem', flexWrap: 'wrap' }}>
        <div>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800,
            letterSpacing: '-0.03em', marginBottom: '0.25rem',
            background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--green-400) 100%)',
            WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          }}>
            Inventory
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Track and manage your stock batches
          </p>
        </div>
        <div style={{ display: 'flex', gap: '0.75rem' }}>
          <button
            onClick={() => { setLowStock((v) => !v); setPage(1); }}
            className="btn-outline"
            style={{ borderColor: lowStock ? '#facc15' : undefined, color: lowStock ? '#facc15' : undefined }}
          >
            <TrendingDown size={16} />
            {lowStock ? 'All stock' : 'Low stock'}
          </button>
          <button onClick={() => refetch()} className="btn-outline" style={{ padding: '0.75rem' }} title="Refresh">
            <RefreshCw size={16} />
          </button>
          <button onClick={openCreate} className="btn-primary" style={{ width: 'auto', padding: '0.75rem 1.5rem' }}>
            <Plus size={18} /> Add Batch
          </button>
        </div>
      </div>

      {/* Summary cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.75rem' }}>
        <SummaryCard icon={<BarChart3 size={18} />} label="Total batches" value={totalBatches} />
        <SummaryCard icon={<Package size={18} />} label="Unique products" value={summary.length} />
        <SummaryCard icon={<TrendingDown size={18} />} label="Low stock items" value={lowStockCount}
          color={lowStockCount > 0 ? '#facc15' : 'var(--green-400)'} />
        <SummaryCard icon={<AlertTriangle size={18} />} label="Expired batches" value={expiredCount}
          color={expiredCount > 0 ? '#f87171' : 'var(--green-400)'} />
      </div>

      {/* Table */}
      <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-light)', background: 'rgba(34,197,94,0.04)' }}>
                {['Product', 'Batch #', 'Quantity', 'Grade', 'Harvest', 'Expiry', ''].map((h) => (
                  <th key={h} style={{
                    padding: '0.875rem 1rem', textAlign: h === 'Quantity' ? 'right' : 'left',
                    fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)',
                    letterSpacing: '0.04em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {isLoading && [...Array(5)].map((_, i) => (
                <tr key={i}>
                  {[...Array(7)].map((__, j) => (
                    <td key={j} style={{ padding: '0.875rem 1rem' }}>
                      <div style={{ height: 16, background: 'var(--surface-3)', borderRadius: 4, animation: 'pulse-glow 2s ease-in-out infinite' }} />
                    </td>
                  ))}
                </tr>
              ))}

              {!isLoading && items.length === 0 && (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', padding: '4rem 2rem', color: 'var(--text-muted)' }}>
                    <Warehouse size={40} style={{ opacity: 0.3, marginBottom: '0.75rem' }} />
                    <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>No inventory batches yet</div>
                    <div style={{ fontSize: '0.8125rem' }}>
                      {lowStock ? 'No low-stock items found.' : 'Add your first batch to start tracking stock.'}
                    </div>
                  </td>
                </tr>
              )}

              {!isLoading && items.map((item) => (
                <InventoryRow key={item.id} item={item} onEdit={openEdit} onDelete={openDelete} />
              ))}
            </tbody>
          </table>
        </div>

        {pagination && pagination.totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.875rem 1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
              {pagination.total} batch{pagination.total !== 1 ? 'es' : ''} total
            </span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)} className="btn-outline"
                style={{ padding: '0.4rem 0.875rem', fontSize: '0.8125rem', opacity: page <= 1 ? 0.4 : 1 }}>
                Previous
              </button>
              <span style={{ padding: '0.4rem 0.5rem', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
                {page} / {pagination.totalPages}
              </span>
              <button disabled={page >= pagination.totalPages} onClick={() => setPage((p) => p + 1)} className="btn-outline"
                style={{ padding: '0.4rem 0.875rem', fontSize: '0.8125rem', opacity: page >= pagination.totalPages ? 0.4 : 1 }}>
                Next
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      <Modal isOpen={modalMode === 'create'} onClose={closeModal} title="Add Inventory Batch" maxWidth={540}>
        <InventoryForm onSubmit={handleCreate} isLoading={createMut.isPending} error={formError} />
      </Modal>

      <Modal isOpen={modalMode === 'edit'} onClose={closeModal} title="Edit Inventory Batch" maxWidth={540}>
        {selected && (
          <InventoryForm
            isEdit
            initial={{
              productId:    selected.productId,
              quantity:     selected.quantity,
              batchNumber:  selected.batchNumber,
              harvestDate:  selected.harvestDate ?? undefined,
              expiryDate:   selected.expiryDate  ?? undefined,
              qualityGrade: selected.qualityGrade ?? undefined,
            }}
            onSubmit={handleUpdate}
            isLoading={updateMut.isPending}
            error={formError}
          />
        )}
      </Modal>

      <Modal isOpen={modalMode === 'delete'} onClose={closeModal} title="Delete Batch" maxWidth={400}>
        <div style={{ textAlign: 'center', padding: '0.5rem 0' }}>
          <div style={{ fontSize: '3rem', marginBottom: '0.875rem' }}>📦</div>
          <h3 style={{ fontFamily: 'var(--font-display)', marginBottom: '0.5rem' }}>
            Delete batch "{selected?.batchNumber}"?
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '2rem' }}>
            {selected?.product?.name} — {selected?.quantity} {selected?.product?.unit}
            <br />This action cannot be undone.
          </p>
          <div style={{ display: 'flex', gap: '0.75rem' }}>
            <button onClick={closeModal} className="btn-outline" style={{ flex: 1 }}>Cancel</button>
            <button onClick={handleDelete} disabled={deleteMut.isPending} style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              padding: '0.8125rem 1.5rem',
              background: 'linear-gradient(135deg, #dc2626, #b91c1c)',
              color: '#fff', border: 'none', borderRadius: 'var(--radius-md)',
              cursor: 'pointer', fontWeight: 600, fontFamily: 'var(--font-display)', fontSize: '0.9375rem',
            }}>
              {deleteMut.isPending ? 'Deleting...' : <><Trash2 size={16} /> Delete</>}
            </button>
          </div>
        </div>
      </Modal>

      {toast && <Toast message={toast.message} type={toast.type} />}
    </div>
  );
};
