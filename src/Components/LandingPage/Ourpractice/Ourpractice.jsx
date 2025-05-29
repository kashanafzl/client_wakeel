import React from 'react';
import './Our.css';

import o1 from '../../../Asserts/Img/o1.svg';
import o2 from '../../../Asserts/Img/o2.svg';
import o3 from '../../../Asserts/Img/o3.svg';
import o4 from '../../../Asserts/Img/o4.svg';
import o5 from '../../../Asserts/Img/o5.svg';
import o6 from '../../../Asserts/Img/06.svg';

const practiceAreas = [
  { img: o1, title: 'Family Law', desc: 'Navigating the complexities of divorce, child custody, and spousal support' },
  { img: o2, title: 'Criminal Law', desc: 'Providing strong defense strategies to protect your rights and freedom' },
  { img: o3, title: 'Business Law', desc: 'Helping businesses navigate contracts, compliance, and legal disputes' },
  { img: o4, title: 'Employment Law', desc: 'Ensuring fair treatment in the workplace and resolving disputes' },
  { img: o5, title: 'Real Estate Law', desc: 'Handling property transactions, leases, and legal matters' },
  { img: o6, title: 'Intellectual Property', desc: 'Protecting trademarks, copyrights, and patents' }
];

export default function OurPractice() {
  return (
    <div className="mainourpracticediv">
      <h1>Our Practice Area</h1>
      <div className="mainflexoldiv">
        {practiceAreas.map((area, index) => (
          <div className='o1maindiv' key={index}>
            <img src={area.img} alt={area.title} />
            <h2>{area.title}</h2>
            <p>{area.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}