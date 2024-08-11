const Governorate = require('../models/Governorate');
const asyncHandler = require('express-async-handler');

// Create a new governorate
const createGovernorate = asyncHandler(async (req, res) => {
  const { name, city } = req.body;

  const governorate = await Governorate.create({ name, city });

  res.status(201).json(governorate);
});

// Get all governorates
const getGovernorates = asyncHandler(async (req, res) => {
  const governorates = await Governorate.find().populate('city', 'name');
  res.json(governorates);
});

// Get a single governorate
const getGovernorateById = asyncHandler(async (req, res) => {
  const governorate = await Governorate.findById(req.params.id).populate('city', 'name');

  if (governorate) {
    res.json(governorate);
  } else {
    res.status(404);
    throw new Error('Governorate not found');
  }
});

// Update a governorate
const updateGovernorate = asyncHandler(async (req, res) => {
  const { name, city } = req.body;

  const governorate = await Governorate.findById(req.params.id);

  if (governorate) {
    governorate.name = name || governorate.name;
    governorate.city = city || governorate.city;

    const updatedGovernorate = await governorate.save();
    res.json(updatedGovernorate);
  } else {
    res.status(404);
    throw new Error('Governorate not found');
  }
});

// Delete a governorate
const deleteGovernorate = asyncHandler(async (req, res) => {
  const governorate = await Governorate.findById(req.params.id);

  if (governorate) {
    await governorate.remove();
    res.json({ message: 'Governorate removed' });
  } else {
    res.status(404);
    throw new Error('Governorate not found');
  }
});

module.exports = {
  createGovernorate,
  getGovernorates,
  getGovernorateById,
  updateGovernorate,
  deleteGovernorate,
};
