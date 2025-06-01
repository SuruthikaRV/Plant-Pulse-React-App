const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  date: { type: Date, required: true },
  wateringFrequency: { type: String, required: true },
  soilType: { type: String, required: true },
  notes: { type: String }
});

module.exports = mongoose.model('Plant', plantSchema);
