"use client"
import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    acceptTerms: false
  });

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-8">
      {/* Map Section */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-bold text-center mb-6">Locate Us At</h2>
        <div className="bg-gray-200 rounded-lg overflow-hidden h-[500px] relative">
          <iframe
            src="https://maps.google.com/maps?q=Nexus%20Clinic%20Kuala%20Lumpur&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="500"
            style={{ border: 0 }}
            
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="lg:w-1/2">
        <h2 className="text-3xl font-bold text-teal-800 mb-6">Nexus Clinic Kuala Lumpur</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          
          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:border-teal-500"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
          
          <div>
            <textarea
              placeholder="Message"
              
              className="w-full p-3 border border-gray-300 rounded resize-none focus:outline-none focus:border-teal-500"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          <div className="flex items-start gap-2">
            <input
              type="checkbox"
              id="terms"
              className="mt-1"
              checked={formData.acceptTerms}
              onChange={(e) => setFormData({ ...formData, acceptTerms: e.target.checked })}
            />
            <label htmlFor="terms" className="text-sm text-gray-600">
              I am bound by the terms of the Service Agreement and I accept the Privacy Policy
              <span className="text-red-500">*Required Field</span>
            </label>
          </div>

          <div className="border border-gray-300 rounded p-4 bg-gray-50">
            <div className="flex items-center gap-2">
              <input type="checkbox" />
              <span>I`&apos;`m not a robot</span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-teal-800 text-white py-3 rounded hover:bg-teal-700 transition-colors"
          >
            Send message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
