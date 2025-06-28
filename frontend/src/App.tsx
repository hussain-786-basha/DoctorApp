import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';

import { Header } from './components/Layout/Header';
import { Home } from './components/Home/Home';
import { Login } from './components/Auth/Login';
import { Register } from './components/Auth/Register';
import { DoctorList } from './components/Doctors/DoctorList';
import { Dashboard } from './components/Dashboard/Dashboard';
import AppointmentDetails from './components/Dashboard/AppointmentDetails';

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, user } = useAuth();

  if (!user && localStorage.getItem('token')) {
    return <div className="text-center p-10">Loading...</div>;
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

const AppRoutes = () => (
  <Router>
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/doctors"
          element={
            <PrivateRoute>
              <DoctorList />
            </PrivateRoute>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/appointment-details" element={<AppointmentDetails />} />
      </Routes>
    </div>
  </Router>
);

const App = () => (
  <AuthProvider>
    <AppRoutes />
  </AuthProvider>
);

export default App;
