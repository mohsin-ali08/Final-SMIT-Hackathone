const express = require('express');
const router = express.Router();
const Blog = require('../Models/blog'); // Assuming you have a Blog model
const ensureAuthenticated = require('../Middlewares/Auth');

router.post('/', ensureAuthenticated, async (req, res) => {
    try {
        const { title, content } = req.body;

        if (!title || !content) {
            return res.status(400).json({ message: 'Title and content are required' });
        }

        const newBlog = new Blog({
            title,
            content,
            user: req.user.id, // assuming you have the logged-in user from the token
        });

        await newBlog.save();

        res.status(201).json({ message: 'Blog created successfully', blog: newBlog });
    } catch (err) {
        console.error('Error creating blog:', err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
