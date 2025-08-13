// models/Car.js

const mongoose = require('mongoose');

const carSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },        // e.g., "Fortuner"
  type: { type: String },                                       // e.g., "SUV", "Sedan"                                     // e.g., 7
  fuel_type: { type: String },                                  // e.g., "Diesel", "Petrol"
  transmission: { type: String },                               // e.g., "Automatic"
  price_per_hour: { type: Number },                              // Optional: rental price
  available: { type: Boolean, default: true },                  // true if available
  image_url: { type: String },                                  // Optional: image for frontend
  created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Car', carSchema);

//  "image_url":"https://images.app.goo.gl/gT3ZSkMAjwQRuoT69"  