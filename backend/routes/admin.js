const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/doctors', adminController.getAllDoctors);
router.put('/approve/:id', adminController.approveDoctor);
router.delete('/reject/:id', adminController.rejectDoctor);

module.exports = router;

// backend/routes/appointments.js
const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

router.get('/doctor/:id', appointmentController.getAppointmentsByDoctor);
router.get('/patient/:id', appointmentController.getAppointmentsByPatient);
router.put('/:id/status', appointmentController.updateAppointmentStatus);

module.exports = router;
