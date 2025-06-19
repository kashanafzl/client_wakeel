import React, { useState, useEffect } from 'react';
import './Lawyerdashboard.css';
import { ToastContainer, toast } from 'react-toastify';

export default function Lawyerdashboard() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const clientCases = JSON.parse(localStorage.getItem('clientCases')) || [];
    setCases(clientCases);
  }, []);

  const handleDecision = (id, decision) => {
    const updatedCases = cases.map((c) =>
      c.id === id ? { ...c, status: decision } : c
    );
    setCases(updatedCases);
    localStorage.setItem('clientCases', JSON.stringify(updatedCases));
    toast.success(`Case marked as ${decision}`, { position: 'top-center' });
  };

  return (
    <div className="lawyer-dashboard">
      <ToastContainer />
      <h2>📂 Client Case Dashboard</h2>

      <div className="case-list">
        {cases.map((client) => (
          <div key={client.id} className="case-card">
            <h3>{client.clientName}</h3>
            <p><strong>Email:</strong> {client.email}</p>
            <p><strong>Phone:</strong> {client.phone}</p>
            <p><strong>Case Type:</strong> {client.caseType}</p>
            <p><strong>Location:</strong> {client.location}</p>
            <p><strong>Urgency:</strong> {client.urgency}</p>
            <p><strong>Description:</strong> {client.description}</p>
            <p><strong>Notes:</strong> {client.notes}</p>
       <p><strong>Status:</strong> <span className={`status ${client.status}`}>{client.status}</span></p>


            {client.status === 'Pending' && (
              <div className="btn-group">
                <button onClick={() => handleDecision(client.id, 'Accepted')} className="btn accept">✅ Accept</button>
                <button onClick={() => handleDecision(client.id, 'Declined')} className="btn decline">❌ Decline</button>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
