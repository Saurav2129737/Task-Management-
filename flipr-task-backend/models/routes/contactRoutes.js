const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

// Submit a contact form
router.post('/', async (req, res) => {
    const { fullName, email, mobile, city } = req.body;
    const contact = new Contact({ fullName, email, mobile, city });
    await contact.save();
    res.json(contact);
});

// Get all contact form submissions
router.get('/', async (req, res) => {
    const contacts = await Contact.find();
    res.json(contacts);
});

module.exports = router;
