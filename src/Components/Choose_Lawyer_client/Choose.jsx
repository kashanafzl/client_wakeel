import React from 'react'
import './Choose.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// pics
import signuptolawyer from '../../Asserts/Img/signuptolower.svg'
import pic1 from '../../Asserts/Img/j1.svg'
import pic2 from '../../Asserts/Img/j2.svg'
import pic3 from '../../Asserts/Img/j3.svg'

// icon 
import { Icon } from '@iconify/react';
import { Link, useNavigate } from 'react-router-dom';



export default function Choose() {
  const navigate = useNavigate(); 

  const gotheclient = () =>{
    navigate('/createaccount')
  }
  const gothelawyer = () =>{
    navigate('/lawyercreateanaccount')
  }



  return (
    <>

<Container fluid>
      <Row>
        <Col lg={5} md={12} id='maindiv-signup-to-sana'> 
            <img className='img-fluid' src={signuptolawyer} alt="" />
         </Col>

         <Col lg={7} md={12}> 

                <div className="leftsidemain-sinup-to-sana">
               
                    <div className="icon-and-button-parentdiv">
                         <Icon className='worldicon' icon="tabler:world" />
                         <Link to={'/login'}>
                         <button>Sign In</button>
                         </Link>
                    </div>


                    <div className="left-sign-up-to-sana">
                      <h2>Sign Up To, Lawyer!</h2>
                      <p>how do you want join our wide community by becoming?</p>

                      <div onClick={gotheclient} id='picandtext'  className='Picandtextmaindiv'>

                            <div>
                                <img id='pic1' src={pic1} alt="" />
                            </div>

                            <div  className='heading6andparagraph'>
                                <h6>Join As Client</h6>
                                <p>Unlock Your Expertise, Client Lives.</p>
                            </div>
                      </div>

                      <div  onClick={gothelawyer}  className='Picandtextmaindiv'>
                       
                        <div>
                            <img id='pic2' src={pic2} alt="" />
                        </div>

                        <div  className='greencheckiconparentdiv'>
                        <div className='heading6andparagraph'>
                            <h6>Join As Lawyer</h6>
                            <p id='secondpara'>Discover To see your cases.</p>
                        </div>

                        <div className='greencheckicon'>
                        <Icon icon="solar:verified-check-broken" />
                        </div>
                        </div>

                        
                  </div>

                  {/* <div id='picandtext'  className='Picandtextmaindiv'>
                        
                        <div>
                            <img id='pic3' src={pic3} alt="" />
                        </div>

                        <div className='heading6andparagraph'>
                            <h6>Join As Admin</h6>
                            <p>Join To manage Everything</p>
                        </div>
                  </div> */}


                    </div>

              



                </div>
         </Col>

      </Row>
    </Container>

    </>
  )
}
