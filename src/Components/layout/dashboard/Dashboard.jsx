import React from 'react';
import './Dashboard.css';

export default function Dashboard() {
  const caseData = [
    { name: 'John Doe', type: 'Criminal', date: '2025-04-15', budget: '$500' },
    { name: 'Jane Smith', type: 'Civil', date: '2025-04-18', budget: '$700' },
    { name: 'Michael Lee', type: 'Family', date: '2025-04-20', budget: '$600' },
  ];

  return (
    <div className="dashboard-container">
      <div className="header">
        <h1>Hey Lawyer!</h1>
        <p>Here are your recent cases:</p>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Case Type</th>
              <th>Last Date</th>
              <th>Budget</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {caseData.map((caseItem, index) => (
              <tr key={index}>
                <td>{caseItem.name}</td>
                <td>{caseItem.type}</td>
                <td>{caseItem.date}</td>
                <td>{caseItem.budget}</td>
                <td>
                  <button className="btn accept">Accept</button>
                  <button className="btn decline">Decline</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
