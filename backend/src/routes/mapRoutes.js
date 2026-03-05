const express = require('express');
const controller = require('../controllers/mapController');

const router = express.Router();
router.get('/nearby-vendors', controller.nearbyVendors);

module.exports = router;
