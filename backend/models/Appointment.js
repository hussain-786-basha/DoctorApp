// models/Appointment.js
const mongoose = require('mongoose');

const appointmentSchema = new mongoose.Schema({
  patientId: { type: String, required: true },
  doctorId: { type: String, required: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  status: { type: String, enum: ['pending', 'confirmed', 'completed', 'cancelled'], default: 'pending' },
  notes: String,
  documents: [
    {
      id: String,
      name: String,
      type: String,
      size: Number,
      url: String,
      uploadedAt: String,
    }
  ]
});

module.exports = mongoose.model('Appointment', appointmentSchema);
