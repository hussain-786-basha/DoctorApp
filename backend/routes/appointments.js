const express = require('express');
const router = express.Router();
const {
  getAppointmentsByPatient,
  createAppointment,
  deleteAppointment,
} = require('../controllers/appointmentController');

router.get('/patient/:id', getAppointmentsByPatient);
router.post('/', createAppointment);
router.delete('/:id', deleteAppointment);

module.exports = router;
