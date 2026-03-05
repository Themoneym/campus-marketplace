import { paymentOptions } from '../data/mockData';

export default function CheckoutPage() {
  return (
    <section className="stack">
      <h2>Cart & Checkout</h2>
      <div className="card">
        <p>Order includes products + booking slot(s).</p>
        <p>Subtotal: GHS 4,800</p>
        <p>Commission + VAT: GHS 120</p>
        <p><strong>Total: GHS 4,920</strong></p>
      </div>
      <div className="card">
        <h3>Payment Methods</h3>
        <p>Local methods: {paymentOptions.local.join(', ')}</p>
        <p>International methods: {paymentOptions.international.join(', ')}</p>
        <button>Pay Securely (SSL/TLS + real-time confirmation)</button>
      </div>
    </section>
  );
}
