import { NavLink } from 'react-router-dom';

const links = [
  ['/', 'Home'],
  ['/product', 'Product'],
  ['/booking', 'Booking'],
  ['/checkout', 'Checkout'],
  ['/dashboard', 'User Dashboard'],
  ['/vendor/register', 'Vendor Register'],
  ['/vendor/dashboard', 'Vendor Dashboard'],
  ['/vendor/profile/v1', 'Vendor Profile'],
  ['/admin', 'Admin Panel'],
];

export default function Layout({ children }) {
  return (
    <div>
      <header className="header">
        <h1>CampusMarketplace</h1>
        <p className="tagline">Multi-vendor commerce + bookings for Ghana</p>
      </header>
      <nav className="nav">
        {links.map(([to, label]) => (
          <NavLink key={to} to={to} className={({ isActive }) => (isActive ? 'active' : '')}>
            {label}
          </NavLink>
        ))}
      </nav>
      <main className="container">{children}</main>
    </div>
  );
}
