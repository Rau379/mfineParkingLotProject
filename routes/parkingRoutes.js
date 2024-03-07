// parkingRoutes.js
const express = require('express');
const router = express.Router();
const { parkCar, leaveCar, getRegistrationNumbersByColor } = require('../Controllers/parkingController');

router.post('/api/Parkings', parkCar);
router.delete('/api/Parkings', leaveCar);
router.get('/api/Parkings', getRegistrationNumbersByColor);

module.exports = router;
