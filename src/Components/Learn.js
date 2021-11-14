import '../Style/Learn.css';
import certificate1 from '../Assets/certificate1.PNG';
import certificate2 from '../Assets/certificate2.png';
import certificate3 from '../Assets/certificate3.jpg';
import { Row, Col } from 'react-bootstrap';
function Learn() {

  return (
    <div className="Learn" id='Learn'>
      <div className="SkillsTitle"> <p>Certificates</p></div>
      <Row className='certificate'>
        <Col sm={4} className='view-animation' style={{animationDelay:'0.4s'}}>
          <div className="Aboutimg-area12">
            <div className="Aboutinner-area12">
              <img loading='lazy' src={certificate1} alt="" />
            </div>
          </div>
        </Col>
        <Col sm={4} className='view-animation' style={{animationDelay:'0.8s'}}>
          <div className="Aboutimg-area12">
            <div className="Aboutinner-area12">
              <img loading='lazy' src={certificate2} alt="" />
            </div>
          </div>
        </Col>
        {/* <Col sm={4} className='view-animation' style={{animationDelay:'1.2s'}}>
          <div className="Aboutimg-area12">
            <div className="Aboutinner-area12">
              <img loading='lazy' src={certificate3} alt="" />
            </div>
          </div>
        </Col> */}
      </Row>

    </div>

  );
}

export default Learn;