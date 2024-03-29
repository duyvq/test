const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')

mongoose.plugin(slug)

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, require: true, },
    description: { type: String, maxLength: 600 },
    image: { type: String, },
    slug: { type: String, slug: 'name', unique: true },
    videoId: { type: String, require: true, },
    level: { type: String, },
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now},
}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);