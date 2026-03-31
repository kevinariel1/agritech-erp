import { useDashboard } from '@/hooks/useDashboard';
import { useAuthStore } from '@/store/authStore';
import {
  Package, Warehouse, ShoppingCart, TrendingUp, CreditCard,
  AlertTriangle, Users, Clock, CheckCircle, Truck, XCircle,
  BarChart3, Leaf,
} from 'lucide-react';
import type { OrderStatus } from '@/types/order';

// ── Helpers ───────────────────────────────────────────────────
const fmt = (n: number) =>
  new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(n);

const ORDER_STATUS_META: Record<string, { color: string; icon: React.ReactNode }> = {
  PENDING:    { color: '#facc15', icon: <Clock size={14} /> },
  CONFIRMED:  { color: '#60a5fa', icon: <CheckCircle size={14} /> },
  PROCESSING: { color: '#a78bfa', icon: <Package size={14} /> },
  SHIPPED:    { color: '#fb923c', icon: <Truck size={14} /> },
  DELIVERED:  { color: '#4ade80', icon: <CheckCircle size={14} /> },
  CANCELLED:  { color: '#f87171', icon: <XCircle size={14} /> },
};

// ── Reusable stat card ────────────────────────────────────────
const KpiCard = ({
  icon, label, value, sub, color = 'var(--green-400)', alert = false,
}: { icon: React.ReactNode; label: string; value: string | number; sub?: string; color?: string; alert?: boolean }) => (
  <div style={{
    background: 'var(--surface-2)',
    border: `1px solid ${alert ? 'rgba(248,113,113,0.4)' : 'var(--border-subtle)'}`,
    borderRadius: 'var(--radius-lg)', padding: '1.125rem 1.25rem',
    display: 'flex', flexDirection: 'column', gap: '0.75rem',
    transition: 'border-color var(--transition-fast)',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>{label}</span>
      <div style={{ padding: '0.5rem', background: `${color}18`, borderRadius: 'var(--radius-sm)', color }}>
        {icon}
      </div>
    </div>
    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.65rem', fontWeight: 800, letterSpacing: '-0.03em', color }}>{value}</div>
    {sub && <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{sub}</div>}
  </div>
);

// Skeleton card
const SkeletonCard = () => (
  <div style={{
    background: 'var(--surface-2)', border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-lg)', padding: '1.125rem 1.25rem',
    display: 'flex', flexDirection: 'column', gap: '0.75rem',
  }}>
    {[60, 100, 40].map((w, i) => (
      <div key={i} style={{ height: i === 1 ? 32 : 14, width: `${w}%`, background: 'var(--surface-3)', borderRadius: 4, animation: 'pulse-glow 2s ease-in-out infinite' }} />
    ))}
  </div>
);

// ── Recent Orders mini-table ──────────────────────────────────
const RecentOrdersTable = ({ orders }: { orders: ReturnType<typeof useDashboard>['data'] extends undefined ? never[] : NonNullable<ReturnType<typeof useDashboard>['data']>['recentOrders'] }) => (
  <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
    <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-subtle)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
      <ShoppingCart size={16} style={{ color: 'var(--green-400)' }} />
      <span style={{ fontWeight: 600, fontSize: '0.9375rem' }}>Recent Orders</span>
    </div>
    <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.8125rem' }}>
      <tbody>
        {orders.length === 0 && (
          <tr><td colSpan={4} style={{ textAlign: 'center', padding: '2rem', color: 'var(--text-muted)' }}>No orders yet</td></tr>
        )}
        {orders.map((o) => {
          const meta = ORDER_STATUS_META[o.status];
          return (
            <tr key={o.id} style={{ borderBottom: '1px solid var(--border-subtle)' }}>
              <td style={{ padding: '0.75rem 1rem' }}>
                <div style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.8rem', color: 'var(--green-400)', fontWeight: 600 }}>{o.orderNumber}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{o.orderItems[0]?.product.name ?? '—'}</div>
              </td>
              <td style={{ padding: '0.75rem 1rem', color: 'var(--text-secondary)' }}>
                {o.buyer.firstName} → {o.seller.firstName}
              </td>
              <td style={{ padding: '0.75rem 1rem' }}>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
                  padding: '0.2rem 0.55rem', borderRadius: 99, fontSize: '0.72rem', fontWeight: 600,
                  color: meta.color, background: `${meta.color}18`, border: `1px solid ${meta.color}40`,
                }}>
                  {meta.icon} {o.status}
                </span>
              </td>
              <td style={{ padding: '0.75rem 1rem', textAlign: 'right', fontWeight: 700, color: 'var(--green-400)' }}>
                {fmt(o.totalAmount)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

// ── Order pipeline ────────────────────────────────────────────
const OrderPipeline = ({ map }: { map: Record<string, number> }) => {
  const statuses: OrderStatus[] = ['PENDING', 'CONFIRMED', 'PROCESSING', 'SHIPPED', 'DELIVERED', 'CANCELLED'];
  const total = Object.values(map).reduce((s, n) => s + n, 0);
  if (total === 0) return null;
  return (
    <div className="glass-card" style={{ padding: '1rem 1.25rem' }}>
      <div style={{ fontWeight: 600, fontSize: '0.9375rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <BarChart3 size={16} style={{ color: 'var(--green-400)' }} /> Order Pipeline
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem' }}>
        {statuses.map((s) => {
          const count = map[s] ?? 0;
          const pct   = total > 0 ? (count / total) * 100 : 0;
          const meta  = ORDER_STATUS_META[s];
          return (
            <div key={s} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <span style={{ width: 80, fontSize: '0.75rem', color: meta.color, fontWeight: 600, flexShrink: 0 }}>{s}</span>
              <div style={{ flex: 1, height: 8, background: 'var(--surface-3)', borderRadius: 99, overflow: 'hidden' }}>
                <div style={{
                  height: '100%', width: `${pct}%`, minWidth: count > 0 ? 8 : 0,
                  background: meta.color, borderRadius: 99,
                  transition: 'width 0.6s cubic-bezier(0.34,1.56,0.64,1)',
                }} />
              </div>
              <span style={{ width: 28, textAlign: 'right', fontSize: '0.8125rem', fontWeight: 600, color: 'var(--text-secondary)', flexShrink: 0 }}>{count}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

// ── Dashboard Page ────────────────────────────────────────────
export const DashboardPage = () => {
  const { user } = useAuthStore();
  const { data, isLoading } = useDashboard();

  const role = user?.role;

  return (
    <div>
      {/* Welcome header */}
      <div style={{ marginBottom: '2rem' }}>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800,
          letterSpacing: '-0.03em', marginBottom: '0.25rem',
          background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--green-400) 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>
          Good morning, {user?.firstName}! 🌱
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          Here's your AgriTech ERP snapshot for today.
        </p>
      </div>

      {/* KPI cards — FARMER */}
      {role === 'FARMER' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          {isLoading ? [...Array(5)].map((_, i) => <SkeletonCard key={i} />) : <>
            <KpiCard icon={<Package size={18} />}     label="Active Products"      value={data?.productCount     ?? 0} />
            <KpiCard icon={<Warehouse size={18} />}   label="Inventory Batches"    value={data?.inventoryCount   ?? 0} />
            <KpiCard icon={<AlertTriangle size={18} />} label="Low Stock Items"    value={data?.lowStockCount    ?? 0} color="#facc15" alert={(data?.lowStockCount ?? 0) > 0} />
            <KpiCard icon={<XCircle size={18} />}     label="Expired Batches"      value={data?.expiredInventory ?? 0} color="#f87171" alert={(data?.expiredInventory ?? 0) > 0} />
            <KpiCard icon={<CreditCard size={18} />}  label="Pending Payments"     value={data?.pendingPayments  ?? 0} color="#a78bfa" />
          </>}
        </div>
      )}

      {/* KPI cards — RETAILER */}
      {role === 'RETAILER' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
          {isLoading ? [...Array(4)].map((_, i) => <SkeletonCard key={i} />) : <>
            <KpiCard icon={<ShoppingCart size={18} />} label="Active Orders"      value={data?.activeOrders     ?? 0} />
            <KpiCard icon={<TrendingUp size={18} />}   label="Total Spent (Paid)"  value={fmt(data?.totalSpent   ?? 0)} />
            <KpiCard icon={<TrendingUp size={18} />}   label="Delivered Revenue"   value={fmt(data?.totalRevenue  ?? 0)} />
            <KpiCard icon={<CreditCard size={18} />}   label="Pending Payments"    value={data?.pendingPayments  ?? 0} color="#facc15" />
          </>}
        </div>
      )}

      {/* KPI cards — ADMIN */}
      {role === 'ADMIN' && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: '1rem', marginBottom: '1.5rem' }}>
            {isLoading ? [...Array(5)].map((_, i) => <SkeletonCard key={i} />) : <>
              <KpiCard icon={<Users size={18} />}     label="Total Users"         value={Object.values(data?.usersByRole ?? {}).reduce((s, n) => s + n, 0)} />
              <KpiCard icon={<Package size={18} />}   label="Active Products"     value={data?.totalProducts    ?? 0} />
              <KpiCard icon={<Warehouse size={18} />} label="Inventory Batches"   value={data?.totalInventory   ?? 0} />
              <KpiCard icon={<TrendingUp size={18} />}label="System Revenue"      value={fmt(data?.systemRevenue ?? 0)} />
              <KpiCard icon={<CreditCard size={18} />}label="Pending Payments"    value={data?.pendingPayments  ?? 0} color="#facc15" />
            </>}
          </div>

          {/* User role breakdown */}
          {data?.usersByRole && (
            <div className="glass-card" style={{ padding: '1rem 1.25rem', marginBottom: '1.5rem' }}>
              <div style={{ fontWeight: 600, marginBottom: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9375rem' }}>
                <Users size={16} style={{ color: 'var(--green-400)' }} /> Users by Role
              </div>
              <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                {Object.entries(data.usersByRole).map(([r, count]) => (
                  <div key={r} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Leaf size={14} style={{ color: 'var(--green-400)' }} />
                    <span style={{ fontSize: '0.875rem', color: 'var(--text-secondary)' }}>{r}</span>
                    <span style={{
                      padding: '0.125rem 0.5rem', borderRadius: 99, fontSize: '0.8rem', fontWeight: 700,
                      background: 'rgba(34,197,94,0.12)', color: 'var(--green-400)',
                    }}>{count}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </>
      )}

      {/* 2-col grid: pipeline + recent orders */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '1.25rem' }}>
        {isLoading ? (
          <>
            <div style={{ height: 260, background: 'var(--surface-2)', borderRadius: 'var(--radius-lg)', animation: 'pulse-glow 2s ease-in-out infinite' }} />
            <div style={{ height: 260, background: 'var(--surface-2)', borderRadius: 'var(--radius-lg)', animation: 'pulse-glow 2s ease-in-out infinite' }} />
          </>
        ) : (
          <>
            {data && <OrderPipeline map={data.orderStatusMap} />}
            {data && <RecentOrdersTable orders={data.recentOrders} />}
          </>
        )}
      </div>
    </div>
  );
};
