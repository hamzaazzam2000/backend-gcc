const Country = require('../models/Country');
const asyncHandler = require('express-async-handler');

// Create a new country
const createCountry = asyncHandler(async (req, res) => {
  const { name, code } = req.body;

  const country = await Country.create({ name, code });

  res.status(201).json(country);
});

// Get all countries
const getCountries = asyncHandler(async (req, res) => {
  const countries = await Country.find();
  res.json(countries);
});

// Get a single country
const getCountryById = asyncHandler(async (req, res) => {
  const country = await Country.findById(req.params.id);
  if (country) {
    res.json(country);
  } else {
    res.status(404);
    throw new Error('Country not found');
  }
});

// Update a country
const updateCountry = asyncHandler(async (req, res) => {
  const { name, code } = req.body;

  const country = await Country.findById(req.params.id);

  if (country) {
    country.name = name || country.name;
    country.code = code || country.code;

    const updatedCountry = await country.save();
    res.json(updatedCountry);
  } else {
    res.status(404);
    throw new Error('Country not found');
  }
});

// Delete a country
const deleteCountry = asyncHandler(async (req, res) => {
  const country = await Country.findById(req.params.id);

  if (country) {
    await country.remove();
    res.json({ message: 'Country removed' });
  } else {
    res.status(404);
    throw new Error('Country not found');
  }
});

module.exports = {
  createCountry,
  getCountries,
  getCountryById,
  updateCountry,
  deleteCountry,
};
