import React, { useState } from 'react';
import './Lawyerforgotpassword.css';

export default function Lawyerforgotpasswords() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
      setMessage('Please enter your email address.');
      return;
    }

    // Simulate email send
    setMessage('Password reset link sent to your email.');
    setEmail('');
  };

  return (
    <div className="forgot-container">
      <div className="forgot-box">
        <h2>Forgot Password</h2>
        <p>Enter your email and we'll send you a reset link.</p>
        <form onSubmit={handleReset}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setMessage('');
            }}
          />
          {message && <div className="message">{message}</div>}
          <button type="submit">Send Reset Link</button>
        </form>
      </div>
    </div>
  );
}
