"use client";
import React, { useState } from 'react';
import axios from 'axios';
import Header from '@/components/Header';

const ORGRegisterForm = () => {
  const [formData, setFormData] = useState({
    orgName: '',
    email: '',
    password: '',
    repeatPassword: '',
    contactPersonName: '',
    contactPersonNumber: '',
    registrationCertificate: null,
  });

  

  const handleChange = (e) => {
    const { id, value, files } = e.target;
    if (id === 'registrationCertificate') {
      setFormData({
        ...formData,
        [id]: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [id]: value,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.orgName || !formData.email || !formData.password || !formData.repeatPassword || !formData.contactPersonName || !formData.contactPersonNumber || !formData.registrationCertificate) {
      alert('Please fill out all required fields.');
      return;
    }

    if (formData.password !== formData.repeatPassword) {
      alert('Passwords do not match.');
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append('orgName', formData.orgName);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('password', formData.password);
    formDataToSend.append('contactPersonName', formData.contactPersonName);
    formDataToSend.append('contactPersonNumber', formData.contactPersonNumber);
    formDataToSend.append('registrationCertificate', formData.registrationCertificate);

    try {
      const response = await axios.post('/api/org-register', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.status === 200) {
        // Handle successful registration
        console.log('Registration successful:', response.data);
        alert('Registration successful!');
      } else {
        // Handle non-successful response
        console.error('Registration failed:', response.data);
        alert('Registration failed.');
      }
    } catch (error) {
      console.error('Error during registration:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <>
      <Header />
      <div className="pt-20 min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-2xl w-full">
          <h2 className="text-2xl font-bold text-orange-600 mb-6 text-center">Register Your Organization</h2>
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Form Fields */}
              <div className="mb-4">
                <label htmlFor="orgName" className="block text-gray-700 font-medium mb-2">Name of Your Organization</label>
                <input
                  type="text"
                  id="orgName"
                  value={formData.orgName}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-600"
                  placeholder="Enter organization name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
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
                <label htmlFor="contactPersonName" className="block text-gray-700 font-medium mb-2">Contact Person Name</label>
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
                <label htmlFor="contactPersonNumber" className="block text-gray-700 font-medium mb-2">Contact Person Number</label>
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
                <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
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
                <label htmlFor="repeatPassword" className="block text-gray-700 font-medium mb-2">Repeat Password</label>
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
                <label htmlFor="registrationCertificate" className="block text-gray-700 font-medium mb-2">Upload Your Organization's Registration Certificate (PDF)</label>
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

export default ORGRegisterForm;
