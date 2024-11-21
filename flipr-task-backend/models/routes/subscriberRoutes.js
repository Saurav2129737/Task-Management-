const express = require('express');
const router = express.Router();
const Subscriber = require('../models/Subscriber');

// Subscribe to newsletter
router.post('/', async (req, res) => {
    const { email } = req.body;
    const subscriber = new Subscriber({ email });
    await subscriber.save();
    res.json(subscriber);
});

// Get all subscribers
router.get('/', async (req, res) => {
    const subscribers = await Subscriber.find();
    res.json(subscribers);
});

module.exports = router;
