export interface User {
  id: string;
  email: string;
  name: string;
  role: 'patient' | 'doctor' | 'admin';
  phone?: string;
  avatar?: string;
  isApproved?: boolean;
}

export interface Doctor extends User {
  specialty: string;
  experience: number;
  location: string;
  education: string;
  fees: number;
  rating: number;
  availability: TimeSlot[];
  about: string;
}

export interface Patient extends User {
  dateOfBirth?: string;
  gender?: string;
  address?: string;
  emergencyContact?: string;
}

export interface MedicalDocument {
  id: string;
  name: string;
  type: string;
  size: number;
  url: string;
  uploadedAt: string;
}

export interface Appointment {
  id: string;
  patientId: string;
  doctorId: string;
  date: string;
  time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  notes?: string;
  documents?: MedicalDocument[];
}

export interface TimeSlot {
  day: string;
  slots: string[];
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (userData: any) => Promise<boolean>;
  logout: () => void;
}