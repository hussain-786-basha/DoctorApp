// src/pages/AppointmentDetails.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Clock } from 'lucide-react';

const AppointmentDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state || !state.appointment) {
    navigate('/'); // fallback
    return null;
  }

  const { doctorName, date, time, notes, specialty, status } = state.appointment;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-xl w-full">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-700">Appointment Confirmed</h1>

        <div className="space-y-3 text-gray-700">
          <p><span className="font-semibold">Doctor:</span> {doctorName}</p>
          <p><span className="font-semibold">Specialty:</span> {specialty}</p>
          <p className="flex items-center"><Calendar className="w-4 h-4 mr-2" /> {new Date(date).toLocaleDateString()}</p>
          <p className="flex items-center"><Clock className="w-4 h-4 mr-2" /> {time}</p>
          <p><span className="font-semibold">Status:</span> {status}</p>
          {notes && <p><span className="font-semibold">Notes:</span> {notes}</p>}
        </div>
      </div>
    </div>
  );
};

export default AppointmentDetails;
