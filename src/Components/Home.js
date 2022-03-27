import '../Style/Home.css';
import React from 'react';
import logo from '../Assets/img2.JPEG';
import 'bootstrap/dist/css/bootstrap.min.css';
import Typewriter from "typewriter-effect";
import { Row, Col } from 'react-bootstrap';
import CV from '../Assets/Surajcv.pdf';
import apk from '../Assets/Suraj Taradale.apk'
function Home() {
    return (
        <div id="home">
            <div className="Home " style={{ height: '100%' }}>
                <div>
                    <Row>
                        <Col sm={4}>
                            <div className="container1">
                                <div className=" Imgcontent">
                                    <div className="img-area slide" style={{animationDelay:'0.1s'}}>
                                        <div className="inner-area">
                                            <img src={logo} alt="" />
                                        </div>
                                    </div>
                                    <div className="social-icons">  
                                        <a href="https://github.com/SurajTaradale" className="fb view-animation" target='blanck' style={{animationDelay:'1.0s'}}><i className="fab fa-github"></i></a>
                                        <a href="https://www.linkedin.com/in/suraj-taradale-ab124b197/" target='blanck' className="twitter view-animation" style={{animationDelay:'1.2s'}}><i className="fab fa-linkedin-in"></i></a>
                                        <a href="mailto:surajtaradale@gmail.com" className="twitter view-animation" target='blanck' style={{animationDelay:'1.4s'}}> <i className="fas fa-envelope-square" ></i></a>
                                        <a href="https://www.instagram.com/s_u_r_a_j.8002/" className="insta view-animation" target='blanck' style={{animationDelay:'1.6s'}}><i className="fab fa-instagram" ></i></a>
                                    </div>
                                </div>

                            </div>
                        </Col>
                        <Col sm={8}>
                            <div className="headName " id="title">
                                <p className='Name'>Hi, I am Suraj</p>
                                <Typewriter
                                    className='righttoleft'
                                    style={{animationDelay:'1.0s'}}
                                    onInit={(typewriter) => {
                                        typewriter
                                            .typeString("Web Developer")
                                            .pauseFor(1000)
                                            .deleteAll()
                                            .typeString("Web Designer")
                                            .start(1000);
                                    }}
                                />
                                <div className="buttons">
                                    <Row>
                                        <Col>
                                            <a href={apk} download><button className='righttoleft' style={{animationDelay:'0.5s'}}><i className="fa fa-download" aria-hidden="true" style={{marginRight:'2%'}}></i>Portfolio App</button></a>
                                        </Col>
                                        <Col>
                                            <a href={CV} download><button className='righttoleft' style={{animationDelay:'1.0s'}}><i className="fa fa-download" aria-hidden="true" style={{marginRight:'2%'}}></i>Resume</button></a>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}

export default Home;
