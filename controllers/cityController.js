const City = require('../models/City');
const asyncHandler = require('express-async-handler');

// Create a new city
const createCity = asyncHandler(async (req, res) => {
  const { name, country } = req.body;

  const city = await City.create({ name, country });

  res.status(201).json(city);
});

// Get all cities
const getCities = asyncHandler(async (req, res) => {
  const cities = await City.find().populate('country', 'name code');
  res.json(cities);
});

// Get a single city
const getCityById = asyncHandler(async (req, res) => {
  const city = await City.findById(req.params.id).populate('country', 'name code');
  
  if (city) {
    res.json(city);
  } else {
    res.status(404);
    throw new Error('City not found');
  }
});

// Update a city
const updateCity = asyncHandler(async (req, res) => {
  const { name, country } = req.body;

  const city = await City.findById(req.params.id);

  if (city) {
    city.name = name || city.name;
    city.country = country || city.country;

    const updatedCity = await city.save();
    res.json(updatedCity);
  } else {
    res.status(404);
    throw new Error('City not found');
  }
});

// Delete a city
const deleteCity = asyncHandler(async (req, res) => {
  const city = await City.findById(req.params.id);

  if (city) {
    await city.remove();
    res.json({ message: 'City removed' });
  } else {
    res.status(404);
    throw new Error('City not found');
  }
});

module.exports = {
  createCity,
  getCities,
  getCityById,
  updateCity,
  deleteCity,
};
