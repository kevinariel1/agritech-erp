import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, UserPlus, AlertCircle, ChevronRight, ChevronLeft, Check } from 'lucide-react';
import { useAuthStore } from '@/store/authStore';
import { authService } from '@/services/authService';
import type { RegisterPayload, UserRole } from '@/types/auth';
import axios from 'axios';

const ROLES: { value: UserRole; label: string; description: string; icon: string }[] = [
  { value: 'FARMER',      label: 'Farmer',      description: 'Manage crops, harvest & sell produce', icon: '🌾' },
  { value: 'DISTRIBUTOR', label: 'Distributor',  description: 'Handle logistics & shipment tracking',  icon: '🚚' },
  { value: 'RETAILER',    label: 'Retailer',     description: 'Buy & sell products to end customers',  icon: '🏪' },
  { value: 'ADMIN',       label: 'Admin',        description: 'Full platform access & management',     icon: '⚙️' },
];

const STEPS = ['Account', 'Role', 'Profile'];

const StepIndicator = ({ current }: { current: number }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '1.75rem' }}>
    {STEPS.map((label, i) => (
      <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <div style={{
          width: 28, height: 28, borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '0.75rem', fontWeight: 600,
          background: i < current ? 'var(--green-600)' : i === current ? 'rgba(34,197,94,0.2)' : 'rgba(255,255,255,0.05)',
          border: `1.5px solid ${i <= current ? 'var(--green-500)' : 'var(--border-subtle)'}`,
          color: i <= current ? (i < current ? '#fff' : 'var(--green-400)') : 'var(--text-muted)',
          transition: 'all 0.3s ease',
        }}>
          {i < current ? <Check size={14} /> : i + 1}
        </div>
        <span style={{
          fontSize: '0.78rem', fontWeight: i === current ? 600 : 400,
          color: i === current ? 'var(--text-primary)' : 'var(--text-muted)',
        }}>{label}</span>
        {i < STEPS.length - 1 && (
          <div style={{ width: 24, height: 1, background: i < current ? 'var(--green-600)' : 'var(--border-subtle)', transition: 'background 0.3s ease' }} />
        )}
      </div>
    ))}
  </div>
);

export const RegisterPage = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuthStore();

  const [step, setStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState<RegisterPayload>({
    email: '', password: '', firstName: '', lastName: '', phone: '', role: 'FARMER',
    farmName: '', farmAddress: '', farmCity: '', farmProvince: '',
    companyName: '', distributorAddress: '', distributorCity: '', distributorProvince: '',
    storeName: '', storeAddress: '', storeCity: '', storeProvince: '', storeType: '',
  });

  const set = (field: keyof RegisterPayload, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (error) setError('');
  };

  // ── Step 0: Account ──────────────────────────────
  const validateStep0 = () => {
    if (!form.email) return 'Email is required.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) return 'Enter a valid email.';
    if (!form.firstName || !form.lastName) return 'First and last name are required.';
    if (!form.password) return 'Password is required.';
    if (form.password.length < 8) return 'Password must be at least 8 characters.';
    return '';
  };

  // ── Step 2: Profile validation ───────────────────
  const validateStep2 = () => {
    if (form.role === 'FARMER') {
      if (!form.farmName || !form.farmAddress || !form.farmCity || !form.farmProvince)
        return 'All farm details are required.';
    }
    if (form.role === 'DISTRIBUTOR') {
      if (!form.companyName || !form.distributorAddress || !form.distributorCity || !form.distributorProvince)
        return 'All company details are required.';
    }
    if (form.role === 'RETAILER') {
      if (!form.storeName || !form.storeAddress || !form.storeCity || !form.storeProvince)
        return 'All store details are required.';
    }
    return '';
  };

  const nextStep = () => {
    if (step === 0) {
      const err = validateStep0();
      if (err) { setError(err); return; }
    }
    setError('');
    setStep((s) => s + 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const err = validateStep2();
    if (err) { setError(err); return; }

    setIsLoading(true);
    setError('');
    try {
      const res = await authService.register(form);
      setAuth(res.data.token, res.data.user as Parameters<typeof setAuth>[1]);
      navigate('/dashboard', { replace: true });
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message ?? 'Registration failed.');
      } else {
        setError('An unexpected error occurred.');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const inputStyle = { marginBottom: 0 };

  return (
    <div className="glass-card animate-fade-in-up" style={{ padding: '2.5rem 2rem' }}>
      <div style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
        <h1 style={{
          fontFamily: 'var(--font-display)', fontSize: '1.65rem', fontWeight: 800,
          letterSpacing: '-0.03em',
          background: 'linear-gradient(135deg, var(--text-primary) 0%, var(--green-400) 100%)',
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
          marginBottom: '0.4rem',
        }}>
          Create your account
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
          Join the AgriTech ERP platform
        </p>
      </div>

      <StepIndicator current={step} />

      {error && (
        <div className="animate-fade-in" style={{
          display: 'flex', alignItems: 'center', gap: '0.5rem',
          padding: '0.75rem 1rem',
          background: 'rgba(239,68,68,0.1)',
          border: '1px solid rgba(239,68,68,0.25)',
          borderRadius: 'var(--radius-md)',
          marginBottom: '1.25rem',
          color: '#f87171', fontSize: '0.875rem',
        }}>
          <AlertCircle size={16} style={{ flexShrink: 0 }} />
          {error}
        </div>
      )}

      <form onSubmit={step === 2 ? handleSubmit : (e) => { e.preventDefault(); nextStep(); }}>
        {/* ── Step 0: Account Info ───────────────────── */}
        {step === 0 && (
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <div>
                <label htmlFor="reg-firstName" className="field-label">First name</label>
                <input id="reg-firstName" type="text" placeholder="Budi" value={form.firstName}
                  onChange={(e) => set('firstName', e.target.value)} className="field-input" style={inputStyle} />
              </div>
              <div>
                <label htmlFor="reg-lastName" className="field-label">Last name</label>
                <input id="reg-lastName" type="text" placeholder="Santoso" value={form.lastName}
                  onChange={(e) => set('lastName', e.target.value)} className="field-input" style={inputStyle} />
              </div>
            </div>
            <div>
              <label htmlFor="reg-email" className="field-label">Email address</label>
              <input id="reg-email" type="email" placeholder="you@example.com" value={form.email}
                autoComplete="email"
                onChange={(e) => set('email', e.target.value)} className="field-input" />
            </div>
            <div>
              <label htmlFor="reg-phone" className="field-label">Phone <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(optional)</span></label>
              <input id="reg-phone" type="tel" placeholder="+62 812 3456 7890" value={form.phone ?? ''}
                onChange={(e) => set('phone', e.target.value)} className="field-input" />
            </div>
            <div>
              <label htmlFor="reg-password" className="field-label">Password</label>
              <div style={{ position: 'relative' }}>
                <input id="reg-password" type={showPassword ? 'text' : 'password'} placeholder="Min. 8 characters"
                  value={form.password} onChange={(e) => set('password', e.target.value)}
                  className="field-input" style={{ paddingRight: '3rem' }} />
                <button type="button" onClick={() => setShowPassword((v) => !v)} aria-label="Toggle password"
                  style={{
                    position: 'absolute', right: '0.75rem', top: '50%', transform: 'translateY(-50%)',
                    background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)',
                    display: 'flex', alignItems: 'center',
                  }}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {/* Password strength */}
              {form.password && (
                <div style={{ display: 'flex', gap: '4px', marginTop: '6px' }}>
                  {[...Array(4)].map((_, i) => {
                    const strength = form.password.length >= 12 ? 4 : form.password.length >= 10 ? 3 : form.password.length >= 8 ? 2 : 1;
                    return <div key={i} style={{
                      flex: 1, height: 3, borderRadius: 99,
                      background: i < strength
                        ? strength <= 1 ? '#ef4444' : strength <= 2 ? '#f59e0b' : strength <= 3 ? '#22c55e' : '#10b981'
                        : 'var(--border-subtle)',
                      transition: 'background 0.3s',
                    }} />;
                  })}
                </div>
              )}
            </div>
          </div>
        )}

        {/* ── Step 1: Role Selection ─────────────────── */}
        {step === 1 && (
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {ROLES.map((role) => (
              <button
                key={role.value}
                type="button"
                onClick={() => set('role', role.value)}
                style={{
                  display: 'flex', alignItems: 'center', gap: '1rem',
                  padding: '1rem 1.125rem',
                  background: form.role === role.value ? 'rgba(34,197,94,0.1)' : 'rgba(255,255,255,0.03)',
                  border: `1.5px solid ${form.role === role.value ? 'var(--green-500)' : 'var(--border-light)'}`,
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  textAlign: 'left',
                  transition: 'all var(--transition-fast)',
                  width: '100%',
                }}
                onMouseEnter={(e) => { if (form.role !== role.value) (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-medium)'; }}
                onMouseLeave={(e) => { if (form.role !== role.value) (e.currentTarget as HTMLElement).style.borderColor = 'var(--border-light)'; }}
              >
                <span style={{ fontSize: '1.5rem' }}>{role.icon}</span>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: form.role === role.value ? 'var(--green-400)' : 'var(--text-primary)' }}>{role.label}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.125rem' }}>{role.description}</div>
                </div>
                {form.role === role.value && <Check size={18} color="var(--green-400)" style={{ flexShrink: 0 }} />}
              </button>
            ))}
          </div>
        )}

        {/* ── Step 2: Role Profile ───────────────────── */}
        {step === 2 && (
          <div className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {form.role === 'FARMER' && (
              <>
                <div>
                  <label htmlFor="farmName" className="field-label">Farm name</label>
                  <input id="farmName" type="text" placeholder="e.g. Kebun Makmur" value={form.farmName ?? ''}
                    onChange={(e) => set('farmName', e.target.value)} className="field-input" />
                </div>
                <div>
                  <label htmlFor="farmAddress" className="field-label">Farm address</label>
                  <input id="farmAddress" type="text" placeholder="Street address" value={form.farmAddress ?? ''}
                    onChange={(e) => set('farmAddress', e.target.value)} className="field-input" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label htmlFor="farmCity" className="field-label">City</label>
                    <input id="farmCity" type="text" placeholder="Bandung" value={form.farmCity ?? ''}
                      onChange={(e) => set('farmCity', e.target.value)} className="field-input" />
                  </div>
                  <div>
                    <label htmlFor="farmProvince" className="field-label">Province</label>
                    <input id="farmProvince" type="text" placeholder="Jawa Barat" value={form.farmProvince ?? ''}
                      onChange={(e) => set('farmProvince', e.target.value)} className="field-input" />
                  </div>
                </div>
              </>
            )}
            {form.role === 'DISTRIBUTOR' && (
              <>
                <div>
                  <label htmlFor="companyName" className="field-label">Company name</label>
                  <input id="companyName" type="text" placeholder="e.g. Logistik Nusantara" value={form.companyName ?? ''}
                    onChange={(e) => set('companyName', e.target.value)} className="field-input" />
                </div>
                <div>
                  <label htmlFor="distAddress" className="field-label">Address</label>
                  <input id="distAddress" type="text" placeholder="Street address" value={form.distributorAddress ?? ''}
                    onChange={(e) => set('distributorAddress', e.target.value)} className="field-input" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label htmlFor="distCity" className="field-label">City</label>
                    <input id="distCity" type="text" placeholder="Jakarta" value={form.distributorCity ?? ''}
                      onChange={(e) => set('distributorCity', e.target.value)} className="field-input" />
                  </div>
                  <div>
                    <label htmlFor="distProvince" className="field-label">Province</label>
                    <input id="distProvince" type="text" placeholder="DKI Jakarta" value={form.distributorProvince ?? ''}
                      onChange={(e) => set('distributorProvince', e.target.value)} className="field-input" />
                  </div>
                </div>
              </>
            )}
            {form.role === 'RETAILER' && (
              <>
                <div>
                  <label htmlFor="storeName" className="field-label">Store name</label>
                  <input id="storeName" type="text" placeholder="e.g. Toko Sayur Segar" value={form.storeName ?? ''}
                    onChange={(e) => set('storeName', e.target.value)} className="field-input" />
                </div>
                <div>
                  <label htmlFor="storeAddress" className="field-label">Store address</label>
                  <input id="storeAddress" type="text" placeholder="Street address" value={form.storeAddress ?? ''}
                    onChange={(e) => set('storeAddress', e.target.value)} className="field-input" />
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  <div>
                    <label htmlFor="storeCity" className="field-label">City</label>
                    <input id="storeCity" type="text" placeholder="Surabaya" value={form.storeCity ?? ''}
                      onChange={(e) => set('storeCity', e.target.value)} className="field-input" />
                  </div>
                  <div>
                    <label htmlFor="storeProvince" className="field-label">Province</label>
                    <input id="storeProvince" type="text" placeholder="Jawa Timur" value={form.storeProvince ?? ''}
                      onChange={(e) => set('storeProvince', e.target.value)} className="field-input" />
                  </div>
                </div>
                <div>
                  <label htmlFor="storeType" className="field-label">Store type <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>(optional)</span></label>
                  <input id="storeType" type="text" placeholder="e.g. Supermarket, Warung" value={form.storeType ?? ''}
                    onChange={(e) => set('storeType', e.target.value)} className="field-input" />
                </div>
              </>
            )}
            {form.role === 'ADMIN' && (
              <div style={{
                textAlign: 'center', padding: '2rem',
                background: 'rgba(34,197,94,0.05)', borderRadius: 'var(--radius-md)',
                border: '1px solid var(--border-subtle)',
              }}>
                <span style={{ fontSize: '2.5rem' }}>⚙️</span>
                <p style={{ color: 'var(--text-secondary)', marginTop: '0.75rem', fontSize: '0.9rem' }}>
                  No additional profile required for Admin accounts.
                </p>
              </div>
            )}
          </div>
        )}

        {/* ── Navigation buttons ─────────────────────── */}
        <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.75rem' }}>
          {step > 0 && (
            <button type="button" onClick={() => setStep((s) => s - 1)}
              className="btn-outline" style={{ flex: 1 }}>
              <ChevronLeft size={16} /> Back
            </button>
          )}
          {step < 2 ? (
            <button type="submit" className="btn-primary" style={{ flex: step > 0 ? 2 : 1 }}>
              Continue <ChevronRight size={16} />
            </button>
          ) : (
            <button id="register-submit" type="submit" disabled={isLoading} className="btn-primary" style={{ flex: step > 0 ? 2 : 1 }}>
              {isLoading ? (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                    style={{ animation: 'spin-slow 0.8s linear infinite' }}>
                    <circle cx="12" cy="12" r="10" stroke="rgba(255,255,255,0.3)" strokeWidth="3" />
                    <path d="M12 2a10 10 0 0 1 10 10" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
                  </svg>
                  Creating account...
                </>
              ) : (
                <><UserPlus size={18} /> Create account</>
              )}
            </button>
          )}
        </div>
      </form>

      <p style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
        Already have an account?{' '}
        <Link to="/auth/login" style={{ fontWeight: 600, color: 'var(--green-400)' }}>Sign in</Link>
      </p>
    </div>
  );
};
