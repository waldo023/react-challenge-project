const express = require('express');
const Order = require('../models/order.model');

const router = express.Router();

router.get('/test', (req, res) => {
  console.log('Test endpoint hit!');
  res.json({ success: true });
});

module.exports = router;
