const express = require('express');
const controller = require('../controllers/adminController');

const router = express.Router();
router.patch('/vendors/:vendorId/approval', controller.approveVendor);
router.get('/reports', controller.reports);

module.exports = router;
