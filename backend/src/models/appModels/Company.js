const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  removed: { type: Boolean, default: false },
  enabled: { type: Boolean, default: true },
  name: { type: String, required: true },
  contact: { type: mongoose.Schema.ObjectId, ref: 'People', autopopulate: { maxDepth: 1 } },
  country: { type: String },
  phone: { type: String },
  email: { type: String },
  website: { type: String },
  updated: { type: Date, default: Date.now },
  created: { type: Date, default: Date.now },
});

companySchema.plugin(require('mongoose-autopopulate'));
module.exports = mongoose.model('Company', companySchema);
