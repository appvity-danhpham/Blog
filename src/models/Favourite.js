const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const Schema = mongoose.Schema;
mongoose.plugin(slug);

const Favourite = new Schema({
  name: { type: String },
  description: { type: String },
  image: { type: String },
  slug: { type: String, slug: 'name', unique: true },
  videoId: { type: String },
  createdAt: { type: Date, default: Date.now},
  updatedAt: { type: Date, default: Date.now},
}, {
  timestamps: true
});

module.exports = mongoose.model('Favourite', Favourite);