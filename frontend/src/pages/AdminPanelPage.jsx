export default function AdminPanelPage() {
  return (
    <section className="stack">
      <h2>Admin Panel</h2>
      <div className="card"><h3>Vendor Approvals</h3><p>Approve/reject registrations and verify locations.</p></div>
      <div className="card"><h3>Content Management</h3><p>Manage banners, promotions, and blog posts.</p></div>
      <div className="card"><h3>Orders, Bookings & Commissions</h3><p>Monitor transactions and marketplace fees.</p></div>
      <div className="card"><h3>Reports & Disputes</h3><p>Generate sales/top-vendor reports and resolve conflicts.</p></div>
    </section>
  );
}
