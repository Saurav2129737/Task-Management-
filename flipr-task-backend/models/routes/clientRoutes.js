const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

// Get all clients
router.get('/', async (req, res) => {
    const clients = await Client.find();
    res.json(clients);
});

// Add a client
router.post('/', async (req, res) => {
    const { name, description, designation, image } = req.body;
    const client = new Client({ name, description, designation, image });
    await client.save();
    res.json(client);
});

module.exports = router;
