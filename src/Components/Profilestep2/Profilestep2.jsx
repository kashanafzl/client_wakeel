import React, { useState } from 'react';
import './Profilestep2.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import profile2 from '../../Asserts/Img/law.svg';

import { Icon } from '@iconify/react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Profilestep2() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
      toast.success('Image uploaded successfully!');
    }
  };

  const handleFinish = () => {
    if (!image) {
      toast.error('Please upload a profile image.');
      return;
    }

    toast.success('Profile setup completed!');
    // Navigate to dashboard or another step
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={5} md={12} id='maindiv-createaccount-to-sana'>
            <img className='img-fluid' id='profile2' src={profile2} alt="" />
          </Col>

          <Col lg={7} md={12}>
            <div className="profilemaindiv">
              <div className='profileicon'>
                <Icon className='profileiconworld' icon="tabler:world" />
              </div>

              <div className="profilecontentmaindiv">
                <h6><a href="/">Step 02 / <a href="/"> 02</a></a></h6>
                <h3>Setup Your Profile</h3>
                <p>Get Started with a Comprehensive Herbal Health <br /> Profile</p>

                <div className='uploadwrapper'>
                  <label htmlFor="fileUpload" className={`uploadfile ${image ? 'image-uploaded' : ''}`}>
                    {preview ? (
                      <img src={preview} alt="Preview" className='uploaded-image' />
                    ) : (
                      <Icon className='cameraicon' icon="solar:camera-broken" />
                    )}
                  </label>
                  <input
                    id="fileUpload"
                    type="file"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleFileChange}
                  />
                </div>

                <div className='backandfinishbuttondiv'>
                  <div className='backbtn'>
                    <button>Back</button>
                  </div>

                  <div className='finishbtn'>
                    <button onClick={handleFinish}>Finish</button>
                  </div>
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
