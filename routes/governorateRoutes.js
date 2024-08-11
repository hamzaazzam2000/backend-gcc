const express = require('express');
const router = express.Router();
const {
  createGovernorate,
  getGovernorates,
  getGovernorateById,
  updateGovernorate,
  deleteGovernorate,
} = require('../controllers/governorateController');

// Route to create a new governorate and get all governorates
router.route('/')
  .post(createGovernorate)  // Create a new governorate
  .get(getGovernorates);    // Get all governorates

// Route to get, update, and delete a specific governorate by ID
router.route('/:id')
  .get(getGovernorateById)    // Get governorate by ID
  .put(updateGovernorate)     // Update governorate by ID
  .delete(deleteGovernorate); // Delete governorate by ID

module.exports = router;
