const express = require('express');
const authenticate = require('../Middlewares/authenticate');
const router = express.Router();

// Admin-only route
router.get('/admin-dashboard', authenticate, (req, res) => {
    res.json({ message: 'Welcome to the admin dashboard' });
});

module.exports = router;
