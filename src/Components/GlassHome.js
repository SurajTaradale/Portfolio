import '../Style/GlassHome.css';
import '../Style/Home.css';
import React from 'react';
import logo from '../Assets/img2.JPEG';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from "typewriter-effect";
import { Row, Col } from 'react-bootstrap';
function GlassHome() {

    return (
        <div className="GlassHome">
            <header>
                <div className="logo"><a href="#">Logo</a></div>
                <div>
                    <Row>
                        <Col sm={4}>
                            <div className="container1">
                                <div className=" Imgcontent">
                                    <div className="img-area">
                                        <div className="inner-area">
                                            <img src={logo} alt="" />
                                        </div>
                                    </div>
                                    <div className="social-icons">
                                        <a href="#" className="fb"><i className="fab fa-github"></i></a>
                                        <a href="#" className="twitter"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="#" className="twitter"> <i className="fas fa-envelope-square"></i></a>
                                        <a href="#" className="insta"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col sm={8}>
                            <div className="col-md-8 headName" id="title">
                                <p>Hi,I am Suraj</p>
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString("Web Deveplor")
                                            .pauseFor(1000)
                                            .deleteAll()
                                            .typeString("Web Designer")
                                            .start();
                                    }}
                                />

                                <div className="buttons">
                                    <Row>
                                        <Col>
                                            <button>View CV</button>
                                        </Col>
                                        <Col>
                                            <button>Download CV</button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </header>
        </div>
    );
}

export default GlassHome;