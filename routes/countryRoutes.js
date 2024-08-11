const express = require('express');
const router = express.Router();
const {
  createCountry,
  getCountries,
  getCountryById,
  updateCountry,
  deleteCountry,
} = require('../controllers/countryController');

router.route('/').post(createCountry).get(getCountries);
router
  .route('/:id')
  .get(getCountryById)
  .put(updateCountry)
  .delete(deleteCountry);

module.exports = router;
