import React, { useState } from 'react';
import './Login.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Welcomepic from '../../Asserts/Img/law.svg';
import facebook from '../../Asserts/Img/facebook.svg';
import google from '../../Asserts/Img/google.svg';

import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

// React Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const goToCreateAccountPage = () => {
    navigate('/createaccount');
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Basic validation
    if (!email || !password) {
      toast.error('Please fill in all fields.');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters.');
      return;
    }

    // Simulate login success (replace with real API logic)
    console.log('Logging in with:', { email, password });

    toast.success('Login successful! Redirecting...');
    setTimeout(() => {
      navigate('/dashboard'); // redirect to your desired route
    }, 2000);
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={5} md={12} id='maindiv-createaccount-to-sana'>
            <img className='img-fluid' id='welcomepic' src={Welcomepic} alt="Welcome" />
          </Col>

          <Col lg={7} md={12}>
            <div className="leftsidemain-createaccount-to-sana">
              <div className="icon-and-button-parentdiv">
                <Icon id='welcomesignupicon' icon="tabler:world" />
                <button onClick={goToCreateAccountPage} id='welcomesignupbutton'>Sign Up</button>
              </div>

              <div className='createaccounth4andpdiv'>
                <h4>Login!</h4>
                <p>Discover a world of natural remedies with <br /> our expert herbalists</p>

                <form onSubmit={handleLogin}>
                  <div className='smallandinputmaindiv2'>
                    <small>Email</small>
                    <input
                      type="email"
                      placeholder='Enter email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <div className='smallandinputmaindiv2'>
                    <small>Password</small>
                    <input
                      type="password"
                      placeholder='Enter Password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <button id='signbtn' type='submit'>Login</button>
                </form>

                <div className="signupline">
                  <span>--- Or Sign in With ---</span>
                </div>

                <div className='facebookbtndiv1'>
                  <img src={facebook} alt="Facebook" />
                  <span>Sign in With Facebook</span>
                </div>

                <div id='googlebtndiv' className='facebookbtndiv1'>
                  <img src={google} alt="Google" />
                  <span>Sign in With Google</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
}
