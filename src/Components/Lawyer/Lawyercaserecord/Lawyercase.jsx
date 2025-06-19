import React, { useEffect, useState } from 'react';
import './Lawyercase.css';

export default function LawyerCaseRecord() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const storedCases = JSON.parse(localStorage.getItem('clientCases')) || [];
    setCases(storedCases);
  }, []);

  return (
    <div className="case-record-container">
      <h2 className="case-record-title">📜 Lawyer Case Records</h2>

      {cases.length === 0 ? (
        <p className="no-cases">No case records found.</p>
      ) : (
        <div className="case-record-list">
          {cases.map((c) => (
            <div key={c.id} className="record-card">
              <h3 className="record-client-name">{c.clientName}</h3>
              <div className="record-info">
                <p><strong>Email:</strong> {c.email}</p>
                <p><strong>Phone:</strong> {c.phone}</p>
                <p><strong>Case Type:</strong> {c.caseType}</p>
                <p><strong>Location:</strong> {c.location}</p>
                <p><strong>Urgency:</strong> {c.urgency}</p>
                <p><strong>Description:</strong> {c.description}</p>
                <p><strong>Notes:</strong> {c.notes}</p>
                <p><strong>Status:</strong> 
                  <span className={`status-tag ${c.status?.toLowerCase()}`}>
                    {c.status}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
