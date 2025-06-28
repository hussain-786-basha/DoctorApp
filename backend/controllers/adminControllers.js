const User = require('../models/User');

exports.getAllDoctors = async (req, res) => {
  try {
    const doctors = await User.find({ role: 'doctor' });
    res.json(doctors);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.approveDoctor = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, { isApproved: true });
    res.json({ message: 'Doctor approved' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

exports.rejectDoctor = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'Doctor rejected and removed' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
