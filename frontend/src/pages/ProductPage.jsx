import { products, vendors } from '../data/mockData';

export default function ProductPage() {
  const product = products[0];
  const vendor = vendors.find((v) => v.id === product.vendorId);

  return (
    <section className="stack">
      <h2>Product Details</h2>
      <div className="card">
        <p><strong>Images:</strong> carousel placeholder ({product.images.length} slides)</p>
        <h3>{product.title}</h3>
        <p>{product.description}</p>
        <p>Price: GHS {product.price}</p>
        <p>Stock: {product.stock}</p>
        <button>Add to Cart</button>
      </div>
      <div className="card">
        <h4>Vendor Information</h4>
        <p>{vendor.name}</p>
        <p>{vendor.description}</p>
      </div>
      <div className="card">
        <h4>Reviews & Ratings</h4>
        <p>Average rating: {product.rating} / 5</p>
      </div>
    </section>
  );
}
