const mongoose = require('mongoose');

const peopleSchema = new mongoose.Schema({
  removed: { type: Boolean, default: false },
  enabled: { type: Boolean, default: true },
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String },
  phone: { type: String },
  country: { type: String },
  address: { type: String },
  company: { type: mongoose.Schema.ObjectId, ref: 'Company', autopopulate: { maxDepth: 1 } },
  updated: { type: Date, default: Date.now },
  created: { type: Date, default: Date.now },
});

peopleSchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('People', peopleSchema);
