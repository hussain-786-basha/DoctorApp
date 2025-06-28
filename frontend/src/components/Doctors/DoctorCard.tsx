import React from 'react';
import { Star, MapPin, Clock, IndianRupee } from 'lucide-react';
import { Doctor } from '../../types';

interface DoctorCardProps {
  doctor: Doctor;
  onBook: (doctor: Doctor) => void;
}

export function DoctorCard({ doctor, onBook }: DoctorCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">
                {doctor.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">{doctor.name}</h3>
              <p className="text-blue-600 font-medium">{doctor.specialty}</p>
            </div>
          </div>
          <div className="flex items-center space-x-1">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-medium text-gray-700">{doctor.rating}</span>
          </div>
        </div>

        <div className="space-y-3 mb-6">
          <div className="flex items-center space-x-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{doctor.location}</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <Clock className="w-4 h-4" />
            <span className="text-sm">{doctor.experience} years experience</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-600">
            <IndianRupee className="w-4 h-4" />
            <span className="text-sm">₹{doctor.fees} consultation fee</span>
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-6 line-clamp-2">{doctor.about}</p>

        <div className="flex items-center justify-between">
          <div className="text-sm text-gray-500">
            {doctor.education}
          </div>
          <button
            onClick={() => onBook(doctor)}
            className="bg-gradient-to-r from-blue-600 to-teal-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-teal-700 transition-all duration-200 transform hover:scale-105"
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}