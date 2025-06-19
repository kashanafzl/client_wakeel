import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import signuptolawyer from '../../Asserts/Img/law.svg';
import google from '../../Asserts/Img/google.svg';

import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToLoginPage = () => {
    navigate('/createaccount');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      toast.error('Please fill in all fields.');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters.');
      return;
    }

    console.log('Logging in with:', { email, password });
    toast.success('Login successful! Redirecting...');

    setTimeout(() => {
      navigate('/dashboard'); // Or wherever you want to redirect after login
    }, 2000);
  };

  const handleForgotPassword = () => {
    navigate('/forgotpassword');
  };

  return (
    <div>
      <ToastContainer />
      <Container fluid>
        <Row>
          <Col lg={5} md={12} id="maindiv-createaccount-to-sana">
            <img className="img-fluid" src={signuptolawyer} alt="" />
          </Col>

          <Col lg={7} md={12}>
            <div className="leftsidemain-createaccount-to-sana">
              <div className="icon-and-button-parentdiv">
                <Icon id="worldicon1" icon="tabler:world" />
                <button onClick={goToLoginPage} id="btncreateaccount">
                  Sign Up
                </button>
              </div>

              <div className="createaccounth4andpdiv">
                <h4>Login</h4>
                <p>
                  Discover a world of natural remedies with our expert <br /> herbalists
                </p>

                <form onSubmit={handleSubmit}>
                  <div className="smallandinputmaindiv1">
                    <small>Your email</small>
                    <input
                      type="email"
                      placeholder="Enter email here"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className="smallandinputmaindiv1">
                    <small>Your Password</small>
                    <input
                      type="password"
                      placeholder="Enter Password here"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  {/* ✅ Forgot Password Link */}
                  <div style={{ textAlign: 'right', marginBottom: '1rem' , fontSize : '1.5rem' }}>
                    <span
                      onClick={handleForgotPassword}
                      style={{
                        color: '#2c3e50',
                        cursor: 'pointer',
                        fontWeight: '500',
                        textDecoration: 'underline',
                      }}
                    >
                      Forgot Password?
                    </span>
                  </div>

                  <button id="signbtn" type="submit">Sign In</button>
                </form>

                <div className="signupline">
                  <span>--- Or Sign in With ---</span>
                </div>

                <div id="googlebtndiv" className="facebookbtndiv">
                  <img src={google} alt="" />
                  <span>Sign in With Google</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
