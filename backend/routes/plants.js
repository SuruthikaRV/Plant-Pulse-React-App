const express = require('express');
const router = express.Router();
const Plant = require('../models/Plant');

// Create a new plant
router.post('/', async (req, res) => {
  try {
    const plant = new Plant(req.body);
    await plant.save();
    res.status(201).json(plant);
  } catch (error) {
    res.status(500).json({ message: 'Error creating plant', error });
  }
});

// Get all plants
router.get('/', async (req, res) => {
  try {
    const plants = await Plant.find();
    res.status(200).json(plants);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching plants', error });
  }
});

// Update a plant by ID
router.put('/:id', async (req, res) => {
  try {
    const updatedPlant = await Plant.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json(updatedPlant);
  } catch (error) {
    res.status(500).json({ message: 'Error updating plant', error });
  }
});

// Delete a plant by ID
router.delete('/:id', async (req, res) => {
  try {
    await Plant.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: 'Error deleting plant', error });
  }
});

module.exports = router;
