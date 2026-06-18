const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  removed: { type: Boolean, default: false },
  enabled: { type: Boolean, default: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String },
  company: { type: String },
  jobTitle: { type: String },
  address: { type: String },
  country: { type: String },
  status: {
    type: String,
    enum: ['new', 'reached', 'interested', 'not interested'],
    default: 'new',
  },
  notes: { type: String },
  source: { type: String },
  updated: { type: Date, default: Date.now },
  created: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Lead', leadSchema);
