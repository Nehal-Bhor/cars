// routes/carRoutes.js

const express = require('express');
const routes = express.Router();
const { addCar, getAllCars } = require('../controller/carController');

// POST /api/cars
routes.post('/addCar', addCar);

// GET /api/cars
routes.get('/getAllCars', getAllCars);

module.exports = routes;
