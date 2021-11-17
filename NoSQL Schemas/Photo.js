const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;
const Schema = mongoose.Schema;

const photoSchema = new Schema({
  style: {type: Schema.Types.ObjectId, ref: 'Style' },
  thumbnail_url: { type: String },
  url: { type: String }
});

const Photo = mongoose.model('Photo', photoSchema);

module.exports = mongoose.model('Photo', photoSchema );