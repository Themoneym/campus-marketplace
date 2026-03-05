const express = require('express');
const controller = require('../controllers/userController');

const router = express.Router();
router.post('/register', controller.register);
router.get('/dashboard', controller.dashboard);

module.exports = router;
