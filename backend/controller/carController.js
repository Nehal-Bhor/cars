// controllers/carController.js

const Car = require('../model/Car');

// Add a new car
const addCar = async (req, res) => {
  try {

    const car = new Car(req.body);
    await car.save();
    res.status(200).json({ message: 'Car added successfully', car });

  } catch (error) {

    res.status(400).json({ error: error.message });

  }
};

// Get all cars
const getAllCars = async (req, res) => {
  try {

    const cars = await Car.find();
    res.status(200).json(cars); 

  } catch (error) {

    res.status(500).json({ error: error.message });

  }
};

module.exports = { addCar , getAllCars };
