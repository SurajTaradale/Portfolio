import React, { useState } from "react";
import "../Style/Skills.css";

import {listofskillbuttons} from '../Data/SkillsButtonData';
import {cardinfo} from '../Data/SkillsCardData';
import { Row, Col } from "react-bootstrap";
import "react-step-progress-bar/styles.css";
function Skills() {
  const [Active, setActive] = useState("HTML");
  const MouseHoverhandle = (e) => {
    setActive(e.target.alt)
  };
  return (
    <div className=" skills" id="skills">
      <div className="SkillsTitle">
        <p>Skills</p>
      </div>
      <div className="container">
        <Row>
          <Col sm={4}>
            <div className="SkillsList">
              {listofskillbuttons.map((val) => (
                <div
                  key={val.id}
                  className="card SkillsCard view-animation"
                  onMouseOver={MouseHoverhandle}
                  style={{ animationDelay: val.animationDelay }}
                >
                  <div className="card_image">
                    <img src={val.src} alt={val.alt} />
                  </div>
                </div>
              ))}
            </div>
          </Col>
          <Col sm={8}>
            {cardinfo.map((val) => (
              <div
                key={val.id}
                className={Active === val.name ? "skillsinfo1 righttoleft" : "skillsinfo"}
                style={{ animationDelay: "0.3s" }}
              >
                <Row className="skillscard2">
                  <Col sm={8}>
                    <div className="SkillName">
                      <p className="Title" style={{ color: val.color }}>
                        {val.name}
                      </p>
                      <div className={val.className2}>
                        <div className="p">
                          <p className="per">{val.name}</p>
                          <p className="per">{val.percentage}</p>
                        </div>
                        <div className="pp">
                          <div className="skillDiv">
                            <span
                              className={val.bar}
                              style={{ background: val.color }}
                            ></span>
                          </div>
                        </div>
                        <div style={{ display: "flex", marginTop: "10%" }}>
                          <b>Experience: </b>
                          <p> {val.Experience}</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col sm={4}>
                    <div className="SkillImg">
                      <img
                        loading="lazy"
                        src={val.src}
                        className="card_image1"
                        width="100%"
                        height="100%"
                        alt="HTML"
                      ></img>
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Skills;
