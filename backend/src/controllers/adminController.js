const store = require('./mockStore');

exports.approveVendor = (req, res) => {
  const vendor = store.vendors.find((v) => v.id === req.params.vendorId);
  if (!vendor) return res.status(404).json({ message: 'Vendor not found' });
  vendor.approved = req.body.approved;
  res.json({ message: 'Vendor status updated', vendor });
};

exports.reports = (_req, res) => {
  res.json({
    totalSales: 0,
    topVendors: store.vendors.slice(0, 5),
    mostBookedServices: [],
    openDisputes: [],
  });
};
