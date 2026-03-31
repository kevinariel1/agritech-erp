import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthLayout } from '@/layouts/AuthLayout';
import { AppLayout } from '@/layouts/AppLayout';
import { LoginPage } from '@/pages/auth/LoginPage';
import { RegisterPage } from '@/pages/auth/RegisterPage';
import { DashboardPage } from '@/pages/DashboardPage';
import { FarmerProductsPage } from '@/pages/farmer/FarmerProductsPage';
import { InventoryPage } from '@/pages/farmer/InventoryPage';
import { ProtectedRoute } from '@/components/shared/ProtectedRoute';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth routes */}
        <Route path="/auth" element={<AuthLayout />}>
          <Route index element={<Navigate to="login" replace />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Route>

        {/* Protected app routes */}
        <Route path="/" element={
          <ProtectedRoute>
            <AppLayout />
          </ProtectedRoute>
        }>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="products" element={
            <ProtectedRoute allowedRoles={['FARMER', 'ADMIN']}>
              <FarmerProductsPage />
            </ProtectedRoute>
          } />
          <Route path="inventory" element={
            <ProtectedRoute allowedRoles={['FARMER', 'RETAILER', 'ADMIN']}>
              <InventoryPage />
            </ProtectedRoute>
          } />
          <Route index element={<Navigate to="dashboard" replace />} />
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/auth/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;