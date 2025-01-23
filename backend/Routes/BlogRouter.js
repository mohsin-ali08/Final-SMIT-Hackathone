const express = require('express');
const router = express.Router();
const Blog = require('../Models/blog');

// Create a new blog
router.post('/blogs', async (req, res) => {
    try {
        const { title, content, author } = req.body;
        const newBlog = new Blog({ title, content, author });
        await newBlog.save();
        res.status(201).json({ success: true, message: 'Blog created successfully!', blog: newBlog });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to create blog', error: err.message });
    }
});

// Fetch all blogs
router.get('/blogs', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.status(200).json({ success: true, blogs });
    } catch (err) {
        res.status(500).json({ success: false, message: 'Failed to fetch blogs', error: err.message });
    }
});

module.exports = router;
