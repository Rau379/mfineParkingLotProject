// slotController.js
const Slot = require('../models/Slot');

const getSlotsByColor = async (req, res, next) => {
  try {
    const { color, parkingLotId } = req.query;
    if (!['RED', 'GREEN', 'BLUE', 'BLACK', 'WHITE', 'YELLOW', 'ORANGE'].includes(color)) {
      return res.status(400).json({ isSuccess: false, error: { reason: 'Invalid Color' } });
    }
    const slots = await Slot.find({ color, parkingLotId }).select('slotNumber');
    res.json({ isSuccess: true, response: { slots } });
  } catch (error) {
    next(error);
  }
};

module.exports = { getSlotsByColor };
