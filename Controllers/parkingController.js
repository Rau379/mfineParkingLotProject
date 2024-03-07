// parkingController.js
const Parking = require('../models/Parking');

const parkCar = async (req, res, next) => {
  try {
    const { parkingLotId, registrationNumber, color } = req.body;
    const slotNumber = findNearestAvailableSlot(parkingLotId);
    const parking = new Parking({ parkingLotId, registrationNumber, color, slotNumber });
    const savedParking = await parking.save();
    res.json({ isSuccess: true, response: savedParking });
  } catch (error) {
    next(error);
  }
};

const leaveCar = async (req, res, next) => {
  try {
    const { parkingLotId, registrationNumber } = req.body;
    const parking = await Parking.findOneAndUpdate(
      { parkingLotId, registrationNumber, status: 'PARKED' },
      { status: 'LEFT' },
      { new: true }
    );
    if (!parking) {
      return res.status(404).json({ isSuccess: false, error: { reason: 'Car not found in parking lot' } });
    }
    res.json({ isSuccess: true, response: parking });
  } catch (error) {
    next(error);
  }
};

const getRegistrationNumbersByColor = async (req, res, next) => {
  try {
    const { color, parkingLotId } = req.query;
    const registrations = await Parking.find({ color, parkingLotId }).select('registrationNumber');
    if (registrations.length === 0) {
      return res.status(404).json({ isSuccess: false, error: { reason: `No car found with color ${color}` } });
    }
    res.json({ isSuccess: true, response: { registrations } });
  } catch (error) {
    next(error);
  }
};

module.exports = { parkCar, leaveCar, getRegistrationNumbersByColor };
