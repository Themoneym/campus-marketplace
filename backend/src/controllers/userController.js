const store = require('./mockStore');

exports.register = (req, res) => {
  const user = { id: `u${store.users.length + 1}`, ...req.body };
  store.users.push(user);
  res.status(201).json({ message: 'User registered', user });
};

exports.dashboard = (_req, res) => {
  res.json({
    orders: store.orders,
    bookings: store.bookings,
    paymentHistory: [],
  });
};
