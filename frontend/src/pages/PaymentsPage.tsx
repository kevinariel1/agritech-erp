import { useState } from 'react';
import {
  CreditCard, CheckCircle, XCircle, Clock, RefreshCw,
  AlertCircle, ChevronRight, TrendingUp, Wallet, Eye,
} from 'lucide-react';
import { usePayments, usePaymentStats, useCreatePayment, useUpdatePaymentStatus } from '@/hooks/usePayments';
import { useOrders } from '@/hooks/useOrders';
import { Modal } from '@/components/shared/Modal';
import { useAuthStore } from '@/store/authStore';
import type { Payment, PaymentStatus } from '@/types/payment';

// ── Constants ─────────────────────────────────────────────────
const STATUS_META: Record<PaymentStatus, { label: string; color: string; bg: string; icon: React.ReactNode }> = {
  PENDING:  { label: 'Pending',  color: '#facc15', bg: 'rgba(250,204,21,0.12)',  icon: <Clock size={12} /> },
  PAID:     { label: 'Paid',     color: '#4ade80', bg: 'rgba(74,222,128,0.12)',  icon: <CheckCircle size={12} /> },
  FAILED:   { label: 'Failed',   color: '#f87171', bg: 'rgba(248,113,113,0.12)', icon: <XCircle size={12} /> },
  REFUNDED: { label: 'Refunded', color: '#a78bfa', bg: 'rgba(167,139,250,0.12)', icon: <RefreshCw size={12} /> },
};

const ALL_STATUSES: PaymentStatus[] = ['PENDING', 'PAID', 'FAILED', 'REFUNDED'];

const PAYMENT_METHODS = ['Bank Transfer', 'Cash', 'Gopay', 'OVO', 'DANA', 'ShopeePay', 'QRIS'];

const METHOD_EMOJI: Record<string, string> = {
  'Bank Transfer': '🏦',
  'Cash':          '💵',
  'Gopay':         '💚',
  'OVO':           '💜',
  'DANA':          '🔵',
  'ShopeePay':     '🟠',
  'QRIS':          '📲',
};

const fmt = (n: number) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);

const fmtDate = (d?: string | null) =>
  d ? new Date(d).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '—';

// ── Status Badge ──────────────────────────────────────────────
const StatusBadge = ({ status }: { status: PaymentStatus }) => {
  const m = STATUS_META[status];
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
      padding: '0.25rem 0.625rem', borderRadius: 99, fontSize: '0.75rem', fontWeight: 600,
      color: m.color, background: m.bg, border: `1px solid ${m.color}40`,
    }}>
      {m.icon} {m.label}
    </span>
  );
};

// ── Stat Card ─────────────────────────────────────────────────
const StatCard = ({ label, value, color, icon }: { label: string; value: string | number; color: string; icon: React.ReactNode }) => (
  <div style={{
    background: 'var(--surface-2)', border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-lg)', padding: '1rem 1.25rem',
    display: 'flex', alignItems: 'center', gap: '0.875rem',
  }}>
    <div style={{ padding: '0.5rem', background: `${color}18`, borderRadius: 'var(--radius-md)', color, flexShrink: 0 }}>
      {icon}
    </div>
    <div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.15rem', fontWeight: 800, color }}>{value}</div>
      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{label}</div>
    </div>
  </div>
);

// ── Submit Payment Modal (Retailer) ───────────────────────────
const SubmitPaymentModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const { data: ordersData } = useOrders({ status: 'CONFIRMED', limit: 50 });
  const processingOrders = useOrders({ status: 'PROCESSING', limit: 50 });
  const shippedOrders    = useOrders({ status: 'SHIPPED',    limit: 50 });

  const eligibleOrders = [
    ...(ordersData?.orders    ?? []),
    ...(processingOrders.data?.orders ?? []),
    ...(shippedOrders.data?.orders    ?? []),
  ];

  const createMut = useCreatePayment();
  const [form, setForm]   = useState({ orderId: '', paymentMethod: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.orderId || !form.paymentMethod) {
      setError('Please select an order and a payment method.'); return;
    }
    setError('');
    try {
      await createMut.mutateAsync(form);
      setForm({ orderId: '', paymentMethod: '' });
      onClose();
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message ?? 'Failed to submit payment.';
      setError(msg);
    }
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Submit Payment" maxWidth={480}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.125rem' }}>
        {error && (
          <div style={{
            display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem',
            borderRadius: 'var(--radius-md)', background: 'rgba(239,68,68,0.1)',
            border: '1px solid rgba(239,68,68,0.25)', color: '#f87171', fontSize: '0.875rem',
          }}>
            <AlertCircle size={15} style={{ flexShrink: 0 }} /> {error}
          </div>
        )}

        <div>
          <label className="field-label">Order *</label>
          <select className="field-input" value={form.orderId}
            onChange={(e) => setForm((p) => ({ ...p, orderId: e.target.value }))} required>
            <option value="">— Select an order —</option>
            {eligibleOrders.map((o) => (
              <option key={o.id} value={o.id}>
                {o.orderNumber} — {fmt(o.totalAmount)} ({o.status})
              </option>
            ))}
          </select>
          {eligibleOrders.length === 0 && (
            <p style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', marginTop: '0.375rem' }}>
              No eligible orders. Orders must be CONFIRMED, PROCESSING, or SHIPPED.
            </p>
          )}
        </div>

        <div>
          <label className="field-label">Payment method *</label>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {PAYMENT_METHODS.map((m) => (
              <button
                key={m} type="button"
                onClick={() => setForm((p) => ({ ...p, paymentMethod: m }))}
                style={{
                  padding: '0.5rem 0.875rem', borderRadius: 'var(--radius-md)',
                  border: `1px solid ${form.paymentMethod === m ? 'var(--green-500)' : 'var(--border-light)'}`,
                  background: form.paymentMethod === m ? 'rgba(34,197,94,0.12)' : 'var(--surface-3)',
                  color: form.paymentMethod === m ? 'var(--green-400)' : 'var(--text-secondary)',
                  cursor: 'pointer', fontSize: '0.8125rem', fontWeight: form.paymentMethod === m ? 600 : 400,
                  transition: 'all var(--transition-fast)',
                }}
              >
                {METHOD_EMOJI[m]} {m}
              </button>
            ))}
          </div>
        </div>

        {form.orderId && form.paymentMethod && (
          <div style={{
            padding: '0.875rem', background: 'rgba(34,197,94,0.06)',
            borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)',
            fontSize: '0.875rem',
          }}>
            <div style={{ color: 'var(--text-muted)', marginBottom: '0.375rem' }}>Payment summary</div>
            <div style={{ fontWeight: 600 }}>
              {METHOD_EMOJI[form.paymentMethod]} {form.paymentMethod} —
              <span style={{ color: 'var(--green-400)', marginLeft: '0.375rem' }}>
                {fmt(eligibleOrders.find((o) => o.id === form.orderId)?.totalAmount ?? 0)}
              </span>
            </div>
          </div>
        )}

        <button type="submit" disabled={createMut.isPending} className="btn-primary" style={{ marginTop: '0.25rem' }}>
          {createMut.isPending ? 'Submitting...' : <>Submit Payment <ChevronRight size={16} /></>}
        </button>
      </form>
    </Modal>
  );
};

// ── Payment Detail Modal ──────────────────────────────────────
const PaymentDetailModal = ({
  payment, isOpen, onClose, isFarmer,
  onStatusUpdate, isUpdating,
}: {
  payment: Payment | null; isOpen: boolean; onClose: () => void; isFarmer: boolean;
  onStatusUpdate: (id: string, status: PaymentStatus) => void; isUpdating: boolean;
}) => {
  if (!payment) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Payment Detail" maxWidth={520}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {/* Status + amount */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          padding: '1.25rem', background: 'var(--surface-3)',
          borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-subtle)',
        }}>
          <div>
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.375rem' }}>Amount</div>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, color: 'var(--green-400)' }}>
              {fmt(payment.amount)}
            </div>
          </div>
          <StatusBadge status={payment.status} />
        </div>

        {/* Details grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
          {[
            { label: 'Order', value: payment.order.orderNumber },
            { label: 'Method', value: `${METHOD_EMOJI[payment.paymentMethod] ?? '💳'} ${payment.paymentMethod}` },
            { label: 'Submitted', value: fmtDate(payment.createdAt) },
            { label: 'Paid at', value: fmtDate(payment.paidAt) },
          ].map(({ label, value }) => (
            <div key={label} style={{
              padding: '0.75rem', background: 'var(--surface-3)',
              borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)',
            }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>{label}</div>
              <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>{value}</div>
            </div>
          ))}
        </div>

        {/* Buyer / Seller */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.875rem' }}>
          {[
            { label: 'Buyer', u: payment.order.buyer },
            { label: 'Seller', u: payment.order.seller },
          ].map(({ label, u }) => (
            <div key={label} style={{
              padding: '0.75rem', background: 'var(--surface-3)',
              borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)',
            }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.25rem' }}>{label}</div>
              <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{u.firstName} {u.lastName}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{u.email}</div>
            </div>
          ))}
        </div>

        {/* Farmer action buttons */}
        {isFarmer && payment.status === 'PENDING' && (
          <div style={{ display: 'flex', gap: '0.75rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
            <button
              disabled={isUpdating}
              onClick={() => onStatusUpdate(payment.id, 'FAILED')}
              style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
                padding: '0.8125rem', background: 'rgba(239,68,68,0.1)',
                border: '1px solid rgba(239,68,68,0.3)', borderRadius: 'var(--radius-md)',
                cursor: 'pointer', color: '#f87171', fontWeight: 600, fontFamily: 'var(--font-display)', fontSize: '0.9rem',
              }}
            >
              <XCircle size={16} /> Reject
            </button>
            <button
              disabled={isUpdating}
              onClick={() => onStatusUpdate(payment.id, 'PAID')}
              className="btn-primary"
              style={{ flex: 2 }}
            >
              {isUpdating ? 'Processing...' : <><CheckCircle size={16} /> Confirm Payment</>}
            </button>
          </div>
        )}

        {isFarmer && payment.status === 'PAID' && (
          <button
            disabled={isUpdating}
            onClick={() => onStatusUpdate(payment.id, 'REFUNDED')}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              padding: '0.8125rem', background: 'rgba(167,139,250,0.1)',
              border: '1px solid rgba(167,139,250,0.3)', borderRadius: 'var(--radius-md)',
              cursor: 'pointer', color: '#a78bfa', fontWeight: 600, fontFamily: 'var(--font-display)', fontSize: '0.9rem',
              borderTop: '1px solid var(--border-subtle)', marginTop: '0.5rem',
            }}
          >
            <RefreshCw size={16} /> Issue Refund
          </button>
        )}
      </div>
    </Modal>
  );
};

// ── Payment Row ───────────────────────────────────────────────
const PaymentRow = ({ p, onView }: { p: Payment; onView: () => void }) => (
  <tr
    style={{ borderBottom: '1px solid var(--border-subtle)', cursor: 'pointer', transition: 'background var(--transition-fast)' }}
    onClick={onView}
    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(34,197,94,0.03)')}
    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
  >
    <td style={{ padding: '0.875rem 1rem' }}>
      <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.8rem', color: 'var(--green-400)', fontWeight: 600 }}>
        {p.order.orderNumber}
      </span>
    </td>
    <td style={{ padding: '0.875rem 1rem', fontSize: '0.8125rem' }}>
      {p.order.buyer.firstName} {p.order.buyer.lastName}
      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{p.order.buyer.email}</div>
    </td>
    <td style={{ padding: '0.875rem 1rem', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
      {METHOD_EMOJI[p.paymentMethod] ?? '💳'} {p.paymentMethod}
    </td>
    <td style={{ padding: '0.875rem 1rem', textAlign: 'right', fontWeight: 700, color: 'var(--green-400)', fontFamily: 'var(--font-display)' }}>
      {fmt(p.amount)}
    </td>
    <td style={{ padding: '0.875rem 1rem' }}>
      <StatusBadge status={p.status} />
    </td>
    <td style={{ padding: '0.875rem 1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
      {p.paidAt ? fmtDate(p.paidAt) : fmtDate(p.createdAt)}
    </td>
    <td style={{ padding: '0.875rem 1rem' }}>
      <Eye size={16} style={{ color: 'var(--text-muted)' }} />
    </td>
  </tr>
);

// ── Main Page ─────────────────────────────────────────────────
export const PaymentsPage = () => {
  const { user } = useAuthStore();
  const isFarmer   = user?.role === 'FARMER';
  const isRetailer = user?.role === 'RETAILER';

  const [statusFilter, setStatusFilter] = useState('');
  const [page, setPage]       = useState(1);
  const [selected, setSelected]   = useState<Payment | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [submitOpen, setSubmitOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const { data, isLoading } = usePayments({ status: statusFilter || undefined, page, limit: 15 });
  const { data: stats }     = usePaymentStats();
  const updateStatus        = useUpdatePaymentStatus();

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const handleStatusUpdate = async (id: string, status: PaymentStatus) => {
    try {
      await updateStatus.mutateAsync({ id, status });
      setDetailOpen(false);
      showToast(`Payment ${STATUS_META[status].label.toLowerCase()}!`, 'success');
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message ?? 'Failed to update payment.';
      showToast(msg, 'error');
    }
  };

  const payments   = data?.payments ?? [];
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
            Payments
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            {isFarmer ? 'Review and confirm incoming payments' : 'Manage your payment submissions'}
          </p>
        </div>
        {isRetailer && (
          <button onClick={() => setSubmitOpen(true)} className="btn-primary" style={{ width: 'auto', padding: '0.75rem 1.5rem' }}>
            <CreditCard size={18} /> Submit Payment
          </button>
        )}
      </div>

      {/* Stats */}
      {stats && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.75rem' }}>
          <StatCard label="Total Revenue" value={fmt(stats.totalPaid)} color="var(--green-400)" icon={<TrendingUp size={18} />} />
          <StatCard label="Pending"       value={stats.counts.PENDING   ?? 0} color="#facc15" icon={<Clock size={18} />} />
          <StatCard label="Paid"          value={stats.counts.PAID      ?? 0} color="#4ade80" icon={<CheckCircle size={18} />} />
          <StatCard label="Failed / Refunded" value={(stats.counts.FAILED ?? 0) + (stats.counts.REFUNDED ?? 0)} color="#f87171" icon={<XCircle size={18} />} />
        </div>
      )}

      {/* Method breakdown */}
      {stats && stats.byMethod.length > 0 && (
        <div className="glass-card" style={{ padding: '1.125rem 1.25rem', marginBottom: '1.5rem' }}>
          <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.875rem' }}>
            Revenue by Payment Method
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
            {stats.byMethod.map((m) => (
              <div key={m.method} style={{ display: 'flex', alignItems: 'center', gap: '0.625rem' }}>
                <span style={{ fontSize: '1.25rem' }}>{METHOD_EMOJI[m.method] ?? '💳'}</span>
                <div>
                  <div style={{ fontWeight: 700, color: 'var(--green-400)', fontSize: '0.9375rem' }}>{fmt(m.total)}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{m.method} · {m.count} tx</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Status filter tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {[{ value: '', label: 'All' }, ...ALL_STATUSES.map((s) => ({ value: s, label: STATUS_META[s].label }))].map(({ value, label }) => (
          <button key={value} onClick={() => { setStatusFilter(value); setPage(1); }} style={{
            padding: '0.4rem 0.875rem', borderRadius: 99,
            border: `1px solid ${statusFilter === value ? 'var(--green-500)' : 'var(--border-light)'}`,
            background: statusFilter === value ? 'rgba(34,197,94,0.12)' : 'transparent',
            color: statusFilter === value ? 'var(--green-400)' : 'var(--text-muted)',
            cursor: 'pointer', fontSize: '0.8125rem', fontWeight: statusFilter === value ? 600 : 400,
            transition: 'all var(--transition-fast)',
          }}>{label}</button>
        ))}
      </div>

      {/* Table */}
      <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-light)', background: 'rgba(34,197,94,0.04)' }}>
                {['Order', 'Buyer', 'Method', 'Amount', 'Status', 'Date', ''].map((h) => (
                  <th key={h} style={{
                    padding: '0.875rem 1rem', textAlign: h === 'Amount' ? 'right' : 'left',
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

              {!isLoading && payments.length === 0 && (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', padding: '4rem 2rem', color: 'var(--text-muted)' }}>
                    <Wallet size={40} style={{ opacity: 0.3, marginBottom: '0.75rem' }} />
                    <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>No payments yet</div>
                    <div style={{ fontSize: '0.8125rem' }}>
                      {isRetailer ? 'Submit a payment for your confirmed orders.' : 'No payment submissions from buyers yet.'}
                    </div>
                  </td>
                </tr>
              )}

              {!isLoading && payments.map((p) => (
                <PaymentRow key={p.id} p={p} onView={() => { setSelected(p); setDetailOpen(true); }} />
              ))}
            </tbody>
          </table>
        </div>

        {pagination && pagination.totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.875rem 1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{pagination.total} payment{pagination.total !== 1 ? 's' : ''}</span>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <button disabled={page <= 1} onClick={() => setPage((p) => p - 1)} className="btn-outline"
                style={{ padding: '0.4rem 0.875rem', fontSize: '0.8125rem', opacity: page <= 1 ? 0.4 : 1 }}>Previous</button>
              <span style={{ padding: '0.4rem 0.5rem', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{page} / {pagination.totalPages}</span>
              <button disabled={page >= pagination.totalPages} onClick={() => setPage((p) => p + 1)} className="btn-outline"
                style={{ padding: '0.4rem 0.875rem', fontSize: '0.8125rem', opacity: page >= pagination.totalPages ? 0.4 : 1 }}>Next</button>
            </div>
          </div>
        )}
      </div>

      {/* Modals */}
      <SubmitPaymentModal isOpen={submitOpen} onClose={() => setSubmitOpen(false)} />
      <PaymentDetailModal
        payment={selected} isOpen={detailOpen} onClose={() => setDetailOpen(false)}
        isFarmer={isFarmer} onStatusUpdate={handleStatusUpdate} isUpdating={updateStatus.isPending}
      />

      {/* Toast */}
      {toast && (
        <div className="animate-fade-in-up" style={{
          position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 2000,
          display: 'flex', alignItems: 'center', gap: '0.625rem',
          padding: '0.875rem 1.25rem',
          background: toast.type === 'success' ? 'rgba(22,163,74,0.9)' : 'rgba(220,38,38,0.9)',
          backdropFilter: 'blur(8px)', borderRadius: 'var(--radius-md)',
          boxShadow: 'var(--shadow-lg)', color: '#fff', fontSize: '0.875rem', fontWeight: 500,
        }}>
          {toast.type === 'success' ? <CheckCircle size={16} /> : <AlertCircle size={16} />}
          {toast.message}
        </div>
      )}
    </div>
  );
};
