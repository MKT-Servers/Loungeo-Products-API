const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const skuSchema = new Schema({
  style: {type: Schema.Types.ObjectId, ref: 'Style' },
  quantity: { type: Integer },
  size: { type: String },
});

const SKU = mongoose.model('SKU', skuSchema);

module.exports = mongoose.model('SKU', skuSchema );