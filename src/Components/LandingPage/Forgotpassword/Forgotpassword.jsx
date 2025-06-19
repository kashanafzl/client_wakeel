import React, { useState } from 'react';
import './Forgotpassword.css'; // Create this file for styling
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import signuptolawyer from '../../../Asserts/Img/law.svg';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error('Please enter your email address.');
      return;
    }

    // Simulate reset
    console.log('Password reset request for:', email);
    toast.success('Reset link sent to your email!');

    setTimeout(() => {
      navigate('/login');
    }, 3000);
  };

  return (
    <div>
      <ToastContainer />
      <Container fluid>
        <Row>
          <Col lg={5} md={12} id="maindiv-forgotpassword">
            <img className="img-fluid" src={signuptolawyer} alt="" />
          </Col>

          <Col lg={7} md={12}>
            <div className="leftsidemain-forgotpassword">
       
              <div className="createaccounth4andpdiv">
                <h4>Forgot Password</h4>
                <p>
                  Enter your email to receive a password reset link.
                </p>

                <form onSubmit={handleReset}>
                  <div className="smallandinputmaindiv1">
                    <small>Email Address</small>
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <button id="signbtn" type="submit">Send Reset Link</button>
                </form>

                <div className="back-to-login">
                  <span onClick={() => navigate('/login')}>← Back to Login</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
