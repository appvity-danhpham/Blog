const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Favourite = new Schema({
  name: { type: String },
  description: { type: String },
  image: { type: String },
  createdAt: { type: Date, default: Date.now},
  updatedAt: { type: Date, default: Date.now},
});

module.exports = mongoose.model('Favourite', Favourite);