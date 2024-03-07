// ParkingLot.js
const mongoose = require('mongoose');

const parkingLotSchema = new mongoose.Schema({
  capacity: {
    type: Number,
    required: true,
    min: 0,
    max: 2000
  },
  isActive: {
    type: Boolean,
    default: true
  }
});

const ParkingLot = mongoose.model('ParkingLot', parkingLotSchema);

module.exports = ParkingLot;
