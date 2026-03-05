const express = require('express');
const controller = require('../controllers/paymentController');

const router = express.Router();
router.get('/methods', controller.methods);
router.post('/pay', controller.pay);

module.exports = router;
