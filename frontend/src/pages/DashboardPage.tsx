import { useAuthStore } from '@/store/authStore';
import { Package, ShoppingCart, Warehouse, TrendingUp } from 'lucide-react';

const StatCard = ({ icon, label, value, sub }: { icon: React.ReactNode; label: string; value: string; sub: string }) => (
  <div style={{
    background: 'var(--surface-2)', border: '1px solid var(--border-subtle)',
    borderRadius: 'var(--radius-lg)', padding: '1.25rem 1.5rem',
    display: 'flex', flexDirection: 'column', gap: '0.75rem',
    transition: 'border-color var(--transition-fast)',
  }}
    onMouseEnter={(e) => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-light)'}
    onMouseLeave={(e) => (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)'}
  >
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)', fontWeight: 500 }}>{label}</span>
      <div style={{ padding: '0.5rem', background: 'rgba(34,197,94,0.1)', borderRadius: 'var(--radius-sm)', color: 'var(--green-400)' }}>
        {icon}
      </div>
    </div>
    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.03em' }}>{value}</div>
    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{sub}</div>
  </div>
);

export const DashboardPage = () => {
  const { user } = useAuthStore();

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
          Here's a snapshot of your AgriTech ERP activity.
        </p>
      </div>

      {/* Stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '1.25rem', marginBottom: '2rem' }}>
        <StatCard icon={<Package size={18} />} label="Total Products" value="—" sub="Coming soon" />
        <StatCard icon={<Warehouse size={18} />} label="Inventory Batches" value="—" sub="Coming soon" />
        <StatCard icon={<ShoppingCart size={18} />} label="Active Orders" value="—" sub="Coming soon" />
        <StatCard icon={<TrendingUp size={18} />} label="Revenue (MTD)" value="—" sub="Coming soon" />
      </div>

      {/* Placeholder notice */}
      <div className="glass-card" style={{ padding: '2rem', textAlign: 'center' }}>
        <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>🚧</div>
        <h3 style={{ fontFamily: 'var(--font-display)', marginBottom: '0.5rem' }}>Dashboard coming up</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          Charts and analytics will be wired in after all modules are complete.
          Head to <strong style={{ color: 'var(--green-400)' }}>Products</strong> to start managing your listings.
        </p>
      </div>
    </div>
  );
};

