const mongoose = require('mongoose')                                             //key and value pair made store hoin


const formData = new mongoose.Schema({

  selected_car: { type: String, required: true },
  pickup_location: { type: String, required: true },
  dropoff_location: { type: String },
  pickup_date: { type: Date, required: true },
  dropoff_date: { type: Date, required: true },
  pickup_time: { type: String, required: true },
  dropoff_time: { type: String, required: true },
  created_at: { type: Date, default: Date.now }

    
},{timestamps:true})

module.exports=mongoose.model('Form',formData); 