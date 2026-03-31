import { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard, Package, Warehouse, ShoppingCart,
  Truck, CreditCard, LogOut, Menu, X, ChevronRight, Leaf, Users
} from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import type { UserRole } from '@/types/auth';

interface NavItem {
  label: string;
  path: string;
  icon: React.ReactNode;
  roles: UserRole[];
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Dashboard',  path: '/dashboard',           icon: <LayoutDashboard size={18} />, roles: ['FARMER','RETAILER','DISTRIBUTOR','ADMIN'] },
  { label: 'Users',      path: '/admin/users',         icon: <Users size={18} />,           roles: ['ADMIN'] },
  { label: 'Products',   path: '/products',            icon: <Package size={18} />,          roles: ['FARMER','RETAILER','ADMIN'] },
  { label: 'Inventory',  path: '/inventory',           icon: <Warehouse size={18} />,        roles: ['FARMER','RETAILER','ADMIN'] },
  { label: 'Orders',     path: '/orders',              icon: <ShoppingCart size={18} />,     roles: ['FARMER','RETAILER','ADMIN'] },
  { label: 'Shipments',  path: '/shipments',           icon: <Truck size={18} />,            roles: ['DISTRIBUTOR','ADMIN'] },
  { label: 'Payments',   path: '/payments',            icon: <CreditCard size={18} />,       roles: ['FARMER','RETAILER','ADMIN'] },
];

const ROLE_COLORS: Record<UserRole, string> = {
  FARMER:      'var(--green-500)',
  RETAILER:    '#60a5fa',
  DISTRIBUTOR: '#fb923c',
  ADMIN:       '#a78bfa',
};

const ROLE_LABELS: Record<UserRole, string> = {
  FARMER:      '🌾 Farmer',
  RETAILER:    '🏪 Retailer',
  DISTRIBUTOR: '🚚 Distributor',
  ADMIN:       '⚙️ Admin',
};

export const AppLayout = () => {
  const { user, logout } = useAuthStore();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const role = user?.role as UserRole;
  const visibleNav = NAV_ITEMS.filter((item) => item.roles.includes(role));

  const handleLogout = () => {
    logout();
    navigate('/auth/login', { replace: true });
  };

  const Sidebar = ({ mobile = false }: { mobile?: boolean }) => (
    <div style={{
      width: mobile ? '100%' : 240,
      height: mobile ? 'auto' : '100vh',
      background: 'var(--surface-1)',
      borderRight: mobile ? 'none' : '1px solid var(--border-subtle)',
      display: 'flex',
      flexDirection: 'column',
      position: mobile ? 'relative' : 'fixed',
      top: 0, left: 0,
      zIndex: mobile ? 'auto' : 100,
      flexShrink: 0,
    }}>
      {/* Brand */}
      <div style={{
        padding: '1.25rem 1.5rem',
        borderBottom: '1px solid var(--border-subtle)',
        display: 'flex', alignItems: 'center', gap: '0.75rem',
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10,
          background: 'linear-gradient(135deg, var(--green-600), var(--emerald-500))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
        }}>
          <Leaf size={18} color="#fff" />
        </div>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '0.9375rem', letterSpacing: '-0.02em' }}>
            AgriTech ERP
          </div>
          <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '1px' }}>
            Supply Chain Platform
          </div>
        </div>
        {mobile && (
          <button onClick={() => setSidebarOpen(false)} style={{ marginLeft: 'auto', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex' }}>
            <X size={20} />
          </button>
        )}
      </div>

      {/* User card */}
      <div style={{ padding: '1rem 1.25rem', borderBottom: '1px solid var(--border-subtle)' }}>
        <div style={{
          padding: '0.75rem 1rem',
          background: 'rgba(34,197,94,0.05)',
          borderRadius: 'var(--radius-md)',
          border: '1px solid var(--border-subtle)',
        }}>
          <div style={{ fontWeight: 600, fontSize: '0.875rem', marginBottom: '0.125rem' }}>
            {user?.firstName} {user?.lastName}
          </div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.375rem' }}>
            {user?.email}
          </div>
          <span style={{
            fontSize: '0.7rem', fontWeight: 600, color: ROLE_COLORS[role],
            background: `${ROLE_COLORS[role]}18`,
            padding: '0.15rem 0.5rem', borderRadius: 99,
            border: `1px solid ${ROLE_COLORS[role]}40`,
          }}>
            {ROLE_LABELS[role]}
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav style={{ flex: 1, padding: '0.75rem', overflowY: 'auto' }}>
        <div style={{ fontSize: '0.7rem', fontWeight: 600, color: 'var(--text-muted)', letterSpacing: '0.06em', textTransform: 'uppercase', padding: '0.5rem 0.75rem', marginBottom: '0.25rem' }}>
          Navigation
        </div>
        {visibleNav.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            onClick={() => mobile && setSidebarOpen(false)}
            style={({ isActive }) => ({
              display: 'flex', alignItems: 'center', gap: '0.75rem',
              padding: '0.625rem 0.875rem',
              borderRadius: 'var(--radius-md)',
              marginBottom: '0.125rem',
              textDecoration: 'none',
              fontSize: '0.875rem', fontWeight: isActive ? 600 : 400,
              color: isActive ? 'var(--green-400)' : 'var(--text-secondary)',
              background: isActive ? 'rgba(34,197,94,0.1)' : 'transparent',
              border: `1px solid ${isActive ? 'rgba(34,197,94,0.2)' : 'transparent'}`,
              transition: 'all var(--transition-fast)',
            })}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              if (!el.classList.contains('active')) {
                el.style.background = 'rgba(34,197,94,0.05)';
                el.style.color = 'var(--text-primary)';
              }
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              if (!el.getAttribute('aria-current')) {
                el.style.background = 'transparent';
                el.style.color = 'var(--text-secondary)';
              }
            }}
          >
            {item.icon}
            <span style={{ flex: 1 }}>{item.label}</span>
            <ChevronRight size={14} style={{ opacity: 0.4 }} />
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div style={{ padding: '1rem 1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
        <button
          onClick={handleLogout}
          style={{
            width: '100%', display: 'flex', alignItems: 'center', gap: '0.75rem',
            padding: '0.625rem 0.875rem',
            background: 'transparent', border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-md)', cursor: 'pointer',
            color: 'var(--text-muted)', fontSize: '0.875rem', fontWeight: 500,
            transition: 'all var(--transition-fast)', fontFamily: 'var(--font-sans)',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.color = '#f87171';
            (e.currentTarget as HTMLElement).style.borderColor = 'rgba(239,68,68,0.3)';
            (e.currentTarget as HTMLElement).style.background = 'rgba(239,68,68,0.08)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.color = 'var(--text-muted)';
            (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-subtle)';
            (e.currentTarget as HTMLElement).style.background = 'transparent';
          }}
        >
          <LogOut size={16} />
          Sign out
        </button>
      </div>
    </div>
  );

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--surface-0)' }}>
      {/* Desktop sidebar — always visible */}
      <Sidebar />

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)',
          }}
        />
      )}

      {/* Mobile drawer */}
      {sidebarOpen && (
        <div style={{
          position: 'fixed', top: 0, left: 0, bottom: 0, width: 260, zIndex: 201,
          animation: 'fadeInUp 0.2s ease',
        }}>
          <Sidebar mobile />
        </div>
      )}

      {/* Main content */}
      <main style={{
        flex: 1,
        marginLeft: 240,
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
      }}>
        {/* Topbar — mobile only hamburger */}
        <div style={{
          padding: '0.875rem 1.5rem',
          borderBottom: '1px solid var(--border-subtle)',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
          background: 'var(--surface-1)',
          position: 'sticky', top: 0, zIndex: 50,
        }}>
          <button
            onClick={() => setSidebarOpen(true)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--text-secondary)', display: 'flex', padding: '0.25rem',
            }}
          >
            <Menu size={20} />
          </button>
          <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>
            {user?.firstName} {user?.lastName} — {ROLE_LABELS[role]}
          </span>
        </div>

        {/* Page content */}
        <div style={{ flex: 1, padding: '2rem 2rem' }}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};
