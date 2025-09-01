// controllers/formController.js

const Form = require('../model/Form');

// Create a new form entry
const createForm = async (req, res) => {
  try {

    const form = new Form(req.body);
    await form.save();
    res.status(200).json({ message: 'Form submitted successfully', form });

  } catch (error) {

    res.status(400).json({ error: error.message });

  }
};

// Get all form entries
const getAllForms = async (req, res) => {
  try {

    const forms = await Form.find().sort({ created_at: -1 });
    res.status(200).json(forms);

  } catch (error) {

    res.status(500).json({ error: error.message });

  }
};


module.exports = { createForm , getAllForms };

