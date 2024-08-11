const express = require('express');
const router = express.Router();
const {
  createCity,
  getCities,
  getCityById,
  updateCity,
  deleteCity,
} = require('../controllers/cityController');

// Route to create a new city and get all cities
router.route('/')
  .post(createCity) // Create a new city
  .get(getCities);  // Get all cities

// Route to get, update, and delete a specific city by ID
router.route('/:id')
  .get(getCityById)    // Get city by ID
  .put(updateCity)     // Update city by ID
  .delete(deleteCity); // Delete city by ID

module.exports = router;
