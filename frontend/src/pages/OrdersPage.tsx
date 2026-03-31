import { useState } from 'react';
import {
  ShoppingCart, Eye, CheckCircle, XCircle, Truck, Clock,
  Package, AlertCircle, ChevronRight, Plus, Minus, Trash2,
} from 'lucide-react';
import { useOrders, useOrderStats, useCreateOrder, useUpdateOrderStatus } from '@/hooks/useOrders';
import { useProducts } from '@/hooks/useProducts';
import { Modal } from '@/components/shared/Modal';
import { useAuthStore } from '@/store/authStore';
import type { Order, OrderStatus, CreateOrderPayload } from '@/types/order';
import type { Product } from '@/types/product';

// ── Constants ─────────────────────────────────────────────────
const STATUS_META: Record<OrderStatus, { label: string; color: string; bg: string; icon: React.ReactNode }> = {
  PENDING:    { label: 'Pending',    color: '#facc15', bg: 'rgba(250,204,21,0.12)',   icon: <Clock size={12} /> },
  CONFIRMED:  { label: 'Confirmed',  color: '#60a5fa', bg: 'rgba(96,165,250,0.12)',   icon: <CheckCircle size={12} /> },
  PROCESSING: { label: 'Processing', color: '#a78bfa', bg: 'rgba(167,139,250,0.12)',  icon: <Package size={12} /> },
  SHIPPED:    { label: 'Shipped',    color: '#fb923c', bg: 'rgba(251,146,60,0.12)',   icon: <Truck size={12} /> },
  DELIVERED:  { label: 'Delivered',  color: '#4ade80', bg: 'rgba(74,222,128,0.12)',   icon: <CheckCircle size={12} /> },
  CANCELLED:  { label: 'Cancelled',  color: '#f87171', bg: 'rgba(248,113,113,0.12)',  icon: <XCircle size={12} /> },
};

const ALL_STATUSES: OrderStatus[] = ['PENDING','CONFIRMED','PROCESSING','SHIPPED','DELIVERED','CANCELLED'];

// Seller status actions (farmer progresses the order)
const SELLER_ACTIONS: Partial<Record<OrderStatus, { next: OrderStatus; label: string }>> = {
  PENDING:    { next: 'CONFIRMED',  label: 'Confirm Order' },
  CONFIRMED:  { next: 'PROCESSING', label: 'Start Processing' },
  PROCESSING: { next: 'SHIPPED',    label: 'Mark Shipped' },
  SHIPPED:    { next: 'DELIVERED',  label: 'Mark Delivered' },
};

const fmt = (n: number) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);

const fmtDate = (d: string) =>
  new Date(d).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });

// ── Status Badge ──────────────────────────────────────────────
const StatusBadge = ({ status }: { status: OrderStatus }) => {
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
const StatCard = ({ label, value, color = 'var(--green-400)', icon }: {
  label: string; value: string | number; color?: string; icon: React.ReactNode;
}) => (
  <div style={{
    background: 'var(--surface-2)', border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-lg)', padding: '1rem 1.25rem',
    display: 'flex', alignItems: 'center', gap: '0.875rem',
  }}>
    <div style={{ padding: '0.5rem', background: `${color}18`, borderRadius: 'var(--radius-md)', color, flexShrink: 0 }}>
      {icon}
    </div>
    <div>
      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontWeight: 800, color }}>{value}</div>
      <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{label}</div>
    </div>
  </div>
);

// ── Order Detail Modal ─────────────────────────────────────────
const OrderDetailModal = ({
  order, isOpen, onClose, isFarmer,
  onStatusUpdate, isUpdating,
}: {
  order: Order | null; isOpen: boolean; onClose: () => void; isFarmer: boolean;
  onStatusUpdate: (id: string, s: OrderStatus) => void; isUpdating: boolean;
}) => {
  if (!order) return null;
  const action = SELLER_ACTIONS[order.status];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Order ${order.orderNumber}`} maxWidth={600}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {/* Header info */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <StatusBadge status={order.status} />
          <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{fmtDate(order.createdAt)}</span>
        </div>

        {/* Buyer / Seller */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {[
            { label: 'Buyer', u: order.buyer },
            { label: 'Seller', u: order.seller },
          ].map(({ label, u }) => (
            <div key={label} style={{
              padding: '0.875rem', background: 'var(--surface-3)',
              borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)',
            }}>
              <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
              <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{u.firstName} {u.lastName}</div>
              <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{u.email}</div>
            </div>
          ))}
        </div>

        {/* Line items */}
        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.5rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Items</div>
          <div style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
            {order.orderItems.map((item, i) => (
              <div key={item.id} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                padding: '0.75rem 1rem', gap: '0.75rem',
                borderBottom: i < order.orderItems.length - 1 ? '1px solid var(--border-subtle)' : 'none',
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{item.product.name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{item.product.category}</div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <div style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                    {item.quantity} {item.product.unit} × {fmt(item.unitPrice)}
                  </div>
                  <div style={{ fontWeight: 700, color: 'var(--green-400)', fontSize: '0.9375rem' }}>
                    {fmt(item.subtotal)}
                  </div>
                </div>
              </div>
            ))}
            {/* Total */}
            <div style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              padding: '0.875rem 1rem', background: 'rgba(34,197,94,0.06)',
              borderTop: '1px solid var(--border-subtle)',
            }}>
              <span style={{ fontWeight: 600, fontSize: '0.875rem' }}>Total</span>
              <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', fontWeight: 800, color: 'var(--green-400)' }}>
                {fmt(order.totalAmount)}
              </span>
            </div>
          </div>
        </div>

        {/* Notes */}
        {order.notes && (
          <div style={{ padding: '0.875rem', background: 'var(--surface-3)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Notes</div>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', margin: 0 }}>{order.notes}</p>
          </div>
        )}

        {/* Shipment / Payment chips */}
        <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
          {order.shipment && (
            <span className="badge" style={{ fontSize: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <Truck size={12} /> {order.shipment.trackingNumber} — {order.shipment.status}
            </span>
          )}
          {order.payment && (
            <span className={`badge ${order.payment.status === 'PAID' ? 'badge-green' : ''}`} style={{ fontSize: '0.75rem' }}>
              💳 {order.payment.status}
            </span>
          )}
        </div>

        {/* Seller action button */}
        {isFarmer && action && order.status !== 'CANCELLED' && (
          <button
            onClick={() => onStatusUpdate(order.id, action.next)}
            disabled={isUpdating}
            className="btn-primary"
          >
            {isUpdating ? 'Updating...' : <>{action.label} <ChevronRight size={16} /></>}
          </button>
        )}

        {/* Buyer cancel button */}
        {!isFarmer && ['PENDING', 'CONFIRMED'].includes(order.status) && (
          <button
            onClick={() => onStatusUpdate(order.id, 'CANCELLED')}
            disabled={isUpdating}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem',
              padding: '0.8125rem 1.5rem',
              background: 'rgba(239,68,68,0.1)', border: '1px solid rgba(239,68,68,0.3)',
              borderRadius: 'var(--radius-md)', cursor: 'pointer',
              color: '#f87171', fontWeight: 600, fontFamily: 'var(--font-display)', fontSize: '0.9375rem',
            }}
          >
            <XCircle size={16} /> Cancel Order
          </button>
        )}
      </div>
    </Modal>
  );
};

// ── Create Order Modal ─────────────────────────────────────────
const CreateOrderModal = ({ isOpen, onClose, onSuccess }: { isOpen: boolean; onClose: () => void; onSuccess: () => void }) => {
  const { data: productsData } = useProducts({ limit: 100 });
  const products = productsData?.products ?? [];
  const createMut = useCreateOrder();

  const [cart, setCart] = useState<{ product: Product; quantity: number }[]>([]);
  const [notes, setNotes] = useState('');
  const [error, setError] = useState('');

  const addProduct = (p: Product) => {
    setCart((prev) => {
      const exists = prev.find((c) => c.product.id === p.id);
      if (exists) return prev.map((c) => c.product.id === p.id ? { ...c, quantity: c.quantity + 1 } : c);
      return [...prev, { product: p, quantity: 1 }];
    });
  };

  const removeProduct = (id: string) => setCart((p) => p.filter((c) => c.product.id !== id));
  const changeQty = (id: string, delta: number) =>
    setCart((p) => p.map((c) => c.product.id === id
      ? { ...c, quantity: Math.max(1, c.quantity + delta) }
      : c));

  const total = cart.reduce((s, c) => s + c.product.unitPrice * c.quantity, 0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) { setError('Add at least one product to your order.'); return; }

    // Check single seller
    const sellerIds = [...new Set(cart.map((c) => c.product.farm?.id))];
    if (sellerIds.length > 1) {
      setError('All items must come from the same farm. Clear cart and reselect.');
      return;
    }

    setError('');
    try {
      const payload: CreateOrderPayload = {
        items: cart.map((c) => ({ productId: c.product.id, quantity: c.quantity })),
        notes: notes || undefined,
      };
      await createMut.mutateAsync(payload);
      setCart([]); setNotes('');
      onSuccess();
      onClose();
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message ?? 'Failed to place order.';
      setError(msg);
    }
  };

  // Group products by farm for clear UX
  const farmGroups = products.reduce<Record<string, { farmName: string; products: Product[] }>>((acc, p) => {
    const key = p.farm?.id ?? 'unknown';
    if (!acc[key]) acc[key] = { farmName: p.farm?.name ?? 'Unknown Farm', products: [] };
    acc[key].products.push(p);
    return acc;
  }, {});

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Place New Order" maxWidth={640}>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
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

        {/* Product browser */}
        <div>
          <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Available Products
          </div>
          <div style={{ maxHeight: 220, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {Object.values(farmGroups).map(({ farmName, products: fps }) => (
              <div key={farmName}>
                <div style={{ fontSize: '0.75rem', color: 'var(--green-400)', fontWeight: 600, marginBottom: '0.375rem' }}>
                  🌾 {farmName}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '0.5rem' }}>
                  {fps.map((p) => {
                    const inCart = cart.find((c) => c.product.id === p.id);
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => addProduct(p)}
                        style={{
                          padding: '0.625rem 0.75rem', textAlign: 'left',
                          background: inCart ? 'rgba(34,197,94,0.1)' : 'var(--surface-3)',
                          border: `1px solid ${inCart ? 'var(--green-500)' : 'var(--border-subtle)'}`,
                          borderRadius: 'var(--radius-md)', cursor: 'pointer',
                          transition: 'all var(--transition-fast)',
                        }}
                      >
                        <div style={{ fontWeight: 600, fontSize: '0.8125rem', color: inCart ? 'var(--green-400)' : 'var(--text-primary)' }}>{p.name}</div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{fmt(p.unitPrice)}/{p.unit}</div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
            {products.length === 0 && (
              <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', textAlign: 'center', padding: '1.5rem 0' }}>
                No products available. Farmers need to list products first.
              </p>
            )}
          </div>
        </div>

        {/* Cart */}
        {cart.length > 0 && (
          <div>
            <div style={{ fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Your Cart
            </div>
            <div style={{ border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-md)', overflow: 'hidden' }}>
              {cart.map((c, i) => (
                <div key={c.product.id} style={{
                  display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.75rem 1rem',
                  borderBottom: i < cart.length - 1 ? '1px solid var(--border-subtle)' : 'none',
                }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{c.product.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{fmt(c.product.unitPrice)}/{c.product.unit}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                    <button type="button" onClick={() => changeQty(c.product.id, -1)} style={{
                      width: 24, height: 24, borderRadius: 6, border: '1px solid var(--border-light)', background: 'var(--surface-3)',
                      cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)',
                    }}><Minus size={12} /></button>
                    <span style={{ minWidth: 28, textAlign: 'center', fontSize: '0.875rem', fontWeight: 600 }}>{c.quantity}</span>
                    <button type="button" onClick={() => changeQty(c.product.id, 1)} style={{
                      width: 24, height: 24, borderRadius: 6, border: '1px solid var(--border-light)', background: 'var(--surface-3)',
                      cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)',
                    }}><Plus size={12} /></button>
                  </div>
                  <div style={{ minWidth: 80, textAlign: 'right', fontWeight: 600, color: 'var(--green-400)', fontSize: '0.875rem' }}>
                    {fmt(c.product.unitPrice * c.quantity)}
                  </div>
                  <button type="button" onClick={() => removeProduct(c.product.id)} style={{
                    background: 'none', border: 'none', cursor: 'pointer', color: '#f87171', display: 'flex', padding: '0.25rem',
                  }}><Trash2 size={15} /></button>
                </div>
              ))}
              <div style={{
                display: 'flex', justifyContent: 'space-between', padding: '0.875rem 1rem',
                background: 'rgba(34,197,94,0.06)', borderTop: '1px solid var(--border-subtle)',
              }}>
                <span style={{ fontWeight: 600 }}>Total</span>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.05rem', fontWeight: 800, color: 'var(--green-400)' }}>
                  {fmt(total)}
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Notes */}
        <div>
          <label className="field-label">Notes <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(optional)</span></label>
          <textarea className="field-input" placeholder="Delivery instructions, special requests..." rows={2}
            style={{ resize: 'vertical' }} value={notes} onChange={(e) => setNotes(e.target.value)} />
        </div>

        <button type="submit" disabled={createMut.isPending || cart.length === 0} className="btn-primary">
          {createMut.isPending ? 'Placing order...' : `Place Order — ${fmt(total)}`}
        </button>
      </form>
    </Modal>
  );
};

// ── Order Row ─────────────────────────────────────────────────
const OrderRow = ({ order, onView }: { order: Order; onView: () => void }) => (
  <tr
    style={{ borderBottom: '1px solid var(--border-subtle)', cursor: 'pointer', transition: 'background var(--transition-fast)' }}
    onClick={onView}
    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(34,197,94,0.03)')}
    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
  >
    <td style={{ padding: '0.875rem 1rem' }}>
      <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.8125rem', color: 'var(--green-400)', fontWeight: 600 }}>
        {order.orderNumber}
      </span>
    </td>
    <td style={{ padding: '0.875rem 1rem', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
      {order.buyer.firstName} {order.buyer.lastName}
    </td>
    <td style={{ padding: '0.875rem 1rem', fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
      {order.seller.firstName} {order.seller.lastName}
    </td>
    <td style={{ padding: '0.875rem 1rem' }}>
      <StatusBadge status={order.status} />
    </td>
    <td style={{ padding: '0.875rem 1rem', fontSize: '0.8125rem', color: 'var(--text-muted)' }}>
      {order.orderItems.length} item{order.orderItems.length !== 1 ? 's' : ''}
    </td>
    <td style={{ padding: '0.875rem 1rem', textAlign: 'right', fontWeight: 700, color: 'var(--green-400)', fontFamily: 'var(--font-display)' }}>
      {fmt(order.totalAmount)}
    </td>
    <td style={{ padding: '0.875rem 1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
      {new Date(order.createdAt).toLocaleDateString('id-ID')}
    </td>
    <td style={{ padding: '0.875rem 1rem' }}>
      <Eye size={16} style={{ color: 'var(--text-muted)' }} />
    </td>
  </tr>
);

// ── Main Page ─────────────────────────────────────────────────
export const OrdersPage = () => {
  const { user } = useAuthStore();
  const isFarmer   = user?.role === 'FARMER';
  const isRetailer = user?.role === 'RETAILER';

  const [statusFilter, setStatusFilter] = useState<string>('');
  const [page, setPage] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [createOpen, setCreateOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const { data, isLoading } = useOrders({ status: statusFilter || undefined, page, limit: 15 });
  const { data: stats } = useOrderStats();
  const updateStatus = useUpdateOrderStatus();

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const handleStatusUpdate = async (id: string, status: OrderStatus) => {
    try {
      await updateStatus.mutateAsync({ id, status });
      setDetailOpen(false);
      showToast(`Order ${STATUS_META[status].label.toLowerCase()}!`, 'success');
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message ?? 'Failed to update order.';
      showToast(msg, 'error');
    }
  };

  const orders     = data?.orders ?? [];
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
            {isFarmer ? 'Incoming Orders' : 'My Orders'}
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            {isFarmer ? 'Orders placed for your products' : 'Track your purchases from farmers'}
          </p>
        </div>
        {isRetailer && (
          <button onClick={() => setCreateOpen(true)} className="btn-primary" style={{ width: 'auto', padding: '0.75rem 1.5rem' }}>
            <Plus size={18} /> Place Order
          </button>
        )}
      </div>

      {/* Stats */}
      {stats && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '1rem', marginBottom: '1.75rem' }}>
          <StatCard label="Total Orders"   value={(stats.stats.PENDING ?? 0) + (stats.stats.CONFIRMED ?? 0) + (stats.stats.PROCESSING ?? 0) + (stats.stats.SHIPPED ?? 0) + (stats.stats.DELIVERED ?? 0) + (stats.stats.CANCELLED ?? 0)} icon={<ShoppingCart size={18} />} />
          <StatCard label="Pending"        value={stats.stats.PENDING    ?? 0} color="#facc15" icon={<Clock size={18} />} />
          <StatCard label="In Progress"    value={(stats.stats.CONFIRMED ?? 0) + (stats.stats.PROCESSING ?? 0)} color="#a78bfa" icon={<Package size={18} />} />
          <StatCard label="Delivered"      value={stats.stats.DELIVERED  ?? 0} color="#4ade80" icon={<CheckCircle size={18} />} />
          {isFarmer && (
            <StatCard label="Revenue (Delivered)" value={fmt(stats.deliveredRevenue)} color="var(--green-400)" icon={<ShoppingCart size={18} />} />
          )}
        </div>
      )}

      {/* Status filter tabs */}
      <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
        {[{ value: '', label: 'All' }, ...ALL_STATUSES.map((s) => ({ value: s, label: STATUS_META[s].label }))].map(({ value, label }) => (
          <button
            key={value}
            onClick={() => { setStatusFilter(value); setPage(1); }}
            style={{
              padding: '0.4rem 0.875rem',
              borderRadius: 99,
              border: `1px solid ${statusFilter === value ? 'var(--green-500)' : 'var(--border-light)'}`,
              background: statusFilter === value ? 'rgba(34,197,94,0.12)' : 'transparent',
              color: statusFilter === value ? 'var(--green-400)' : 'var(--text-muted)',
              cursor: 'pointer', fontSize: '0.8125rem', fontWeight: statusFilter === value ? 600 : 400,
              transition: 'all var(--transition-fast)',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-light)', background: 'rgba(34,197,94,0.04)' }}>
                {['Order #', 'Buyer', 'Seller', 'Status', 'Items', 'Total', 'Date', ''].map((h) => (
                  <th key={h} style={{
                    padding: '0.875rem 1rem',
                    textAlign: h === 'Total' ? 'right' : 'left',
                    fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)',
                    letterSpacing: '0.04em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {isLoading && [...Array(5)].map((_, i) => (
                <tr key={i}>
                  {[...Array(8)].map((__, j) => (
                    <td key={j} style={{ padding: '0.875rem 1rem' }}>
                      <div style={{ height: 16, background: 'var(--surface-3)', borderRadius: 4, animation: 'pulse-glow 2s ease-in-out infinite' }} />
                    </td>
                  ))}
                </tr>
              ))}

              {!isLoading && orders.length === 0 && (
                <tr>
                  <td colSpan={8} style={{ textAlign: 'center', padding: '4rem 2rem', color: 'var(--text-muted)' }}>
                    <ShoppingCart size={40} style={{ opacity: 0.3, marginBottom: '0.75rem' }} />
                    <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>No orders found</div>
                    <div style={{ fontSize: '0.8125rem' }}>
                      {statusFilter ? `No ${STATUS_META[statusFilter as OrderStatus]?.label} orders.` : isRetailer ? 'Place your first order to get started.' : 'No orders for your products yet.'}
                    </div>
                  </td>
                </tr>
              )}

              {!isLoading && orders.map((o) => (
                <OrderRow key={o.id} order={o} onView={() => { setSelectedOrder(o); setDetailOpen(true); }} />
              ))}
            </tbody>
          </table>
        </div>

        {pagination && pagination.totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.875rem 1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{pagination.total} order{pagination.total !== 1 ? 's' : ''}</span>
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
      <OrderDetailModal
        order={selectedOrder} isOpen={detailOpen} onClose={() => setDetailOpen(false)}
        isFarmer={isFarmer} onStatusUpdate={handleStatusUpdate} isUpdating={updateStatus.isPending}
      />
      <CreateOrderModal isOpen={createOpen} onClose={() => setCreateOpen(false)} onSuccess={() => showToast('Order placed!', 'success')} />

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
