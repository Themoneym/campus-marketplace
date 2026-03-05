import { products, services, vendors } from '../data/mockData';

export default function VendorProfilePage() {
  const vendor = vendors[0];
  return (
    <section className="stack">
      <h2>{vendor.name}</h2>
      <div className="card">
        <p>{vendor.description}</p>
        <p>Rating: {vendor.rating}</p>
      </div>
      <div className="card">
        <h3>Products</h3>
        <ul>{products.filter((p) => p.vendorId === vendor.id).map((p) => <li key={p.id}>{p.title} <button>Add to Cart</button></li>)}</ul>
      </div>
      <div className="card">
        <h3>Services</h3>
        <ul>{services.filter((s) => s.vendorId === vendor.id).map((s) => <li key={s.id}>{s.name} <button>Book Now</button></li>)}</ul>
      </div>
    </section>
  );
}
