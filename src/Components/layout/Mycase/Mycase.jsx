import React, { useState, useEffect } from 'react';
import './Mycase.css';

export default function Mycase() {
  const [cases, setCases] = useState([]);
  const [selectedCase, setSelectedCase] = useState(null);
  const [showModal, setShowModal] = useState(false);

  // Load cases from localStorage
  useEffect(() => {
    const storedCases = JSON.parse(localStorage.getItem('clientCases')) || [];
    setCases(storedCases);
  }, []);

  const handleView = (caseItem) => {
    setSelectedCase(caseItem);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedCase(null);
  };

  return (
    <div className="mycase-container">
      <h2 className="mycase-heading">📁 My Applied Cases</h2>

      {cases.length === 0 ? (
        <p>No cases submitted yet.</p>
      ) : (
        cases.map((caseItem) => (
          <div key={caseItem.id} className="case-card">
            <div className="case-header">
              <h3>{caseItem.caseType} Case</h3>
              <span className={`status ${caseItem.status?.toLowerCase()}`}>
                {caseItem.status}
              </span>
            </div>
            <p className="case-date">Applied on: {new Date(caseItem.id).toLocaleDateString()}</p>
            <p className="case-description">{caseItem.description}</p>
            <button className="view-btn" onClick={() => handleView(caseItem)}>View Details</button>
          </div>
        ))
      )}

      {/* Modal Popup */}
      {showModal && selectedCase && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={closeModal}>×</button>
            <h2>{selectedCase.caseType} Case</h2>
            <p><strong>Name:</strong> {selectedCase.clientName}</p>
            <p><strong>Email:</strong> {selectedCase.email}</p>
            <p><strong>Phone:</strong> {selectedCase.phone}</p>
            <p><strong>Location:</strong> {selectedCase.location}</p>
            <p><strong>Urgency:</strong> {selectedCase.urgency}</p>
            <p><strong>Status:</strong> {selectedCase.status}</p>
            <p><strong>Date:</strong> {new Date(selectedCase.id).toLocaleDateString()}</p>
            <p><strong>Description:</strong> {selectedCase.description}</p>
            <p><strong>Additional Notes:</strong> {selectedCase.notes}</p>
          </div>
        </div>
      )}
    </div>
  );
}
