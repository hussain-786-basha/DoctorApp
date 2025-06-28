import { Doctor, Appointment } from '../types';

export const mockDoctors: Doctor[] = [
  {
    id: 'd1',
    email: 'dr.ramesh@nandyal.com',
    name: 'Dr. Ramesh Kumar',
    role: 'doctor',
    specialty: 'Cardiology',
    experience: 15,
    location: 'Nandyal, Andhra Pradesh',
    education: 'MBBS, MD - Cardiology',
    fees: 500,
    rating: 4.8,
    phone: '+91 9876543210',
    about: 'Experienced cardiologist specializing in heart disease prevention and treatment.',
    isApproved: true,
    availability: [
      { day: 'Monday', slots: ['09:00', '10:00', '11:00', '14:00', '15:00'] },
      { day: 'Tuesday', slots: ['09:00', '10:00', '11:00', '14:00', '15:00'] },
      { day: 'Wednesday', slots: ['09:00', '10:00', '11:00'] },
      { day: 'Thursday', slots: ['09:00', '10:00', '11:00', '14:00', '15:00'] },
      { day: 'Friday', slots: ['09:00', '10:00', '11:00', '14:00', '15:00'] },
      { day: 'Saturday', slots: ['09:00', '10:00', '11:00'] }
    ]
  },
  {
    id: 'd2',
    email: 'dr.priya@nandyal.com',
    name: 'Dr. Priya Sharma',
    role: 'doctor',
    specialty: 'Pediatrics',
    experience: 12,
    location: 'Nandyal, Andhra Pradesh',
    education: 'MBBS, MD - Pediatrics',
    fees: 400,
    rating: 4.9,
    phone: '+91 9876543211',
    about: 'Dedicated pediatrician with expertise in child healthcare and development.',
    isApproved: true,
    availability: [
      { day: 'Monday', slots: ['10:00', '11:00', '14:00', '15:00', '16:00'] },
      { day: 'Tuesday', slots: ['10:00', '11:00', '14:00', '15:00', '16:00'] },
      { day: 'Wednesday', slots: ['10:00', '11:00', '14:00', '15:00'] },
      { day: 'Thursday', slots: ['10:00', '11:00', '14:00', '15:00', '16:00'] },
      { day: 'Friday', slots: ['10:00', '11:00', '14:00', '15:00', '16:00'] },
      { day: 'Saturday', slots: ['10:00', '11:00'] }
    ]
  },
  {
    id: 'd3',
    email: 'dr.venkat@nandyal.com',
    name: 'Dr. Venkat Reddy',
    role: 'doctor',
    specialty: 'Orthopedics',
    experience: 18,
    location: 'Nandyal, Andhra Pradesh',
    education: 'MBBS, MS - Orthopedics',
    fees: 600,
    rating: 4.7,
    phone: '+91 9876543212',
    about: 'Expert orthopedic surgeon specializing in joint replacement and sports injuries.',
    isApproved: true,
    availability: [
      { day: 'Monday', slots: ['11:00', '14:00', '15:00', '16:00'] },
      { day: 'Tuesday', slots: ['11:00', '14:00', '15:00', '16:00'] },
      { day: 'Wednesday', slots: ['11:00', '14:00', '15:00'] },
      { day: 'Thursday', slots: ['11:00', '14:00', '15:00', '16:00'] },
      { day: 'Friday', slots: ['11:00', '14:00', '15:00', '16:00'] },
      { day: 'Saturday', slots: ['11:00', '14:00'] }
    ]
  },
  {
    id: 'd4',
    email: 'dr.lakshmi@nandyal.com',
    name: 'Dr. Lakshmi Devi',
    role: 'doctor',
    specialty: 'Gynecology',
    experience: 14,
    location: 'Nandyal, Andhra Pradesh',
    education: 'MBBS, MD - Gynecology',
    fees: 450,
    rating: 4.8,
    phone: '+91 9876543213',
    about: 'Experienced gynecologist providing comprehensive women\'s healthcare services.',
    isApproved: true,
    availability: [
      { day: 'Monday', slots: ['09:00', '10:00', '14:00', '15:00'] },
      { day: 'Tuesday', slots: ['09:00', '10:00', '14:00', '15:00'] },
      { day: 'Wednesday', slots: ['09:00', '10:00', '14:00'] },
      { day: 'Thursday', slots: ['09:00', '10:00', '14:00', '15:00'] },
      { day: 'Friday', slots: ['09:00', '10:00', '14:00', '15:00'] },
      { day: 'Saturday', slots: ['09:00', '10:00'] }
    ]
  },
  {
    id: 'd5',
    email: 'dr.krishna@nandyal.com',
    name: 'Dr. Krishna Murthy',
    role: 'doctor',
    specialty: 'General Medicine',
    experience: 20,
    location: 'Nandyal, Andhra Pradesh',
    education: 'MBBS, MD - Internal Medicine',
    fees: 350,
    rating: 4.6,
    phone: '+91 9876543214',
    about: 'Senior physician with extensive experience in general medicine and internal disorders.',
    isApproved: true,
    availability: [
      { day: 'Monday', slots: ['08:00', '09:00', '10:00', '17:00', '18:00'] },
      { day: 'Tuesday', slots: ['08:00', '09:00', '10:00', '17:00', '18:00'] },
      { day: 'Wednesday', slots: ['08:00', '09:00', '10:00', '17:00'] },
      { day: 'Thursday', slots: ['08:00', '09:00', '10:00', '17:00', '18:00'] },
      { day: 'Friday', slots: ['08:00', '09:00', '10:00', '17:00', '18:00'] },
      { day: 'Saturday', slots: ['08:00', '09:00', '10:00'] }
    ]
  },
  {
    id: 'd6',
    email: 'dr.ravi@nandyal.com',
    name: 'Dr. Ravi Kumar',
    role: 'doctor',
    specialty: 'Dermatology',
    experience: 10,
    location: 'Nandyal, Andhra Pradesh',
    education: 'MBBS, MD - Dermatology',
    fees: 400,
    rating: 4.5,
    phone: '+91 9876543215',
    about: 'Skilled dermatologist specializing in skin conditions and cosmetic treatments.',
    isApproved: true,
    availability: [
      { day: 'Monday', slots: ['10:00', '11:00', '15:00', '16:00'] },
      { day: 'Tuesday', slots: ['10:00', '11:00', '15:00', '16:00'] },
      { day: 'Wednesday', slots: ['10:00', '11:00', '15:00'] },
      { day: 'Thursday', slots: ['10:00', '11:00', '15:00', '16:00'] },
      { day: 'Friday', slots: ['10:00', '11:00', '15:00', '16:00'] },
      { day: 'Saturday', slots: ['10:00', '11:00'] }
    ]
  }
];

export const mockAppointments: Appointment[] = [
  {
    id: 'a1',
    patientId: '2',
    doctorId: 'd1',
    date: '2025-01-15',
    time: '10:00',
    status: 'confirmed',
    notes: 'Regular checkup for blood pressure monitoring'
  },
  {
    id: 'a2',
    patientId: '2',
    doctorId: 'd2',
    date: '2025-01-18',
    time: '14:00',
    status: 'pending',
    notes: 'Consultation for child vaccination'
  }
];