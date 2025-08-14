const Log = require('../model/log');


// LOGIN controller
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const log = await Log.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = { login };