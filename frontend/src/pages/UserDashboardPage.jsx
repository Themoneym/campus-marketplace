export default function UserDashboardPage() {
  return (
    <section className="stack">
      <h2>User Dashboard</h2>
      <div className="card"><h3>Orders</h3><p>Track statuses: Processing, Shipped, Delivered.</p></div>
      <div className="card"><h3>Bookings</h3><p>Upcoming and completed appointments with confirmations.</p></div>
      <div className="card"><h3>Payment History</h3><p>Download receipts sent via email/SMS.</p></div>
      <div className="card"><h3>Reviews</h3><p>Leave ratings and feedback for products/services.</p></div>
    </section>
  );
}
