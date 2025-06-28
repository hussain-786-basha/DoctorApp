import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Doctor } from '../../types';

interface BookingModalProps {
  doctor: Doctor;
  onClose: () => void;
  refreshAppointments: () => void;
}

export function BookingModal({ doctor, onClose, refreshAppointments }: BookingModalProps) {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [notes, setNotes] = useState('');
  const [loading, setLoading] = useState(false);

  const handleBook = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!date || !time) return;

    setLoading(true);
    try {
      await axios.post('https://doctorappui.onrender.com/api/appointments', {
        doctorId: doctor.id,
        patientId: user?.id,
        date,
        time,
        notes,
        status: 'pending',
      });

      refreshAppointments();
      onClose();
      navigate('/dashboard');
    } catch (error) {
      console.error('Booking failed', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl max-w-md w-full p-6">
        <h2 className="text-xl font-semibold mb-4">Book Appointment</h2>
        <form onSubmit={handleBook} className="space-y-4">
          <div>
            <label className="block mb-1">Select Date</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Select Time</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Notes (Optional)</label>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              className="w-full border rounded p-2"
              rows={3}
            />
          </div>
          <div className="flex space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 border border-gray-300 rounded p-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="w-1/2 bg-blue-600 text-white rounded p-2 hover:bg-blue-700"
            >
              {loading ? 'Booking...' : 'Book'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
