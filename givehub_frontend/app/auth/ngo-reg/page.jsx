"use client"
import Header from '@/components/Header';
import React, { useState } from 'react';

const NGORegisterForm = () => {
  const [formData, setFormData] = useState({
    ngoName: '',
    email: '',
    password: '',
    repeatPassword: '',
    contactPersonName: '',
    contactPersonNumber: '',
    kraPin: '', // New field for KRA PIN
    registrationCertificate: null, // For file upload
  });

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (id === 'registrationCertificate') {
      setFormData({
        ...formData,
        [id]: files[0], // Handle file upload
      });
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, like form validation or API call.
    console.log('Form submitted:', formData);
  };

  return (
    <>
      <Header/>
      
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
          <h2 className="text-2xl font-bold text-orange-600 mb-6 text-center">Register Your NGO</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="mb-4">
                <label htmlFor="ngoName" className="block text-gray-700 font-medium mb-2">
                  Name of your NGO
                </label>
                <input
                  type="text"
                  id="ngoName"
                  value={formData.ngoName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                  placeholder="Enter organization name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                  placeholder="Enter your organization email"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="contactPersonName" className="block text-gray-700 font-medium mb-2">
                  Contact Person Name
                </label>
                <input
                  type="text"
                  id="contactPersonName"
                  value={formData.contactPersonName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                  placeholder="Enter contact person name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="contactPersonNumber" className="block text-gray-700 font-medium mb-2">
                  Contact Person Number
                </label>
                <input
                  type="tel"
                  id="contactPersonNumber"
                  value={formData.contactPersonNumber}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                  placeholder="Enter contact person number"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="kraPin" className="block text-gray-700 font-medium mb-2">
                  KRA PIN
                </label>
                <input
                  type="text"
                  id="kraPin"
                  value={formData.kraPin}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                  placeholder="Enter your KRA PIN"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="repeatPassword" className="block text-gray-700 font-medium mb-2">
                  Repeat Password
                </label>
                <input
                  type="password"
                  id="repeatPassword"
                  value={formData.repeatPassword}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                  placeholder="Repeat your password"
                  required
                />
              </div>
              <div className="mb-6 col-span-1 md:col-span-2">
                <label htmlFor="registrationCertificate" className="block text-gray-700 font-medium mb-2">
                  Upload Your NGO Registration Certificate (PDF)
                </label>
                <input
                  type="file"
                  id="registrationCertificate"
                  onChange={handleChange}
                  accept=".pdf"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700 transition duration-300"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default NGORegisterForm;
