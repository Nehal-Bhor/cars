// backend/controller/userController.js

const User = require('../model/User');

// SIGNUP controller
// const signup = async (req, res) => {
//   const {  name,surname,email, password } = req.body;

//   try {
//     // Check if user already exists
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: 'User already exists' });

//     // Create new user
//     const newUser = new User({  email, password });
//     await newUser.save();

//     res.status(200).json({ message: 'Signup successful' });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };


// SIGNUP controller
const signup = async (req, res) => {
  const { name, surname, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ message: 'User already exists' });

    const newUser = new User({ name, surname, email, password });
    await newUser.save();

    res.status(200).json({ message: 'Signup successful' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};









// // LOGIN controller
// const login = async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });

//     if (!user || user.password !== password) {
//       return res.status(400).json({ message: 'Invalid credentials' });
//     }

//     res.status(200).json({ message: 'Login successful', user });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };

module.exports = { signup  };