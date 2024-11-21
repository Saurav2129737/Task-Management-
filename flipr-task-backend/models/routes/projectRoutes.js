const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

// Get all projects
router.get('/', async (req, res) => {
    const projects = await Project.find();
    res.json(projects);
});

// Add a project
router.post('/', async (req, res) => {
    const { name, description, image } = req.body;
    const project = new Project({ name, description, image });
    await project.save();
    res.json(project);
});

module.exports = router;
