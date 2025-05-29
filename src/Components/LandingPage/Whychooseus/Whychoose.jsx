import React from 'react'
import './Whychoose.css'

import c1 from '../../../Asserts/Img/c1.svg'
import c2 from '../../../Asserts/Img/c2.svg'
import c3 from '../../../Asserts/Img/c3.svg'

export default function Whychoose() {
  return (
    <div className="why-container">
      <div className="whycontent">
        <h1>Why Choose Us</h1>
      </div>

      <div className="mainparentdivwhy">
        <div className="whycontentdiv">
          <img src={c1} alt="Deep Expertise" />
          <h3>Deep Expertise</h3>
          <p>
            Our team comprises seasoned legal professionals with expertise in various fields, ready to provide profound legal insights for every case.
          </p>
        </div>

        <div className="whycontentdiv">
          <img src={c2} alt="Personalized Service" />
          <h3>Personalized Service</h3>
          <p>
            We understand that each client has unique needs. We offer personal service and solutions customized to your specific requirements.
          </p>
        </div>

        <div className="whycontentdiv">
          <img src={c3} alt="Integrity and Ethics" />
          <h3>Integrity and Ethics</h3>
          <p>
            We uphold high standards of integrity and ethics, ensuring that every step taken by our firm aligns with legal norms and regulations.
          </p>
        </div>
      </div>
    </div>
  )
}
