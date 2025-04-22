import React, { useRef, useState } from 'react';
import './Verification.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import verification from '../../Asserts/Img/law.svg';
import { useNavigate } from 'react-router-dom';
import { Icon } from '@iconify/react';

export default function Verification() {
  const navigate = useNavigate();

  const gotheloginpage = () => {
    navigate('/welcome');
  };

  const [code, setCode] = useState(['', '', '', '']);
  const inputsRef = useRef([]);

  const handleChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9a-zA-Z]{0,1}$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);

      if (value && index < 3) {
        inputsRef.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  return (
    <div>
      <Container fluid>
        <Row>
          <Col lg={5} md={12} id="maindiv-createaccount-to-sana">
            <img className="img-fluid" src={verification} alt="" />
          </Col>

          <Col lg={7} md={12}>
            <div className="verificationmaindiv">
              <div className="icon-and-button-parentdiv">
                <Icon className="worldverificationicon" icon="tabler:world" />
                <button onClick={gotheloginpage}>Sign In</button>
              </div>

              <Container>
                <div className="verifiacationcontent">
                  <h3>
                    We’ve sent your verification <br /> code to your email
                  </h3>
                  <p>
                    Your Email <a href="/"> abc@xyx.com </a>{' '}
                    <span>
                      <Icon
                        className="editicon"
                        icon="solar:gallery-edit-outline"
                      />
                    </span>
                  </p>

                  <div className="maininput">
                    {code.map((char, index) => (
                      <input
                        key={index}
                        type="text"
                        maxLength={1}
                        value={char}
                        onChange={(e) => handleChange(e, index)}
                        onKeyDown={(e) => handleKeyDown(e, index)}
                        ref={(el) => (inputsRef.current[index] = el)}
                      />
                    ))}
                  </div>

                  <button>Verify</button>
                </div>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
