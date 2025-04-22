import React from 'react';
import './layout.css';

export default function Dashboard() {
  const caseData = [
    { name: 'John Doe', type: 'Criminal', date: '2025-04-15', budget: '$500' },
    { name: 'Jane Smith', type: 'Civil', date: '2025-04-18', budget: '$700' },
    { name: 'Michael Lee', type: 'Family', date: '2025-04-20', budget: '$600' },
  ];

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Hey Lawyer!</h1>
        <p className="text-gray-500 mt-1">Here are your recent cases:</p>
      </div>

      <div className="overflow-x-auto shadow-lg rounded-lg bg-white">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 w-full">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Name</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Case Type</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Last Date</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Budget</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {caseData.map((caseItem, index) => (
              <tr key={index}>
                <td className="px-6 py-4 text-sm text-gray-800">{caseItem.name}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{caseItem.type}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{caseItem.date}</td>
                <td className="px-6 py-4 text-sm text-gray-800">{caseItem.budget}</td>
                <td className="px-6 py-4">
                  <button className="bg-green-500 text-white px-4 py-1 rounded-md hover:bg-green-600 transition">
                    Accept
                  </button>
                  <button className="bg-red-500 text-white px-4 py-1 rounded-md hover:bg-red-600 transition ml-2">
                    Decline
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
