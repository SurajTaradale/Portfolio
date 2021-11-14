import '../Style/About.css';
import aboutimg from '../Assets/img3.jpg';
import CV from '../Assets/Surajcv.pdf';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function About() {

   return (
      <div className="About" id="about">
         <div className="Aboutcontainer">
            <p style={{ textAlign: 'center', fontSize: '24px', marginBottom: '0.5rem', fontWeight: '600', }}>About Me</p>
            <Row className="AboutRow">

               <Col sm={4} className='lefttorightAbout1' style={{ animationDelay: '0.5s' }}>
                  {/* <ScrollAnimation animateIn='fadeIn'> */}
                  <div className="Aboutimg-area">
                     <div className="Aboutinner-area">
                        <img loading='lazy' src={aboutimg} alt="" />
                     </div>
                  </div>
                  {/* </ScrollAnimation> */}
               </Col>

               <Col sm={8} className='righttoleftAbout1' style={{ animationDelay: '0.5s' }}>
                  <div className="Aboutimg-area Aboutcol">
                     <div className="Aboutinner-area area">
                        <div className='Aboutme'>
                           <p className='Info'>
                              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              &nbsp;&nbsp;&nbsp;
                              Hi, I am Suraj Taradale
                              I am web developer and web designer
                              I pursued my <b>Graduation</b> at Visvesvaraya Technological University (VTU)
                              I completed <b>Full Stack Development Course</b> at Kodnest technology bengalore
                              I have certificate on <b>JavaScript Course</b> in freecodecamp.
                           </p>
                           <div>
                              <Row className='emailphone'>
                                 <Col sm={6} className='PEBtn PEBtn1'>
                                    <a className='telno' href="tel:+918123632123"><div className="circle"><i className="fa fa-phone phicon"></i></div></a>
                                    <div style={{ fontWeight: '500', marginLeft: '6px' }}> <p className='phoneEmail'>8123632123</p></div>
                                 </Col>
                                 <Col sm={6} className='PEBtn'>
                                    <a className='EmailIcon' href="mailto:surajtaradale@gmail.com"><i className="fa fa-envelope EmailIcon2" aria-hidden="true" ></i> </a>
                                    <div style={{ fontWeight: '500' }}><p className='phoneEmail'>surajtaradale@gmail.com</p></div>
                                 </Col>
                              </Row>
                           </div>
                           <Row className='Aboutbuttons'>
                           <Col sm={6} >
                              <Link to="/View"><button className='viewbtn'><i className="fa fa-eye" aria-hidden="true" style={{ marginRight: '2%' }}></i>View CV</button></Link>
                           </Col >
                           <Col sm={6}>
                              <a href={CV} download><button className='viewbtn1'><i className="fa fa-download" aria-hidden="true" style={{ marginRight: '2%' }}></i>Download CV</button></a>
                              </Col>
                              </Row>
                        </div>
                     </div>
                  </div>
               </Col>

            </Row>
         </div>

      </div>
   );
}

export default About;