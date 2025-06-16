import React from 'react';
import './Applycase.css';

export default function Applycase() {
  const cases = [
    {
      id: 1,
      title: 'Property Dispute',
      description: 'Need a lawyer for a land ownership dispute in city court.',
      location: 'Karachi',
      date: '2025-06-10',
    },
    {
      id: 2,
      title: 'Divorce Settlement',
      description: 'Seeking legal assistance for divorce and child custody case.',
      location: 'Lahore',
      date: '2025-06-12',
    },
    {
      id: 3,
      title: 'Harassment Case',
      description: 'Legal help required for workplace harassment complaint.',
      location: 'Islamabad',
      date: '2025-06-15',
    },
    {
      id: 4,
      title: 'Family Issue',
      description: 'Family dispute requiring mediation and legal support.',
      location: 'Faisalabad',
      date: '2025-06-18',
    },
    {
      id: 5,
      title: 'Cyber Crime',
      description: 'Cyber fraud and online scam case for legal investigation.',
      location: 'Rawalpindi',
      date: '2025-06-20',
    },
    {
      id: 6,
      title: 'Business Fraud',
      description: 'Partnership fraud in a business deal. Legal support needed.',
      location: 'Peshawar',
      date: '2025-06-22',
    },
    {
      id: 7,
      title: 'Tenant Issue',
      description: 'Tenant refusing to vacate property. Require eviction notice.',
      location: 'Multan',
      date: '2025-06-25',
    },
    {
      id: 8,
      title: 'Land Grabbing',
      description: 'Illegal occupation of private land. Urgent legal action needed.',
      location: 'Hyderabad',
      date: '2025-06-28',
    },
    {
      id: 9,
      title: 'Inheritance Dispute',
      description: 'Dispute among siblings regarding parental property.',
      location: 'Quetta',
      date: '2025-06-30',
    },
  ];

  const handleApply = (caseId) => {
    alert(`You have successfully applied for case #${caseId}`);
  };

  return (
    <div className="applycase-container">
      <h1 className="applycase-heading">Available Cases to Apply</h1>
      <div className="case-grid">
        {cases.map((c) => (
          <div className="case-card" key={c.id}>
            <h2>{c.title}</h2>
            <p>{c.description}</p>
            <p><strong>Location:</strong> {c.location}</p>
            <p><strong>Date:</strong> {c.date}</p>
            <button onClick={() => handleApply(c.id)}>Apply Now</button>
          </div>
        ))}
      </div>
    </div>
  );
}
