

const express = require('express');
const routes= express.Router();
// const { signup } = require('../controller/userController');
const { login } = require('../controller/logController');

console.log('🔍 login handler:', typeof login);
// routes.post('/signup', signup);
routes.post('/login', login);

module.exports = routes;