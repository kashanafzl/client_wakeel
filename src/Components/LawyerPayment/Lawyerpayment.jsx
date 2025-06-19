import React, { useState } from 'react';
import './Lawyerpayment.css';

export default function Lawyerpayment() {
  const [paymentDetails, setPaymentDetails] = useState({
    lawyerName: 'Adv. Ahsan Raza',
    email: 'ahsan.lawyer@example.com',
    phone: '0301-1234567',
    casesHandled: 12,
    amountPerCase: 2500,
    totalAmount: 30000,
    status: 'Unpaid',
    paymentMethod: '',
    transactionId: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Payment details submitted!');
    console.log(paymentDetails);
  };

  return (
    <div className="lawyer-payment-container">
      <h2 className="page-title">💳 Lawyer Payment Summary</h2>

      <div className="payment-card">
        <div className="lawyer-info">
          <p><strong>Name:</strong> {paymentDetails.lawyerName}</p>
          <p><strong>Email:</strong> {paymentDetails.email}</p>
          <p><strong>Phone:</strong> {paymentDetails.phone}</p>
          <p><strong>Cases Handled:</strong> {paymentDetails.casesHandled}</p>
          <p><strong>Amount/Case:</strong> Rs. {paymentDetails.amountPerCase}</p>
          <p><strong>Total Amount:</strong> Rs. {paymentDetails.totalAmount}</p>
          <p><strong>Status:</strong> <span className={`status-tag ${paymentDetails.status.toLowerCase()}`}>{paymentDetails.status}</span></p>
        </div>

        <form className="payment-form" onSubmit={handleSubmit}>
          <h4>Complete Payment</h4>

          <label>Payment Method</label>
          <select name="paymentMethod" value={paymentDetails.paymentMethod} onChange={handleChange} required>
            <option value="">-- Select --</option>
            <option value="JazzCash">JazzCash</option>
            <option value="EasyPaisa">EasyPaisa</option>
            <option value="Bank Transfer">Bank Transfer</option>
          </select>

          <label>Transaction ID</label>
          <input
            type="text"
            name="transactionId"
            value={paymentDetails.transactionId}
            onChange={handleChange}
            required
            placeholder="Enter transaction ID"
          />

          <button type="submit" className="pay-btn">Confirm Payment</button>
        </form>
      </div>
    </div>
  );
}
