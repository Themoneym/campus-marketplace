const store = require('./mockStore');

exports.registerVendor = (req, res) => {
  const vendor = { id: `v${store.vendors.length + 1}`, approved: false, ...req.body };
  store.vendors.push(vendor);
  res.status(201).json({ message: 'Vendor submitted for approval', vendor });
};

exports.listVendors = (_req, res) => res.json(store.vendors);

exports.vendorDashboard = (req, res) => {
  const vendor = store.vendors.find((v) => v.id === req.params.vendorId);
  if (!vendor) return res.status(404).json({ message: 'Vendor not found' });
  res.json({ vendor, products: store.products.filter((p) => p.vendorId === vendor.id), bookings: [] });
};
