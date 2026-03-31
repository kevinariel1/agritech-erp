import { useState } from 'react';
import { Users, Search, CheckCircle, XCircle, Leaf, Shield, RefreshCw } from 'lucide-react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import type { ApiResponse } from '@/types/auth';
import api from '@/services/api';

// ── Types ─────────────────────────────────────────────────────
interface AdminUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: string;
  isActive: boolean;
  emailVerified: boolean;
  createdAt: string;
  farm?:        { id: string; name: string; city: string; province: string } | null;
  retailer?:    { id: string; storeName: string; city: string } | null;
  distributor?: { id: string; companyName: string; city: string } | null;
}

const ROLES = ['FARMER', 'RETAILER', 'DISTRIBUTOR', 'ADMIN'];

const ROLE_META: Record<string, { color: string; bg: string }> = {
  FARMER:      { color: '#4ade80', bg: 'rgba(74,222,128,0.12)' },
  RETAILER:    { color: '#60a5fa', bg: 'rgba(96,165,250,0.12)' },
  DISTRIBUTOR: { color: '#fb923c', bg: 'rgba(251,146,60,0.12)' },
  ADMIN:       { color: '#a78bfa', bg: 'rgba(167,139,250,0.12)' },
};

// ── Hooks ─────────────────────────────────────────────────────
const useAdminUsers = (params: { search?: string; role?: string; page?: number; limit?: number }) =>
  useQuery({
    queryKey: ['admin', 'users', params],
    queryFn: async () => {
      const p = new URLSearchParams();
      if (params.search) p.set('search', params.search);
      if (params.role)   p.set('role',   params.role);
      if (params.page)   p.set('page',   String(params.page));
      if (params.limit)  p.set('limit',  String(params.limit));
      const res = await api.get<ApiResponse<{ users: AdminUser[]; pagination: { total: number; totalPages: number; page: number; limit: number } }>>(`/admin/users?${p}`);
      return res.data.data;
    },
  });

const useToggleUser = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => api.patch(`/admin/users/${id}/toggle`),
    onSuccess:  () => qc.invalidateQueries({ queryKey: ['admin', 'users'] }),
  });
};

// ── Role Badge ────────────────────────────────────────────────
const RoleBadge = ({ role }: { role: string }) => {
  const m = ROLE_META[role] ?? { color: 'var(--text-muted)', bg: 'var(--surface-3)' };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.25rem',
      padding: '0.2rem 0.6rem', borderRadius: 99, fontSize: '0.72rem', fontWeight: 700,
      color: m.color, background: m.bg, border: `1px solid ${m.color}40`,
    }}>
      {role === 'ADMIN' ? <Shield size={11} /> : <Leaf size={11} />} {role}
    </span>
  );
};

// ── Profile snippet ───────────────────────────────────────────
const profileLabel = (u: AdminUser) => {
  if (u.farm)        return `🌾 ${u.farm.name} · ${u.farm.city}`;
  if (u.retailer)    return `🏪 ${u.retailer.storeName} · ${u.retailer.city}`;
  if (u.distributor) return `🚛 ${u.distributor.companyName} · ${u.distributor.city}`;
  return null;
};

// ── Main Page ─────────────────────────────────────────────────
export const AdminUsersPage = () => {
  const [search, setSearch]     = useState('');
  const [roleFilter, setRole]   = useState('');
  const [page, setPage]         = useState(1);

  const { data, isLoading, refetch } = useAdminUsers({
    search: search || undefined,
    role:   roleFilter || undefined,
    page,
    limit:  20,
  });

  const toggleMut = useToggleUser();

  const users      = data?.users ?? [];
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
            Users
          </h1>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            Manage all user accounts — {pagination?.total ?? '…'} registered
          </p>
        </div>
        <button onClick={() => refetch()} className="btn-outline" style={{ padding: '0.75rem', alignSelf: 'flex-start' }} title="Refresh">
          <RefreshCw size={16} />
        </button>
      </div>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '0.75rem', marginBottom: '1.25rem', flexWrap: 'wrap', alignItems: 'center' }}>
        <div style={{ position: 'relative', flex: '1 1 220px' }}>
          <Search size={15} style={{ position: 'absolute', left: '0.875rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          <input
            className="field-input"
            style={{ paddingLeft: '2.25rem' }}
            placeholder="Search by name or email…"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          />
        </div>
        <div style={{ display: 'flex', gap: '0.375rem' }}>
          {[{ value: '', label: 'All roles' }, ...ROLES.map((r) => ({ value: r, label: r }))].map(({ value, label }) => (
            <button key={value} onClick={() => { setRole(value); setPage(1); }} style={{
              padding: '0.4rem 0.75rem', borderRadius: 99,
              border: `1px solid ${roleFilter === value ? 'var(--green-500)' : 'var(--border-light)'}`,
              background: roleFilter === value ? 'rgba(34,197,94,0.12)' : 'transparent',
              color: roleFilter === value ? 'var(--green-400)' : 'var(--text-muted)',
              cursor: 'pointer', fontSize: '0.8rem', fontWeight: roleFilter === value ? 600 : 400,
              transition: 'all var(--transition-fast)',
            }}>{label}</button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="glass-card" style={{ padding: 0, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.875rem' }}>
            <thead>
              <tr style={{ borderBottom: '1px solid var(--border-light)', background: 'rgba(34,197,94,0.04)' }}>
                {['User', 'Role', 'Profile', 'Email Verified', 'Status', 'Joined', ''].map((h) => (
                  <th key={h} style={{
                    padding: '0.875rem 1rem', textAlign: 'left',
                    fontSize: '0.72rem', fontWeight: 600, color: 'var(--text-muted)',
                    letterSpacing: '0.04em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {isLoading && [...Array(6)].map((_, i) => (
                <tr key={i}>
                  {[...Array(7)].map((__, j) => (
                    <td key={j} style={{ padding: '0.875rem 1rem' }}>
                      <div style={{ height: 16, background: 'var(--surface-3)', borderRadius: 4, animation: 'pulse-glow 2s ease-in-out infinite' }} />
                    </td>
                  ))}
                </tr>
              ))}

              {!isLoading && users.length === 0 && (
                <tr>
                  <td colSpan={7} style={{ textAlign: 'center', padding: '3rem 2rem', color: 'var(--text-muted)' }}>
                    <Users size={36} style={{ opacity: 0.3, marginBottom: '0.5rem' }} />
                    <div>No users found</div>
                  </td>
                </tr>
              )}

              {!isLoading && users.map((u) => (
                <tr key={u.id} style={{
                  borderBottom: '1px solid var(--border-subtle)',
                  opacity: u.isActive ? 1 : 0.55,
                  transition: 'background var(--transition-fast)',
                }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(34,197,94,0.03)')}
                  onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                >
                  <td style={{ padding: '0.875rem 1rem' }}>
                    <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{u.firstName} {u.lastName}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>{u.email}</div>
                  </td>
                  <td style={{ padding: '0.875rem 1rem' }}><RoleBadge role={u.role} /></td>
                  <td style={{ padding: '0.875rem 1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {profileLabel(u) ?? '—'}
                  </td>
                  <td style={{ padding: '0.875rem 1rem' }}>
                    {u.emailVerified
                      ? <CheckCircle size={16} style={{ color: '#4ade80' }} />
                      : <XCircle    size={16} style={{ color: '#f87171' }} />}
                  </td>
                  <td style={{ padding: '0.875rem 1rem' }}>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: '0.3rem',
                      padding: '0.2rem 0.55rem', borderRadius: 99, fontSize: '0.72rem', fontWeight: 600,
                      color: u.isActive ? '#4ade80' : '#94a3b8',
                      background: u.isActive ? 'rgba(74,222,128,0.12)' : 'rgba(148,163,184,0.12)',
                      border: `1px solid ${u.isActive ? 'rgba(74,222,128,0.3)' : 'rgba(148,163,184,0.3)'}`,
                    }}>
                      <div style={{ width: 6, height: 6, borderRadius: '50%', background: u.isActive ? '#4ade80' : '#94a3b8' }} />
                      {u.isActive ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                  <td style={{ padding: '0.875rem 1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {new Date(u.createdAt).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </td>
                  <td style={{ padding: '0.875rem 1rem' }}>
                    <button
                      onClick={() => toggleMut.mutate(u.id)}
                      disabled={toggleMut.isPending}
                      style={{
                        padding: '0.3rem 0.75rem', borderRadius: 6, fontSize: '0.75rem', fontWeight: 600,
                        border: `1px solid ${u.isActive ? 'rgba(239,68,68,0.3)' : 'rgba(74,222,128,0.3)'}`,
                        background: u.isActive ? 'rgba(239,68,68,0.08)' : 'rgba(74,222,128,0.08)',
                        color: u.isActive ? '#f87171' : '#4ade80',
                        cursor: 'pointer', transition: 'all var(--transition-fast)',
                      }}
                    >
                      {u.isActive ? 'Deactivate' : 'Activate'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {pagination && pagination.totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.875rem 1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{pagination.total} users</span>
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
    </div>
  );
};
