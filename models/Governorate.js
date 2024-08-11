const mongoose = require('mongoose');

const governorateSchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: mongoose.Schema.Types.ObjectId, ref: 'City', required: true },
});

const Governorate = mongoose.model('Governorate', governorateSchema);

module.exports = Governorate;
