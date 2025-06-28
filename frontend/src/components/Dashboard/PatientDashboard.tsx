import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../../context/AuthContext';
import { Appointment, Doctor } from '../../types';
import { BookingModal } from '../Doctors/BookingModal';
import { mockDoctors } from '../../data/mockData';

export function PatientDashboard() {
  const { user } = useAuth();
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [showModal, setShowModal] = useState(false);

  const fetchAppointments = async () => {
    try {
      const token = localStorage.getItem('token');
      const res = await axios.get(
        `http://localhost:5000/api/appointments/patient/${user?.id}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setAppointments(res.data);
    } catch (error) {
      console.error('Failed to fetch appointments', error);
    }
  };

  const deleteAppointment = async (id: string) => {
    try {
      const token = localStorage.getItem('token');
      await axios.delete(`http://localhost:5000/api/appointments/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      fetchAppointments();
    } catch (error) {
      console.error('Failed to delete appointment', error);
    }
  };

  useEffect(() => {
    if (user?.id) fetchAppointments();
  }, [user?.id]);

  const openBookingModal = (doctor: Doctor) => {
    setSelectedDoctor(doctor);
    setShowModal(true);
  };

  const closeBookingModal = () => {
    setShowModal(false);
    setSelectedDoctor(null);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user?.name}</h1>
      <button
        onClick={() => openBookingModal(mockDoctors[0])}
        className="bg-blue-600 text-white px-4 py-2 rounded mb-6"
      >
        Book New Appointment
      </button>

      <h2 className="text-xl font-semibold mb-2">Your Appointments</h2>
      {appointments.length === 0 ? (
        <p>No appointments found</p>
      ) : (
        <ul className="space-y-2">
          {appointments.map((app) => (
            <li key={app.id} className="border p-4 rounded">
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-medium">
                    Doctor: {mockDoctors.find(d => d.id === app.doctorId)?.name || 'Unknown'}
                  </p>
                  <p>{app.date} at {app.time}</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-sm bg-gray-100 px-2 py-1 rounded">{app.status}</span>
                  <button
                    onClick={() => deleteAppointment(app.id)}
                    className="text-red-600 hover:underline text-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
              {app.notes && <p className="text-sm mt-1 text-gray-500">{app.notes}</p>}
            </li>
          ))}
        </ul>
      )}

      {showModal && selectedDoctor && (
        <BookingModal
          doctor={selectedDoctor}
          onClose={closeBookingModal}
          refreshAppointments={fetchAppointments}
        />
      )}
    </div>
  );
}
