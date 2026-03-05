import { vendors } from '../data/mockData';

export default function VendorMapPanel() {
  return (
    <section className="card">
      <h3>Nearby Vendor Map (Mapbox/Google Maps integration point)</h3>
      <p>
        This placeholder demonstrates where a real map SDK is mounted. In production, use browser GPS,
        render vendor markers, and provide directions + radius filters.
      </p>
      <div className="map-placeholder">
        {vendors.map((vendor) => (
          <button key={vendor.id} className="marker">
            {vendor.name} · {vendor.distanceKm} km
          </button>
        ))}
      </div>
      <div className="grid two">
        <label>
          Radius filter
          <select>
            <option>Within 5 km</option>
            <option>Within 10 km</option>
            <option>Within 20 km</option>
          </select>
        </label>
        <label>
          Category
          <select>
            <option>All Categories</option>
            <option>Products</option>
            <option>Services</option>
            <option>Bookings</option>
          </select>
        </label>
      </div>
    </section>
  );
}
