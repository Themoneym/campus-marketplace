const store = require('./mockStore');

exports.listProducts = (_req, res) => res.json(store.products);

exports.createProduct = (req, res) => {
  const product = { id: `p${store.products.length + 1}`, ...req.body };
  store.products.push(product);
  res.status(201).json(product);
};
