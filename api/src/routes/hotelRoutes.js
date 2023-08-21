// src/routes/hotelRoutes.js

const express = require('express');
const router = express.Router();
const hotelController = require('../controllers/hotelController');

router.get('/hotels', hotelController.getAllHotels);
router.get('/hotels/:stars', hotelController.getHotelsByStars);

module.exports = router;
