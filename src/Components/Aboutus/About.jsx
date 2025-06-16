import React from 'react'
import './About.css'


import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import aboutuspic from '../../Asserts/Img/law.svg'
import aboutman from '../../Asserts/Img/law.svg'


export default function About() {
    return (
        <div>
          

            <div className='mainaboutdiv'>
                <Container  fluid>
                    <Row>
                        <Col lg={6} md={6} xs={12}>

                            <div>
                                <h1>Mission</h1>
                                <p>“Law mission is to given quality services 24/7 with the help of <br />
                                    those who are expert in their field”</p>
                            </div>

                            <div>
                                <h1>Vision</h1>
                                <p>“We believe in bridging the gap between legal experts and members of  <br />

                                    general public who seek professional advice.”</p>
                            </div>


                        </Col>


                        <Col lg={6} md={6} xs={12}>
                            <div className='aboutusdiv'>
                                <img src={aboutuspic} alt="aboutuspic" />
                            </div>
                        </Col>


                    </Row>

                </Container>


                <div className="aboutusmainsecdiv">
                    <Container >
                        <Row>
                            <Col lg={6} md={6} xs={12}>


                                <div className='aboutmanpicdiv'>
                                    <img src={aboutman} alt="" />
                                </div>


                            </Col>


                            <Col lg={6} md={6} xs={12}>
                                <div>
                                    <h1>About Us</h1>
                                    <p>“ Law is private limited Company and an initiative by innovative Barristers who also
                                        happen to love it and are committed to the idea of integrating law with technology it is
                                        a tech startup, run by legal professional who believe that lehal services should be
                                        affordable, simpleand resources making it easier for people to get the legal help
                                        not happy with the services received...</p>
                                </div>
                            </Col>


                        </Row>

                    </Container>
                </div>

          


            </div>

        </div>
    )
}
