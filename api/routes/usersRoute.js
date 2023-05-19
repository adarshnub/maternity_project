const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");

// Sign Up Route
router.post("/register", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      date,
      password,
      confirmPassword,
    } = req.body;

    //check if password and confirm password match
    if (password !== confirmPassword) {
      return res.status(400).json({ message: "Passwords do not match" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({
      $or: [{ phone }, { email }],
    });
    if (existingUser) {
      return res
        .status(409)
        .json({ message: "Phone number or email already exists" });
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
      password: hashedPassword,
    });

    // Save the user in the database
    await newUser.save();

    // Respond with success message
    return res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Failed to create user", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

//   Log In Route
router.post("/login", async (req, res) => {
  try {
    const { identifier, password } = req.body;

    // Find the user by email or phone number
    const user = await User.findOne({
      $or: [{ email: identifier }, { phone: identifier }],
    });
    if (!user) {
      return res.status(401).json({ message: "Invalid email or phone number" });
    }

    // Compare the password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid username or password" });
    }

    // Respond with success message
    return res.status(200).json({ message: "Logged in successfully" });
  } catch (error) {
    console.error("Failed to log in user", error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

module.exports = router;
