import React from 'react';
import './Nyc.css';

import nycimg from '../../../Asserts/Img/main2.svg';

export default function Nyc() {
  return (
    <div className="mainnycdiv">
      <div className="nycimg">
        <img src={nycimg} alt="NYC Legal Assistance" />
      </div>

      <div className="nyccontent">
        <h1>Have you been charged <br /> with a crime in NYC?</h1>
        <p>
          Welcome to Legal Sphere - Your reliable legal partner to confidently navigate your legal challenges. 
          With a committed team of experts, we offer cutting-edge legal solutions tailored to protect your interests 
          and ensure the success of our clients.
        </p>
      </div>
    </div>
  );
}
