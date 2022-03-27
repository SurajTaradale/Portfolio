import "../Style/Learn.css";
import certificate1 from "../Assets/certificate1.PNG";
import certificate2 from "../Assets/certificate2.png";
import certificate3 from "../Assets/FrontEndCertification.PNG";
import certificate4 from "../Assets/WebResCertification.PNG";
import { Row, Col } from "react-bootstrap";
function Learn() {
  const Certification = [
    {
      id: 1,
      animationDelay: "0.4s",
      src: certificate1,
      url: "https://freecodecamp.org/certification/surajtaradale/javascript-algorithms-and-data-structures",
    },
    {
      id: 2,
      animationDelay: "0.8s",
      src: certificate2,
      url: "",
    },
    {
      id: 3,
      animationDelay: "1.0s",
      src: certificate3,
      url: "https://freecodecamp.org/certification/surajtaradale/front-end-development-libraries",
    },
    {
      id: 4,
      animationDelay: "1.2s",
      src: certificate4,
      url: "https://www.freecodecamp.org/certification/surajtaradale/responsive-web-design",
    },
  ];
  return (
    <div className="Learn" id="Learn">
      <div className="SkillsTitle">
        {" "}
        <p>Certificates</p>
      </div>
      <Row className="certificate">
        {Certification.map((cer) => (
          <Col
            key={cer.id}
            sm={3}
            className="view-animation"
            style={{ animationDelay: cer.animationDelay }}
          >
          <a href={cer.url} target="blank">
            <div className="Aboutimg-area12">
              <div className="Aboutinner-area12">
                <img loading="lazy" src={cer.src} alt="" />
              </div>
            </div>
          </a>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Learn;
