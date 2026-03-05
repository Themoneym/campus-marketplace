import { services } from '../data/mockData';

export default function BookingPage() {
  const service = services[0];

  return (
    <section className="stack">
      <h2>Booking Page</h2>
      <div className="card">
        <h3>{service.name}</h3>
        <p>{service.description}</p>
        <p>Duration: {service.duration}</p>
        <p>Price: GHS {service.price}</p>
        <h4>Available slots</h4>
        <ul>{service.slots.map((slot) => <li key={slot}>{new Date(slot).toLocaleString()}</li>)}</ul>
        <button>Book Now</button>
      </div>
    </section>
  );
}
