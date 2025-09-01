// const express = require('express');
// const router = express.Router();
// const User = require('../models/User');
// // const bcrypt = require('bcryptjs');
// // const jwt = require('jsonwebtoken');

// // Signup
// router.post('/signup', async (req, res) => {
//   const { name, email, password } = req.body;

//   try {
//     const existingUser = await User.findOne({ email });
//     if (existingUser) return res.status(400).json({ message: 'User already exists' });

//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = new User({ name, email, password: hashedPassword });
//     await user.save();

//     res.status(200).json({ message: 'User registered successfully' });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// // Login
// router.post('/login', async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     const user = await User.findOne({ email });
//     if (!user) return res.status(400).json({ message: 'User not found' });

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

//     const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1d' });

//     res.status(200).json({ message: 'Login successful', token });
//   } catch (err) {
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;








// const express=require('express');
// const { createUser } = require('../controller/userController');
// const { getUsers } = require('../controller/userController');
// const { getUser } = require('../controller/userController');
// const { updateUser } = require('../controller/userController');
// const { deleteUser } = require('../controller/userController');
// const routes=express.Router();

// routes.post('/addUser',createUser);  //routes madun createUser.    postman ----> db

// routes.get('/getUsers',getUsers);  // db ----> to postman

// routes.get('/getUser/:id',getUser); 

// routes.put('/updateUser/:id',updateUser); 

// routes.put('/deleteUser/:id',deleteUser); 


// backend/routes/useRoutes.js

// module.exports=routes;   



const express = require('express');
const routes= express.Router();
const { signup } = require('../controller/userController');
// const { login } = require('../controller/userController');


routes.post('/signup', signup);
// routes.post('/login', login);

module.exports = routes;


