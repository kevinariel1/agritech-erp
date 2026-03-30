import { Outlet, Navigate } from 'react-router-dom';
import { useAuthStore } from '@/store/authStore';

// Decorative background shapes
const BgShapes = () => (
  <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
    {/* Large radial gradient — top-left */}
    <div style={{
      position: 'absolute', top: '-20%', left: '-15%',
      width: '55vw', height: '55vw',
      background: 'radial-gradient(circle, rgba(22,163,74,0.12) 0%, transparent 65%)',
      borderRadius: '50%',
    }} />
    {/* Smaller gradient — bottom-right */}
    <div style={{
      position: 'absolute', bottom: '-15%', right: '-10%',
      width: '40vw', height: '40vw',
      background: 'radial-gradient(circle, rgba(16,185,129,0.09) 0%, transparent 65%)',
      borderRadius: '50%',
    }} />
    {/* Grid overlay */}
    <div style={{
      position: 'absolute', inset: 0,
      backgroundImage: `
        linear-gradient(rgba(34,197,94,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(34,197,94,0.03) 1px, transparent 1px)
      `,
      backgroundSize: '48px 48px',
    }} />
    {/* Floating leaf shapes */}
    <FloatingLeaf top="12%" left="8%" size={64} rotation={-20} delay="0s" />
    <FloatingLeaf top="68%" left="4%" size={40} rotation={15} delay="1.2s" />
    <FloatingLeaf top="25%" right="6%" size={52} rotation={30} delay="0.6s" />
    <FloatingLeaf top="75%" right="8%" size={36} rotation={-35} delay="1.8s" />
  </div>
);

const FloatingLeaf = ({ top, left, right, size, rotation, delay }: {
  top: string; left?: string; right?: string; size: number; rotation: number; delay: string;
}) => (
  <div style={{
    position: 'absolute', top, left, right,
    width: size, height: size,
    opacity: 0.25,
    animation: `float 5s ease-in-out infinite`,
    animationDelay: delay,
  }}>
    <svg viewBox="0 0 24 24" fill="none" style={{ transform: `rotate(${rotation}deg)` }}>
      <path
        d="M12 2C6 2 2 8 2 14c0 4.4 3.6 8 8 8 1.6 0 3-.4 4.2-1.2C17.8 19 22 15.2 22 10c0-4.4-3.6-8-8-8-1.4 0-2 .6-2 .6S12.6 2 12 2z"
        fill="rgba(34,197,94,0.6)"
      />
    </svg>
  </div>
);

// Brand logo mark
const BrandMark = () => (
  <div className="animate-fade-in" style={{ marginBottom: '2rem', textAlign: 'center' }}>
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.75rem',
      padding: '0.625rem 1.25rem',
      background: 'rgba(34,197,94,0.08)',
      border: '1px solid rgba(34,197,94,0.2)',
      borderRadius: '99px',
      marginBottom: '0.5rem',
    }}>
      {/* Leaf icon */}
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2C6 2 2 8 2 14c0 4.4 3.6 8 8 8 1.6 0 3-.4 4.2-1.2C17.8 19 22 15.2 22 10c0-4.4-3.6-8-8-8z"
          fill="rgba(34,197,94,0.9)" />
        <path d="M12 22V12M12 12C12 12 8 9 6 6" stroke="rgba(10,15,13,0.5)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span style={{
        fontFamily: 'var(--font-display)',
        fontSize: '0.9375rem',
        fontWeight: 700,
        letterSpacing: '-0.01em',
        color: 'var(--green-400)',
      }}>
        AgriTech ERP
      </span>
    </div>
  </div>
);

export const AuthLayout = () => {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1rem',
      position: 'relative',
      background: 'var(--surface-0)',
    }}>
      <BgShapes />

      <div style={{
        width: '100%',
        maxWidth: '440px',
        position: 'relative',
        zIndex: 1,
      }}>
        <BrandMark />
        <Outlet />
      </div>
    </div>
  );
};
