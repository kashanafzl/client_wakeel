import React, { useState } from 'react';
import './Profilestep1.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import profile1 from '../../Asserts/Img/law.svg';

import { Icon } from '@iconify/react';

// React Toastify
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Profilestep1() {
  const [fullName, setFullName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [gender, setGender] = useState('');

  const handleNext = () => {
    if (!fullName || !birthDate || !gender) {
      toast.error('Please fill out all fields');
      return;
    }

    // Proceed with the next step
    toast.success('Profile step completed!');
    // Navigate or move to next step logic here
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={5} md={12} id='maindiv-createaccount-to-sana'>
            <img className='img-fluid' id='profilepic' src={profile1} alt="profile" />
          </Col>

          <Col lg={7} md={12}>
            <div className="profilemaindiv">
              <div className='profileicon'>
                <Icon className='profileiconworld' icon="tabler:world" />
              </div>

              <div className="profilecontentmaindiv">
                <h6><a href="/">Step 01 / <a href="/"> 02</a></a></h6>
                <h3>Setup Your Profile</h3>
                <p>Get Started with a Comprehensive Herbal Health <br /> Profile</p>

                <div className='smallandinputmaindiv'>
                  <small>Full Name</small>
                  <input
                    type="text"
                    placeholder='Enter Name'
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </div>

                <div className='smallandinputmaindiv'>
                  <small>Birth Date</small>
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                  />
                </div>

                <div className='smallandinputmaindiv'>
                  <small>Gender</small>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  >
                    <option value="">Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                <div className='profilebtn1'>
                  <button onClick={handleNext}>Next</button>
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
