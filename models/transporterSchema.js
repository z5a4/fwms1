const mongoose = require('mongoose');

const transporterSchema = new mongoose.Schema({
  transporterId: {
    type: String,
    required: true,
    unique: true,
  },
  vehicleNo: {
    type: String,
    required: true,
  },
  vehicleType: {
    type: String,
    required: true,
  },
  driverName: {
    type: String,
    required: true,
  },
  licenseNo: {
    type: String,
    required: true,
  },
  mobileNo: {
    type: String, // Changed to Number
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  rentRate: {
    type: String, // Changed to Number
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Transporter = mongoose.model('Transporter', transporterSchema);

module.exports = Transporter;
