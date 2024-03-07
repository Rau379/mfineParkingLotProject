// slotRoutes.js
const express = require('express');
const router = express.Router();
const { getSlotsByColor } = require('../Controllers/slotController');

router.get('/api/Slots', getSlotsByColor);

module.exports = router;
