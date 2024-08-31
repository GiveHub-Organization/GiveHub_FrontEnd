"use client"
import React from 'react';
import sampleData from "@/json/sampleData";
import Link from 'next/link';
const OrganizationDashboard = () => {
  // Extracting drives and NGOs from the sampleData
  const drives = sampleData.ngos.reduce((acc, ngo) => {
    return acc.concat(ngo.drives.map(drive => ({ ...drive, ngoName: ngo.name })));
  }, []);
  
  const ngos = sampleData.ngos.reduce((acc, ngo) => {
    acc[ngo.id] = ngo;
    return acc;
  }, {});

  return (
    <>
      <div className="pt-20 min-h-screen bg-gray-100">
        <div className="container mx-auto p-6">
          <h2 className="text-3xl text-center font-bold mb-8">Available Drives</h2>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            {drives.length > 0 ? (
              <ul className="space-y-6">
                {drives.map((drive) => {
                  return (
                    <li key={drive.id} className="p-6 border border-gray-300 rounded-lg shadow-sm bg-gray-50">
                      <h3 className="text-2xl font-semibold mb-2">{drive.title}</h3>
                      <p className="text-gray-700 mb-2">{drive.description}</p>
                      <p className="text-gray-500 mb-2"><strong>Date:</strong> {drive.date}</p>
                      <p className="text-gray-500 mb-4"><strong>Location:</strong> {drive.location}</p>
                      <div className="mb-4">
                        <p className="font-medium text-gray-800">Contact Info:</p>
                        <p className="text-gray-600"><strong>Name:</strong> {drive.contact.name}</p>
                        <p className="text-gray-600"><strong>Email:</strong> <a href={`mailto:${drive.contact.email}`} className="text-blue-500">{drive.contact.email}</a></p>
                        <p className="text-gray-600"><strong>Phone:</strong> <a href={`tel:${drive.contact.phone}`} className="text-blue-500">{drive.contact.phone}</a></p>
                      </div>
                      <div className="mb-4">
                        <p className="font-medium text-gray-800">NGO Name:</p>
                        <p className="text-gray-600">{drive.ngoName}</p>
                      </div>
                      <Link href={`/donate?driveId=${drive.id}`} passHref>
                      <button className="bg-orange-600 text-white px-4 py-2 rounded-lg hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        Donate to NGO
                      </button>
                    </Link>
                    </li>
                  );
                })}
              </ul>
            ) : (
              <p className="text-center text-gray-600">No drives available.</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrganizationDashboard;
