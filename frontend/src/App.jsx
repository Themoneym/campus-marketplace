import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import BookingPage from './pages/BookingPage';
import CheckoutPage from './pages/CheckoutPage';
import UserDashboardPage from './pages/UserDashboardPage';
import VendorRegisterPage from './pages/VendorRegisterPage';
import VendorDashboardPage from './pages/VendorDashboardPage';
import VendorProfilePage from './pages/VendorProfilePage';
import AdminPanelPage from './pages/AdminPanelPage';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/dashboard" element={<UserDashboardPage />} />
        <Route path="/vendor/register" element={<VendorRegisterPage />} />
        <Route path="/vendor/dashboard" element={<VendorDashboardPage />} />
        <Route path="/vendor/profile/:vendorId" element={<VendorProfilePage />} />
        <Route path="/admin" element={<AdminPanelPage />} />
      </Routes>
    </Layout>
  );
}
