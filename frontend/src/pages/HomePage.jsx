import { categories, products, services, vendors } from '../data/mockData';
import VendorMapPanel from '../components/VendorMapPanel';

export default function HomePage() {
  return (
    <div className="stack">
      <section className="hero card">
        <h2>Buy, book, and discover trusted campus vendors in Ghana.</h2>
        <p>Search products, vendors, and appointment services in one place.</p>
        <div className="grid three">
          <input placeholder="Search by product/service/vendor" />
          <input type="date" />
          <button>Search</button>
        </div>
      </section>

      <section className="card">
        <h3>Categories</h3>
        <div className="chips">{categories.map((c) => <span key={c}>{c}</span>)}</div>
      </section>

      <section className="card">
        <h3>Featured Vendors</h3>
        <ul>{vendors.map((v) => <li key={v.id}>{v.name} · ⭐{v.rating}</li>)}</ul>
      </section>

      <section className="card">
        <h3>Trending Items & Services</h3>
        <ul>
          {products.map((p) => <li key={p.id}>{p.title} · GHS {p.price}</li>)}
          {services.map((s) => <li key={s.id}>{s.name} · GHS {s.price}</li>)}
        </ul>
      </section>

      <VendorMapPanel />
    </div>
  );
}
