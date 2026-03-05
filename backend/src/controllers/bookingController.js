const store = require('./mockStore');

exports.createBooking = (req, res) => {
  const booking = { id: `b${store.bookings.length + 1}`, status: 'confirmed', ...req.body };
  store.bookings.push(booking);
  res.status(201).json({ booking, message: 'Booking confirmed and receipt queued by email/SMS' });
};

exports.listBookings = (_req, res) => res.json(store.bookings);
