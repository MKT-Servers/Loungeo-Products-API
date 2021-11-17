const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;
const Style = require('./Style');

const productSchema = new Schema({
  id: { type: Number },
  name: { type: String },
  slogan: { type: String },
  description: { type: String },
  default_price: { type: String },
  category: { type: String },
  styles: [{ type: Schema.Types.ObjectId, ref: 'Style' }]
});

const Product = mongoose.model('Product', productSchema);
Style.find.();

// module.exports = Product;