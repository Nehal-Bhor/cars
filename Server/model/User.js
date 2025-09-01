// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//   name: String,
//   email: { type: String, required: true, unique: true },
//   password: { type: String, required: true },
// });

// module.exports = mongoose.model('User', UserSchema);


// const mongoose = require('mongoose')                                             //key and value pair made store hoin


// const userData = new mongoose.Schema({
//     email: { type: String, required: true },
//     password: { type: String, required: true },
// },{timestamps:true})

// module.exports=mongoose.model('User',userData);         //model class made user table made schema pass kelai




const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  surname: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true }
});

module.exports = mongoose.model('User', userSchema);


