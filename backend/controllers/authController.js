const User = require('../models/User');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email }).select('+password');
    if (!user) return res.status(401).json({ message: 'Invalid email or password' });

    const isMatch = await user.comparePassword(password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid email or password' });

    const token = jwt.sign({ id: user._id, userType: user.userType }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });

    const userData = {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.userType,
      isApproved: user.isApproved || false,
    };

    res.json({ token, user: userData });
  } catch (error) {
    res.status(500).json({ message: 'Login failed' });
  }
};

const register = async (req, res) => {
  const { name, email, password, phone, role } = req.body;

  try {
    const existing = await User.findOne({ email });
    if (existing) return res.status(400).json({ message: 'Email already exists' });

    const user = await User.create({
      name,
      email,
      password,
      phone,
      userType: role,
    });

    const token = jwt.sign({ id: user._id, userType: user.userType }, process.env.JWT_SECRET, {
      expiresIn: '1d'
    });

    const userData = {
      id: user._id,
      name: user.name,
      email: user.email,
      phone: user.phone,
      role: user.userType,
      isApproved: user.isApproved || false,
    };

    res.status(201).json({ token, user: userData });
  } catch (err) {
    res.status(500).json({ message: 'Registration failed' });
  }
};

module.exports = { login, register };
