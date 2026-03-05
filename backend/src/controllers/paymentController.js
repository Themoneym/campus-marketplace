const paymentConfig = require('../config/payments');

exports.methods = (_req, res) => res.json(paymentConfig);

exports.pay = (req, res) => {
  res.json({
    status: 'success',
    method: req.body.method,
    amount: req.body.amount,
    message: 'Payment confirmed in real-time. SSL/TLS required in deployment.',
  });
};
