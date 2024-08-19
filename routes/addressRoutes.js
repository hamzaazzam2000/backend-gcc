// routes/addresses.js
const express = require('express');
const router = express.Router();
const Address = require('../models/Address'); // تأكد من المسار الصحيح

// إضافة عنوان جديد
router.post('/add', async (req, res) => {
  try {
    const { street, city, stateId, postalCode, phone } = req.body;

    // التحقق من أن جميع البيانات موجودة
    if (!street || !city || !stateId || !postalCode || !phone) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const newAddress = new Address({
      street,
      city,
      state: stateId,
      postalCode,
      phone
    });

    const savedAddress = await newAddress.save();
    res.status(201).json(savedAddress);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
