const express = require('express');
const router = express.Router();
const User = require("../models/User");
const bcrypt = require('bcrypt');


// Sign Up Route
router.post('/register', async (req, res) => {
    try {
      const { firstName, lastName, email, phone, date, password, confirmPassword } = req.body;
  
      // Check if user already exists
      const existingUser = await User.findOne({ $or: [{ firstName }, { email }] });
      if (existingUser) {
        return res.status(409).json({ message: 'Username or email already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Create a new user object
      const newUser = new User({
        firstName,
        lastName,
        date,
        email,
        phone,
        confirmPassword,
        password: hashedPassword
      });
  
      // Save the user in the database
      await newUser.save();
  
      // Respond with success message
      return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      console.error('Failed to create user', error);
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  });
  
//   Log In Route
 


  module.exports = router;