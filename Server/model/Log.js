const mongoose = require('mongoose')                                             //key and value pair made store hoin


const logData = new mongoose.Schema({
    email: { type: String, required: true },
    password: { type: String, required: true },
},{timestamps:true})

module.exports=mongoose.model('Log',logData);   