const express = require('express');

const router = express.Router();

// Define your routes here
router.post('/', (req, res) => {
    res.send('Hello, World!');
});

module.exports = router;