import { useState } from 'react';
import {
  Truck, MapPin, Clock, CheckCircle, XCircle, AlertTriangle,
  Eye, ChevronRight, Plus, Package, Navigation, AlertCircle,
} from 'lucide-react';
import { useShipments, useUpdateShipmentStatus, useAddTracking } from '@/hooks/useShipments';
import { Modal } from '@/components/shared/Modal';
import { useAuthStore } from '@/store/authStore';
import type { Shipment, ShipmentStatus, UpdateShipmentStatusPayload } from '@/types/shipment';

// ── Constants ─────────────────────────────────────────────────
const STATUS_META: Record<ShipmentStatus, { label: string; color: string; bg: string; icon: React.ReactNode }> = {
  PREPARING:  { label: 'Preparing',  color: '#facc15', bg: 'rgba(250,204,21,0.12)',  icon: <Package size={12} /> },
  IN_TRANSIT: { label: 'In Transit', color: '#fb923c', bg: 'rgba(251,146,60,0.12)',  icon: <Truck size={12} /> },
  DELIVERED:  { label: 'Delivered',  color: '#4ade80', bg: 'rgba(74,222,128,0.12)',  icon: <CheckCircle size={12} /> },
  FAILED:     { label: 'Failed',     color: '#f87171', bg: 'rgba(248,113,113,0.12)', icon: <XCircle size={12} /> },
};

const ALL_STATUSES: ShipmentStatus[] = ['PREPARING', 'IN_TRANSIT', 'DELIVERED', 'FAILED'];

// Who can push which next status
const NEXT_STATUS: Partial<Record<ShipmentStatus, { next: ShipmentStatus; label: string }>> = {
  PREPARING:  { next: 'IN_TRANSIT', label: '🚚 Mark In Transit' },
  IN_TRANSIT: { next: 'DELIVERED',  label: '✅ Mark Delivered' },
  FAILED:     { next: 'IN_TRANSIT', label: '🔄 Retry Transit' },
};

const fmtDate = (d?: string | null) =>
  d ? new Date(d).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' }) : '—';

const fmtShortDate = (d: string) =>
  new Date(d).toLocaleDateString('id-ID', { day: '2-digit', month: 'short', year: 'numeric' });

// ── Status Badge ──────────────────────────────────────────────
const StatusBadge = ({ status }: { status: ShipmentStatus }) => {
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

// ── Tracking Timeline ─────────────────────────────────────────
const TrackingTimeline = ({ history }: { history: Shipment['trackingHistory'] }) => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
    {history.map((entry, i) => {
      const m = STATUS_META[entry.status];
      const isLast = i === history.length - 1;
      return (
        <div key={entry.id} style={{ display: 'flex', gap: '0.875rem', position: 'relative' }}>
          {/* Timeline line */}
          {!isLast && (
            <div style={{
              position: 'absolute', left: 9, top: 24, bottom: 0, width: 2,
              background: 'var(--border-subtle)',
            }} />
          )}
          {/* Dot */}
          <div style={{
            width: 20, height: 20, borderRadius: '50%', flexShrink: 0,
            background: m.bg, border: `2px solid ${m.color}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            marginTop: 2,
          }}>
            <div style={{ width: 6, height: 6, borderRadius: '50%', background: m.color }} />
          </div>
          {/* Content */}
          <div style={{ flex: 1, paddingBottom: isLast ? 0 : '1.25rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem' }}>
              <div>
                <div style={{ fontWeight: 600, fontSize: '0.8125rem', color: m.color }}>{m.label}</div>
                {entry.location && (
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.25rem', marginTop: '0.125rem' }}>
                    <MapPin size={11} /> {entry.location}
                  </div>
                )}
                {entry.notes && (
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.125rem' }}>{entry.notes}</div>
                )}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', flexShrink: 0, textAlign: 'right' }}>
                {fmtDate(entry.timestamp)}
              </div>
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

// ── Shipment Detail Modal ────────────────────────────────────
const ShipmentDetailModal = ({
  shipment, isOpen, onClose, canManage,
  onStatusUpdate, isUpdating,
}: {
  shipment: Shipment | null; isOpen: boolean; onClose: () => void; canManage: boolean;
  onStatusUpdate: (id: string, payload: UpdateShipmentStatusPayload) => void; isUpdating: boolean;
}) => {
  const [trackingForm, setTrackingForm] = useState({ location: '', notes: '' });
  const [showTrackingForm, setShowTrackingForm] = useState(false);

  if (!shipment) return null;
  const action = NEXT_STATUS[shipment.status];

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={`Shipment ${shipment.trackingNumber}`} maxWidth={600}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.5rem' }}>
          <StatusBadge status={shipment.status} />
          <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
            Order: <strong style={{ color: 'var(--green-400)' }}>{shipment.order.orderNumber}</strong>
          </span>
        </div>

        {/* Addresses */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
          {[
            { icon: <Navigation size={14} />, label: 'Pickup', addr: shipment.pickupAddress, date: shipment.actualPickup ?? shipment.estimatedPickup },
            { icon: <MapPin size={14} />,     label: 'Delivery', addr: shipment.deliveryAddress, date: shipment.actualDelivery ?? shipment.estimatedDelivery },
          ].map(({ icon, label, addr, date }) => (
            <div key={label} style={{
              padding: '0.875rem', background: 'var(--surface-3)',
              borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.375rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {icon} {label}
              </div>
              <div style={{ fontSize: '0.8125rem', fontWeight: 500, color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>{addr}</div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Clock size={11} /> {fmtDate(date)}
              </div>
            </div>
          ))}
        </div>

        {/* Driver / Distributor */}
        {(shipment.driverName || shipment.vehicleNumber || shipment.distributor) && (
          <div style={{
            display: 'flex', gap: '1rem', flexWrap: 'wrap',
            padding: '0.875rem', background: 'var(--surface-3)',
            borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)',
          }}>
            {shipment.distributor && (
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Distributor</div>
                <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{shipment.distributor.companyName}</div>
              </div>
            )}
            {shipment.driverName && (
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Driver</div>
                <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{shipment.driverName}</div>
              </div>
            )}
            {shipment.vehicleNumber && (
              <div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Vehicle</div>
                <div style={{ fontWeight: 600, fontSize: '0.875rem' }}>{shipment.vehicleNumber}</div>
              </div>
            )}
          </div>
        )}

        {/* Tracking timeline */}
        <div>
          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.875rem' }}>
            Tracking History
          </div>
          {shipment.trackingHistory.length > 0
            ? <TrackingTimeline history={shipment.trackingHistory} />
            : <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>No tracking history yet.</p>
          }
        </div>

        {/* Actions (distributor / farmer) */}
        {canManage && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.625rem', borderTop: '1px solid var(--border-subtle)', paddingTop: '1rem' }}>
            {action && (
              <button
                disabled={isUpdating}
                onClick={() => onStatusUpdate(shipment.id, { status: action.next })}
                className="btn-primary"
              >
                {isUpdating ? 'Updating...' : <>{action.label} <ChevronRight size={16} /></>}
              </button>
            )}

            {/* Add tracking entry */}
            {!showTrackingForm ? (
              <button onClick={() => setShowTrackingForm(true)} className="btn-outline">
                <Plus size={16} /> Add tracking note
              </button>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', padding: '1rem', background: 'var(--surface-3)', borderRadius: 'var(--radius-md)', border: '1px solid var(--border-subtle)' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  <div>
                    <label className="field-label">Location</label>
                    <input className="field-input" placeholder="e.g. Bandung Hub"
                      value={trackingForm.location} onChange={(e) => setTrackingForm((p) => ({ ...p, location: e.target.value }))} />
                  </div>
                  <div>
                    <label className="field-label">Status</label>
                    <span style={{ display: 'block', paddingTop: '0.5rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                      (uses current: {STATUS_META[shipment.status].label})
                    </span>
                  </div>
                </div>
                <div>
                  <label className="field-label">Notes</label>
                  <input className="field-input" placeholder="e.g. Package scanned at checkpoint"
                    value={trackingForm.notes} onChange={(e) => setTrackingForm((p) => ({ ...p, notes: e.target.value }))} />
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                  <button className="btn-outline" style={{ flex: 1 }} onClick={() => setShowTrackingForm(false)}>Cancel</button>
                  <button className="btn-primary" style={{ flex: 2 }}
                    disabled={isUpdating}
                    onClick={() => {
                      onStatusUpdate(shipment.id, { status: shipment.status, ...trackingForm });
                      setShowTrackingForm(false);
                      setTrackingForm({ location: '', notes: '' });
                    }}>
                    Add Entry
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </Modal>
  );
};

// ── Shipment Row ──────────────────────────────────────────────
const ShipmentRow = ({ s, onView }: { s: Shipment; onView: () => void }) => (
  <tr
    style={{ borderBottom: '1px solid var(--border-subtle)', cursor: 'pointer', transition: 'background var(--transition-fast)' }}
    onClick={onView}
    onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(34,197,94,0.03)')}
    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
  >
    <td style={{ padding: '0.875rem 1rem' }}>
      <span style={{ fontFamily: 'var(--font-mono, monospace)', fontSize: '0.8rem', color: 'var(--green-400)', fontWeight: 600 }}>
        {s.trackingNumber}
      </span>
    </td>
    <td style={{ padding: '0.875rem 1rem' }}>
      <div style={{ fontSize: '0.8125rem', fontWeight: 600 }}>{s.order.orderNumber}</div>
      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
        {s.order.buyer.firstName} → {s.order.seller.firstName}
      </div>
    </td>
    <td style={{ padding: '0.875rem 1rem' }}>
      <StatusBadge status={s.status} />
    </td>
    <td style={{ padding: '0.875rem 1rem', fontSize: '0.8rem', color: 'var(--text-secondary)', maxWidth: 180 }}>
      <div style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        {s.pickupAddress}
      </div>
      <div style={{ color: 'var(--text-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
        → {s.deliveryAddress}
      </div>
    </td>
    <td style={{ padding: '0.875rem 1rem', fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
      {s.distributor?.companyName ?? <span style={{ color: 'var(--text-muted)' }}>—</span>}
    </td>
    <td style={{ padding: '0.875rem 1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
      {s.estimatedDelivery ? fmtShortDate(s.estimatedDelivery) : '—'}
    </td>
    <td style={{ padding: '0.875rem 1rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
      {fmtShortDate(s.createdAt)}
    </td>
    <td style={{ padding: '0.875rem 1rem' }}>
      <Eye size={16} style={{ color: 'var(--text-muted)' }} />
    </td>
  </tr>
);

// ── Stat Card ─────────────────────────────────────────────────
const StatCard = ({ label, value, color, icon }: { label: string; value: number; color: string; icon: React.ReactNode }) => (
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

// ── Main Page ─────────────────────────────────────────────────
export const ShipmentsPage = () => {
  const { user } = useAuthStore();
  const isDistributor = user?.role === 'DISTRIBUTOR';
  const canManage     = isDistributor || user?.role === 'FARMER' || user?.role === 'ADMIN';

  const [statusFilter, setStatusFilter] = useState('');
  const [page, setPage] = useState(1);
  const [selected, setSelected] = useState<Shipment | null>(null);
  const [detailOpen, setDetailOpen] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

  const { data, isLoading } = useShipments({ status: statusFilter || undefined, page, limit: 15 });
  const updateStatus = useUpdateShipmentStatus();
  const addTracking  = useAddTracking();

  const showToast = (message: string, type: 'success' | 'error') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const shipments  = data?.shipments ?? [];
  const pagination = data?.pagination;

  // Derived stats from current page (best effort without a separate stats endpoint)
  const statsMap: Record<ShipmentStatus, number> = { PREPARING: 0, IN_TRANSIT: 0, DELIVERED: 0, FAILED: 0 };
  shipments.forEach((s) => { statsMap[s.status] = (statsMap[s.status] ?? 0) + 1; });

  const handleStatusUpdate = async (id: string, payload: UpdateShipmentStatusPayload) => {
    try {
      // If it's the same status, add a tracking entry; otherwise transition
      if (selected && payload.status === selected.status) {
        await addTracking.mutateAsync({ id, payload });
        showToast('Tracking note added!', 'success');
      } else {
        await updateStatus.mutateAsync({ id, payload });
        showToast(`Shipment ${STATUS_META[payload.status].label}!`, 'success');
      }
      setDetailOpen(false);
    } catch (err: unknown) {
      const msg = (err as { response?: { data?: { message?: string } } })?.response?.data?.message ?? 'Failed to update shipment.';
      showToast(msg, 'error');
    }
  };

  return (
    <div>
      {/* Header */}
      <div style={{ marginBottom: '1.75rem' }}>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: '1.75rem', fontWeight: 800,
          letterSpacing: '-0.03em', marginBottom: '0.25rem',
          background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--green-400) 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
        }}>
          Shipments
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          {isDistributor ? 'Manage your assigned deliveries' : 'Track shipments for your orders'}
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '1rem', marginBottom: '1.75rem' }}>
        <StatCard label="Preparing"  value={statsMap.PREPARING}  color="#facc15" icon={<Package size={18} />} />
        <StatCard label="In Transit" value={statsMap.IN_TRANSIT} color="#fb923c" icon={<Truck size={18} />} />
        <StatCard label="Delivered"  value={statsMap.DELIVERED}  color="#4ade80" icon={<CheckCircle size={18} />} />
        <StatCard label="Failed"     value={statsMap.FAILED}     color="#f87171" icon={<AlertTriangle size={18} />} />
      </div>

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
                {['Tracking #', 'Order', 'Status', 'Route', 'Distributor', 'Est. Delivery', 'Created', ''].map((h) => (
                  <th key={h} style={{
                    padding: '0.875rem 1rem', textAlign: 'left',
                    fontSize: '0.75rem', fontWeight: 600, color: 'var(--text-muted)',
                    letterSpacing: '0.04em', textTransform: 'uppercase', whiteSpace: 'nowrap',
                  }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {isLoading && [...Array(4)].map((_, i) => (
                <tr key={i}>
                  {[...Array(8)].map((__, j) => (
                    <td key={j} style={{ padding: '0.875rem 1rem' }}>
                      <div style={{ height: 16, background: 'var(--surface-3)', borderRadius: 4, animation: 'pulse-glow 2s ease-in-out infinite' }} />
                    </td>
                  ))}
                </tr>
              ))}

              {!isLoading && shipments.length === 0 && (
                <tr>
                  <td colSpan={8} style={{ textAlign: 'center', padding: '4rem 2rem', color: 'var(--text-muted)' }}>
                    <Truck size={40} style={{ opacity: 0.3, marginBottom: '0.75rem' }} />
                    <div style={{ fontWeight: 600, marginBottom: '0.25rem' }}>No shipments found</div>
                    <div style={{ fontSize: '0.8125rem' }}>
                      {statusFilter ? `No ${STATUS_META[statusFilter as ShipmentStatus]?.label} shipments.` : 'Shipments are created when orders are marked as shipped.'}
                    </div>
                  </td>
                </tr>
              )}

              {!isLoading && shipments.map((s) => (
                <ShipmentRow key={s.id} s={s} onView={() => { setSelected(s); setDetailOpen(true); }} />
              ))}
            </tbody>
          </table>
        </div>

        {pagination && pagination.totalPages > 1 && (
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.875rem 1.25rem', borderTop: '1px solid var(--border-subtle)' }}>
            <span style={{ fontSize: '0.8125rem', color: 'var(--text-muted)' }}>{pagination.total} shipment{pagination.total !== 1 ? 's' : ''}</span>
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

      {/* Detail Modal */}
      <ShipmentDetailModal
        shipment={selected}
        isOpen={detailOpen}
        onClose={() => setDetailOpen(false)}
        canManage={canManage}
        onStatusUpdate={handleStatusUpdate}
        isUpdating={updateStatus.isPending || addTracking.isPending}
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
