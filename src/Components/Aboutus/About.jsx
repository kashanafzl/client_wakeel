import React, { useEffect } from 'react';
import './About.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import aboutuspic from '../../Asserts/Img/law.svg';
import aboutman from '../../Asserts/Img/law.svg';
import Video from '../LandingPage/Video/Video';

export default function About() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="mainaboutdiv">
      <Container fluid>
        <Row className="align-items-center g-4">
          <Col lg={6} md={6} xs={12}>
            <div className="about-text-block" data-aos="fade-right">
              <h2 className="section-title">Our Mission</h2>
              <p className="section-description">
                Our mission is to provide <strong>quality legal services 24/7</strong> through a network of
                experienced and trusted professionals. We aim to make legal support accessible and reliable.
              </p>

              <h2 className="section-title">Our Vision</h2>
              <p className="section-description">
                We believe in <strong>bridging the gap</strong> between legal experts and the general public,
                empowering individuals with professional legal guidance when they need it most.
              </p>
            </div>
          </Col>

          <Col lg={6} md={6} xs={12}>
            <div className="aboutus-image-wrapper" data-aos="zoom-in">
              <img src={aboutuspic} alt="About Us Visual" />
            </div>
          </Col>
        </Row>
      </Container>

      <div className="aboutusmainsecdiv">
        <Container>
          <Row className="align-items-center g-4">
            <Col lg={6} md={6} xs={12}>
              <div className="aboutmanpicdiv" data-aos="fade-up">
                <img src={aboutman} alt="Lawyer Illustration" />
              </div>
            </Col>

            <Col lg={6} md={6} xs={12}>
              <div className="about-text-block" data-aos="fade-left">
                <h2 className="section-title">About Us</h2>
                <p className="section-description">
                  <strong>Law</strong> is a private limited company founded by innovative barristers passionate
                  about integrating law with technology. As a legal-tech startup, we are committed to making
                  legal services <strong>simple, affordable, and accessible</strong> for everyone. Whether it's
                  legal consultation, case application, or dispute resolution, we ensure that people receive the
                  right support without complications.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* NEW RULES SECTION */}
      <div className="rules-section" data-aos="fade-up">
        <Container>
          <Row>
            <Col xs={12}>
              <div className="rules-content">
                <h2 className="section-title text-center">Legal Rules & Responsibilities</h2>
                <ul className="rules-list">
                  <li><strong>Confidentiality:</strong> All client information must be kept private and secure.</li>
                  <li><strong>Integrity:</strong> Lawyers are expected to maintain honesty and transparency in all dealings.</li>
                  <li><strong>Client Rights:</strong> Clients have the right to clear communication, fairness, and respect.</li>
                  <li><strong>Timely Updates:</strong> Clients must be regularly updated about the progress of their case.</li>
                  <li><strong>No Misuse of Authority:</strong> Legal professionals are prohibited from exploiting client trust.</li>
                  <li><strong>Code of Conduct:</strong> Lawyers must adhere to professional ethics and bar association rules.</li>
                  <li><strong>Fair Representation:</strong> Every individual has the right to be fairly represented in legal matters.</li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>


        <Video/>
      </div>
    </div>
  );
}
