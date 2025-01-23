const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    author: { type: String, required: true }, // Save logged-in user's name or ID
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Blog', blogSchema);
