const express = require('express');
const router = express.Router();
const { getDashboardStats } = require('../controllers/CountController');

router.get('/admin/dashboard-stats', getDashboardStats);

module.exports = router;
