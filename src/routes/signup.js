const express = require('express');
const router = express.Router();

const { signUp } = require('../db/db');

router.post('/', (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;
    signUp(email, password);

    res.send('signup page');
});

module.exports = router;