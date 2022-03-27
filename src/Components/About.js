import '../Style/About.css';
import CV from '../Assets/Surajcv.pdf';
import { Row, Col } from 'react-bootstrap';
import apk from '../Assets/Suraj Taradale.apk'

function About() {

   return (
      <div className="About" id="about">
         <div className="Aboutcontainer">
            <p style={{ textAlign: 'center', fontSize: '24px', marginBottom: '0.5rem', fontWeight: '600', }}>About Me</p>
            <Row className="AboutRow">
               <Col sm={12} className='' style={{ animationDelay: '0.5s' }}>
                  <div className="Aboutimg-area Aboutcol">
                     <div className="Aboutinner-area area">
                        <div className='Aboutme'>
                           <span className='Info'>
                              I am a web developer and designer and a full stack developer at Estomi Technology Pvt Ltd. I have worked on tussom products and am familiar with HTML, CSS, JavaScript, Perl, SQL, Android, Reactjs. I have knowledge of ISTM and I have a certificate on Front End Development Libraries, JavaScript Algorithms and Data Structures, Responsive Web Design and I Completed full stack development course at Kodnest.
                           </span>
                           <Row className='Aboutbuttons'>
                           <Col sm={6} >
                           <a href={apk} download><button className='viewbtn1'><i className="fa fa-download" aria-hidden="true" style={{ marginRight: '2%' }}></i>Download app</button></a>
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