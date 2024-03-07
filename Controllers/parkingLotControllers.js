// parkingLotController.js
const ParkingLot = require('../models/ParkingLot');

const createParkingLot = async (req, res, next) => {
  try {
    const { capacity } = req.body;
    const parkingLot = new ParkingLot({ capacity });
    const savedParkingLot = await parkingLot.save();
    res.json({ isSuccess: true, response: savedParkingLot });
  } catch (error) {
    next(error);
  }
};

module.exports = { createParkingLot };
