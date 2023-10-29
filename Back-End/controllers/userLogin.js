const User = require('../models/user'); // Assuming you have a User model

// Controller for handling login
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the user exists in the database
    const user = await User.findOne({ email });

    if (user) {
      // Check the password (you should use a secure password hashing method)
      if (user.password === password) {
        res.json({ success: true, message: 'Login successful' });
      } else {
        res.json({ success: false, message: 'Incorrect password' });
      }
    } else {
      res.json({ success: false, message: 'User not found' });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};

module.exports = {
  login,
};
