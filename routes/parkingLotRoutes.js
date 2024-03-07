// parkingLotRoutes.js
const express = require('express');
const router = express.Router();
const { createParkingLot } = require('../Controllers/parkingLotControllers');

router.post('/api/ParkingLots', createParkingLot);

module.exports = router;
