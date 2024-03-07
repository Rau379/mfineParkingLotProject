// Parking.js
const mongoose = require('mongoose');

const parkingSchema = new mongoose.Schema({
  parkingLotId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ParkingLot',
    required: true
  },
  registrationNumber: {
    type: String,
    required: true
  },
  color: {
    type: String,
    enum: ['RED', 'GREEN', 'BLUE', 'BLACK', 'WHITE', 'YELLOW', 'ORANGE'],
    required: true
  },
  slotNumber: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['PARKED', 'LEFT'],
    default: 'PARKED'
  }
});

const Parking = mongoose.model('Parking', parkingSchema);

module.exports = Parking;
