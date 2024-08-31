"use client"
import React, { useState } from 'react';
import sampleData from "@/json/sampleData";

const OrganizationDashboard = () => {
  const [selectedDrive, setSelectedDrive] = useState(null);
  const [formData, setFormData] = useState({
    pickupLocation: '',
    itemType: '',
    amountOrUnit: '',
    contactPersonName: '',
    contactPersonNumber: '',
    additionalInfo: ''
  });

  // Extracting drives from the sampleData
  const drives = sampleData.ngos.flatMap(ngo => ngo.drives);

  const handleDonateClick = (drive) => {
    setSelectedDrive(drive);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Donation data submitted:', formData);
    // Handle donation form submission here
  };

  return (
    <>
      <div className="pt-20 min-h-screen bg-gray-100">
        <div className="container mx-auto p-6">
          <h2 className="text-2xl text-center font-bold mb-6">Available Drives</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {drives.length > 0 ? (
              <ul>
                {drives.map((drive) => (
                  <li key={drive.id} className="mb-4 border-b border-gray-300 pb-4">
                    <h3 className="text-xl font-semibold">{drive.title}</h3>
                    <p>{drive.description}</p>
                    <p><strong>Date:</strong> {drive.date}</p>
                    <p><strong>Location:</strong> {drive.location}</p>
                    <p><strong>Contact:</strong> {drive.contact.name}, {drive.contact.email}, {drive.contact.phone}</p>
                    <p><strong>NGO:</strong> {sampleData.ngos.find(ngo => ngo.drives.some(d => d.id === drive.id)).name}</p>
                    <button 
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg mt-2"
                      onClick={() => handleDonateClick(drive)}
                    >
                      Donate Here
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No drives available.</p>
            )}
          </div>
        </div>

        {/* Donation Form */}
        {selectedDrive && (
          <div className="container mx-auto p-6 mt-10">
            <h2 className="text-2xl text-center font-bold mb-6">Donation Form</h2>
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="pickupLocation" className="block text-gray-700 font-medium mb-2">Pick-Up Location</label>
                <input
                  type="text"
                  id="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter pick-up location"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="itemType" className="block text-gray-700 font-medium mb-2">Type of Items</label>
                <select
                  id="itemType"
                  value={formData.itemType}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                >
                  <option value="">Select item type</option>
                  <option value="Food">Food</option>
                  <option value="Clothing">Clothing</option>
                  <option value="Furniture">Furniture</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label htmlFor="amountOrUnit" className="block text-gray-700 font-medium mb-2">Amount/Unit</label>
                <input
                  type="text"
                  id="amountOrUnit"
                  value={formData.amountOrUnit}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter amount or unit"
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
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter contact person name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="contactPersonNumber" className="block text-gray-700 font-medium mb-2">Contact Person Number</label>
                <input
                  type="text"
                  id="contactPersonNumber"
                  value={formData.contactPersonNumber}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter contact person number"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="additionalInfo" className="block text-gray-700 font-medium mb-2">Additional Information</label>
                <textarea
                  id="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Any additional information"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
              >
                Submit Donation
              </button>
            </form>
          </div>
        )}
      </div>
    </>
  );
};

export default OrganizationDashboard;
