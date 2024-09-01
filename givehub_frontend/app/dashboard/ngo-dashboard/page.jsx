"use client"
import React, { useState, useEffect } from 'react';
import sampleData from '@/json/sampleData';

const NGODashboard = ({ user }) => {
  const [driveData, setDriveData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
  });

  const [existingDrives, setExistingDrives] = useState([]);
  const [ngoDetails, setNgoDetails] = useState({});
  const [isFormVisible, setIsFormVisible] = useState(false); // State to toggle form visibility

  useEffect(() => {
    if (user && user.email) {
      const ngo = sampleData.ngos.find(ngo => ngo.email === user.email);
      if (ngo) {
        setExistingDrives(ngo.drives || []);
        setNgoDetails(ngo.userDetails || {});
      }
    }
  }, [user]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setDriveData({
      ...driveData,
      [id]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Drive data submitted:', driveData);

    setExistingDrives([...existingDrives, driveData]);

    setDriveData({
      title: '',
      description: '',
      date: '',
      time: '',
    });

    // Optionally hide the form after submission
    setIsFormVisible(false);
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(prev => !prev);
  };

  return (
    <>
      <div className="pt-20 min-h-screen bg-gray-100">
      <div className="flex items-center justify-center ">
      <h2 className="text-3xl text-center font-bold mb-8">NGO Dashboard</h2>
      </div>      <div className="container mx-auto p-6">
          {/* Button to show/hide the form */}
          <button
            onClick={toggleFormVisibility}
            className="bg-orange-600 text-white py-2 px-4 rounded-lg mb-6"
          >
            {isFormVisible ? 'Cancel' : 'Add New Drive'}
          </button>

          {/* Conditionally rendered form */}
          {isFormVisible && (
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 font-medium mb-2">Title</label>
                <input
                  type="text"
                  id="title"
                  value={driveData.title}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter drive title"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
                <textarea
                  id="description"
                  value={driveData.description}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  placeholder="Enter drive description"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Date</label>
                <input
                  type="date"
                  id="date"
                  value={driveData.date}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="time" className="block text-gray-700 font-medium mb-2">Time</label>
                <input
                  type="time"
                  id="time"
                  value={driveData.time}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white py-3 rounded-lg hover:bg-orange-700"
              >
                Submit Drive
              </button>
            </form>
          )}

          <div className="mt-10">
            <h2 className="text-2xl font-bold mb-6">Existing Drives</h2>
            {existingDrives.length > 0 ? (
              <ul className="space-y-4">
                {existingDrives.map((drive, index) => (
                  <li key={index} className="bg-white p-6 rounded-lg shadow-lg">
                    <h3 className="text-xl font-bold mb-2">{drive.title}</h3>
                    <p className="text-gray-700 mb-2">{drive.description}</p>
                    <p className="text-gray-500">Date: {drive.date}</p>
                    <p className="text-gray-500">Time: {drive.time}</p>
                  </li>
                ))}
              </ul>
            ) : (
              <p>No drives available.</p>
            )}
          </div>

          {/* Display NGO user details */}
          {ngoDetails && (
            <div className="mt-10 bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold mb-4">NGO Details</h2>
              <p><strong>Address:</strong> {ngoDetails.address}</p>
              <p><strong>Website:</strong> <a href={`http://${ngoDetails.website}`} className="text-blue-600 hover:underline">{ngoDetails.website}</a></p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NGODashboard;
