const express = require('express');
const controller = require('../controllers/vendorController');

const router = express.Router();
router.post('/register', controller.registerVendor);
router.get('/', controller.listVendors);
router.get('/:vendorId/dashboard', controller.vendorDashboard);

module.exports = router;
