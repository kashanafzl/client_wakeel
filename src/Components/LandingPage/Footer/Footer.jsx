import React from 'react';
import './Footer.css';

import logo from '../../../Asserts/Img/logo.svg';
import location from '../../../Asserts/Img/location.svg';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="bgfooterdiv">
        {/* Blue Overlay */}
        <div className="overlay"></div>

        <img src={logo} alt="Logo" className="footer-logo" />

        <div className="mainfooterdiv">
          <div className="footer-location">
            <img src={location} alt="Location Icon" className="location-icon" />
            <h3>
              Kohat University Of Science & <br />
              Technology KUST
            </h3>
          </div>

          <div className="footer-contact">
            <h4>Free Consultation</h4>
            <p>+92-3331234567</p>
          </div>

          <button className="footer-button">Get Direction</button>
        </div>
      </div>
    </div>
  );
}
