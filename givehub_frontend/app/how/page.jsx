// pages/how-it-works.js
import React from 'react';
import Header from '@/components/Header';

const HowItWorks = () => {
  return (
    <>
      <Header />
      <div className="pt-20 min-h-screen bg-gray-100">
        <div className="container mx-auto px-6">
          <h1 className="text-sm font-bold text-center mb-8">How Give Hub Works</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Organization Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">For Organizations</h2>
              <p className="text-gray-700 mb-4">
                As an organization, you can browse through various drives initiated by NGOs. To make a difference, follow these simple steps:
              </p>
              <ol className="list-decimal pl-6 text-gray-700 mb-6">
                <li>Browse available drives on your dashboard.</li>
                <li>Select the drives you’re interested in supporting.</li>
                <li>Contact the NGOs based on the provided information.</li>
                <li>Coordinate with NGOs to contribute to the drives.</li>
              </ol>
              <button
                className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700"
              >
                Learn More
              </button>
            </div>

            {/* NGO Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-orange-600 mb-4">For NGOs</h2>
              <p className="text-gray-700 mb-4">
                As an NGO, you can create and manage drives to collect donations. Here’s how you can get started:
              </p>
              <ol className="list-decimal pl-6 text-gray-700 mb-6">
                <li>Register and log in to your account.</li>
                <li>Use the dashboard to add new drives.</li>
                <li>Provide details about your drive, including the date, time, and description.</li>
                <li>Manage and update your drives as needed.</li>
                <li>Engage with organizations interested in supporting your drives.</li>
              </ol>
              <button
                className="bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
