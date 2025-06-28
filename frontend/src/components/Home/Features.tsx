import React from 'react';
import { Users, MapPin, CheckCircle, HeadphonesIcon } from 'lucide-react';

export function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose DocBook?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We make healthcare accessible, convenient, and reliable for everyone in Nandyal
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Wide Network of Doctors
                </h3>
                <p className="text-gray-600">
                  Access to specialists across all medical fields including Cardiology, Pediatrics, 
                  Orthopedics, Gynecology, and General Medicine in Nandyal area.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-teal-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Local Healthcare Focus
                </h3>
                <p className="text-gray-600">
                  Specifically designed for Nandyal residents with local doctors who understand 
                  your community's healthcare needs.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Instant Confirmation
                </h3>
                <p className="text-gray-600">
                  Get immediate confirmation of your appointments with automated reminders 
                  and easy rescheduling options.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                <HeadphonesIcon className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  24/7 Support
                </h3>
                <p className="text-gray-600">
                  Our support team is available round the clock to help you with booking, 
                  rescheduling, or any questions you might have.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-500 to-teal-500 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Ready to Get Started?</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span>Create your free account</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span>Browse available doctors</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span>Book your appointment instantly</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4" />
                </div>
                <span>Get quality healthcare</span>
              </div>
            </div>
            <div className="mt-8 text-center">
              <div className="text-3xl font-bold">6+</div>
              <div className="text-white/80">Verified Doctors</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}