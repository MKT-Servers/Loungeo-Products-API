const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const Photo = require('./Photo');
const SKU = require('./SKU');

const styleSchema = new Schema({
  product: {type: Schema.Types.ObjectId, ref: 'Product' },
  name: { type: String },
  original_price: { type: String },
  sale_price: { type: String },
  default?: { type: Boolean },
  photos: [{ type: Schema.Types.ObjectId, ref: 'Photo' }],
  skus: [{ type: Schema.Types.ObjectId, ref: 'SKU' }]
});

const Style = mongoose.model('Style', styleSchema);
Photo.find();
SKU.find();
module.exports = mongoose.model('Style', styleSchema );