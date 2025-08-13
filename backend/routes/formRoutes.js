

// routes/formRoutes.js

const express = require('express');
const routes = express.Router();
const { createForm, getAllForms } = require('../controller/formController');

routes.post('/createForm', createForm);       

routes.get('/getAllForms', getAllForms);

module.exports = routes;
