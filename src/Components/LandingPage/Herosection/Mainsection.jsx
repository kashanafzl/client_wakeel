import React from 'react';
import './mainsection.css';

import mainimg from '../../../Asserts/Img/mainpic.svg';

export default function Mainsection() {
  return (
    <div className="mainflexdiv">
      <div className="mainimg">
        <img src={mainimg} alt="Legal Solutions" />
      </div>

      <div className="maincontentdiv">
        <h1>Trusted Legal <br /> Solutions for Your <br /> Future</h1>
        <p>Expertise that Runs Deep, <br /> Service that's Personal</p>
        <button>Let’s Discuss Your Case</button>
      </div>
    </div>
  );
}
