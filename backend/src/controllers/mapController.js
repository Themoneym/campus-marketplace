const store = require('./mockStore');
const { haversineKm } = require('../utils/geo');

exports.nearbyVendors = (req, res) => {
  const lat = Number(req.query.lat);
  const lng = Number(req.query.lng);
  const radiusKm = Number(req.query.radiusKm || 5);
  const category = req.query.category;

  if (Number.isNaN(lat) || Number.isNaN(lng)) {
    return res.status(400).json({ message: 'lat and lng query parameters are required' });
  }

  const customer = { lat, lng };
  const result = store.vendors
    .filter((v) => (!category ? true : v.category === category))
    .map((vendor) => ({ ...vendor, distanceKm: Number(haversineKm(customer, vendor.location).toFixed(2)) }))
    .filter((vendor) => vendor.distanceKm <= radiusKm);

  res.json({ center: customer, radiusKm, vendors: result });
};
