const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator');
const mongoose_delete = require('mongoose-delete');
const Schema = mongoose.Schema;

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

mongoose.plugin(slug);
Favourite.plugin(mongoose_delete, { 
  deletedAt: true,
  overrideMethods: 'all' 
});

module.exports = mongoose.model('Favourite', Favourite);