import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Dashboard.css';

function Dashboard() {
  const [formData, setFormData] = useState({
    clientName: '',
    email: '',
    caseType: '',
    description: '',
    phone: '',
    notes: '',
    location: '',
    urgency: 'Medium',
  });

  useEffect(() => {
    localStorage.setItem('clientCases', JSON.stringify(getAllCases()));
  }, []);

  const getAllCases = () => {
    return JSON.parse(localStorage.getItem('clientCases')) || [];
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { clientName, email, caseType, description, phone, notes, location } = formData;

    if (!clientName || !email || !caseType || !description || !phone || !notes || !location) {
      toast.error('Please fill out all fields!', { position: 'top-center', theme: 'colored' });
      return;
    }

    const allCases = getAllCases();
    allCases.push({ ...formData, id: Date.now(), status: 'Pending' });

    localStorage.setItem('clientCases', JSON.stringify(allCases));

    toast.success('Case Submitted Successfully!', { position: 'top-center', theme: 'colored' });

    setFormData({
      clientName: '',
      email: '',
      caseType: '',
      description: '',
      phone: '',
      notes: '',
      location: '',
      urgency: 'Medium',
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="form-wrapper">
        <div className="form-container">
          <h2 className="form-title">Submit Your Case</h2>

          <form onSubmit={handleSubmit} className="form">
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name</label>
                <input name="clientName" value={formData.clientName} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input name="email" type="email" value={formData.email} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Case Type</label>
                <select name="caseType" value={formData.caseType} onChange={handleChange}>
                  <option value="">-- Select --</option>
                  <option>Divorce</option>
                  <option>Property</option>
                  <option>Harassment</option>
                  <option>Contract</option>
                  <option>Criminal</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>Phone</label>
                <input name="phone" value={formData.phone} onChange={handleChange} />
              </div>

              <div className="form-group full-width">
                <label>Description</label>
                <textarea name="description" value={formData.description} onChange={handleChange} />
              </div>

              <div className="form-group full-width">
                <label>Additional Notes</label>
                <textarea name="notes" value={formData.notes} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Location</label>
                <input name="location" value={formData.location} onChange={handleChange} />
              </div>

              <div className="form-group">
                <label>Urgency</label>
                <select name="urgency" value={formData.urgency} onChange={handleChange}>
                  <option>Low</option>
                  <option>Medium</option>
                  <option>High</option>
                </select>
              </div>
            </div>

            <button type="submit" className="submit-btn">Submit Case</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
