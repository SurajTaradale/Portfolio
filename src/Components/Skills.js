import React, { useState } from 'react';
import '../Style/Skills.css';
import css from '../Assets/css.jpg';
import html from '../Assets/html.png';
import js from '../Assets/js.png';
import perl from '../Assets/perl.png';
import sql from '../Assets/sql.png';
import reactjs from '../Assets/reactjs.png';
import { Row, Col } from 'react-bootstrap';
import "react-step-progress-bar/styles.css";
function Skills() {
    const [HTML, setHTML] = useState("skillsinfo1 righttoleft");
    const [CSS, setCSS] = useState("skillsinfo");
    const [JS, setJS] = useState("skillsinfo");
    const [SQL, setSQL] = useState("skillsinfo");
    const [Perl, setPerl] = useState("skillsinfo");
    const [ReactJS, setReactJS] = useState("skillsinfo");

    const HTMLcard = (e) => {

        setCSS('skillsinfo');
        setJS('skillsinfo');
        setSQL('skillsinfo');
        setPerl('skillsinfo');
        setReactJS('skillsinfo');

        setHTML('skillsinfo1 righttoleft');


    }
    const CSScard = (e) => {
        setHTML('skillsinfo');
        setJS('skillsinfo');
        setSQL('skillsinfo');
        setPerl('skillsinfo');
        setReactJS('skillsinfo');

        setCSS('skillsinfo1 righttoleft');

    }
    const JScard = (e) => {
        setHTML('skillsinfo');
        setCSS('skillsinfo');
        setSQL('skillsinfo');
        setPerl('skillsinfo');
        setReactJS('skillsinfo');

        setJS('skillsinfo1 righttoleft');

    }
    const Sqlcard = (e) => {
        setHTML('skillsinfo');
        setCSS('skillsinfo');
        setJS('skillsinfo');
        setPerl('skillsinfo');
        setReactJS('skillsinfo');

        setSQL('skillsinfo1 righttoleft');

    }
    const Perlcard = (e) => {
        setHTML('skillsinfo');
        setCSS('skillsinfo');
        setJS('skillsinfo');
        setSQL('skillsinfo');
        setReactJS('skillsinfo');

        setPerl('skillsinfo1 righttoleft');

    }
    const Reactjscard = (e) => {
        setHTML('skillsinfo');
        setCSS('skillsinfo');
        setJS('skillsinfo');
        setSQL('skillsinfo');
        setPerl('skillsinfo');

        setReactJS('skillsinfo1 righttoleft');

    }
    return (
        <div className=' skills' id='skills'>
            <div className="SkillsTitle"> <p>Skills</p></div>
            <div className="container">
                <Row>
                    <Col sm={4}>

                        <div className='SkillsList'>
                            <div className='card SkillsCard view-animation' onMouseOver={HTMLcard} style={{animationDelay:'1s'}}>

                                <div className="card_image"> <img src={html} alt='HTML' /> </div>

                                {/* <div className="card_title title-white">
                            <p>Card Title</p>
                        </div> */}

                            </div>
                            <div className='card SkillsCard view-animation' onMouseOver={CSScard} style={{animationDelay:'1.4s'}}>
                                <div className="card_image"> <img src={css} style={{ background: 'black', }} alt='CSS' /> </div>
                            </div>
                            <div className='card SkillsCard view-animation' onMouseOver={JScard} style={{animationDelay:'1.8s'}}>
                                <div className="card_image"> <img src={js} style={{ background: 'black', }} alt='JS' /> </div>
                            </div>
                            <div className='card SkillsCard view-animation' onMouseOver={Sqlcard} style={{animationDelay:'2.2s'}}>
                                <div className="card_image view-animation"> <img src={sql} alt='SQL' /> </div>
                            </div>
                            <div className='card SkillsCard view-animation' onMouseOver={Perlcard} style={{animationDelay:'2.8s'}}>
                                <div className="card_image"> <img src={perl} alt='PERL' /> </div>
                            </div>
                            <div className='card SkillsCard view-animation' onMouseOver={Reactjscard} style={{animationDelay:'3.2s'}}>
                                <div className="card_image"> <img src={reactjs} alt='REACT' /> </div>
                            </div>

                        </div>
                    </Col>
                    <Col sm={8}>
                        <div className={HTML} style={{animationDelay:'0.3s'}}>
                            <Row className='skillscard2'>
                                <Col sm={8}>
                                    <div className='SkillName'>
                                        <p className="Title" style={{ color: 'rgb(227, 76, 38)' }}>HTML</p>
                                        <div className="htmlProg ProgWidth">
                                            <div className="p">
                                                <p className='per'>Html</p>
                                                <p className='per'>95%</p>
                                            </div>
                                            <div className="pp">
                                                <div className="skillDiv">
                                                    <span className="skillBar htmlBar" style={{ background: 'rgb(227, 76, 38)' }}></span>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', marginTop: '10%' }}><b>Experience:{' '} </b><p> HTML5 (most recent)</p></div>
                                        </div>

                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className='SkillImg'>
                                        <img loading='lazy' src={html} className='card_image1' width='100%' height='100%' alt='HTML'></img>
                                    </div>
                                </Col>
                            </Row>
                        </div>


                        <div className={CSS} style={{animationDelay:'0.3s'}}>
                            <Row className='skillscard2'>
                                <Col sm={8}>
                                    <div className='SkillName'>
                                        <p className="Title" style={{ color: 'rgb(0, 131, 222)' }}>CSS</p>
                                        <div className="cssProg ProgWidth">
                                            <div className="p">
                                                <p className='per'>Css</p>
                                                <p className='per'>80%</p>
                                            </div>
                                            <div className="pp">
                                                <div className="skillDiv">
                                                    <span className="skillBar cssBar" style={{ background: 'rgb(0, 131, 222)' }}></span>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', marginTop: '10%' }}><b>Experience: </b><p> CSS3 (most recent)</p></div>
                                        </div>

                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className='SkillImg'>
                                        <img loading='lazy' src={css} className='card_image1' width='100%' height='100%' alt='CSS'></img>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={JS} style={{animationDelay:'0.3s'}}>
                            <Row className='skillscard2'>
                                <Col sm={8}>
                                    <div className='SkillName'>
                                        <p className="Title" style={{ color: '#f7bd1beb' }}>JavaScript</p>
                                        <div className="jsProg ProgWidth">
                                            <div className="p">
                                                <p className='per'>JavaScript</p>
                                                <p className='per'>75%</p>
                                            </div>
                                            <div className="pp">
                                                <div className="skillDiv">
                                                    <span className="skillBar jsBar" style={{ background: '#f7bd1beb' }}></span>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', marginTop: '10%' }}><b>Experience: </b><p> ES6, DOM (most recent)</p></div>
                                        </div>

                                    </div>
                                </Col>
                                <Col  sm={4} >
                                    <div className='SkillImg'>
                                        <img loading='lazy' src={js} className='card_image1' width='100%' height='100%' alt='JS'></img>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={SQL} style={{animationDelay:'0.3s'}}>
                            <Row className='skillscard2'>
                                <Col sm={8}>
                                    <div className='SkillName'>
                                        <p className="Title" style={{ color: '#007bff' }}>DataBase</p>
                                        <div className="sqlProg ProgWidth">
                                            <div className="p">
                                                <p className='per'>Sql</p>
                                                <p className='per'>65%</p>
                                            </div>
                                            <div className="pp">
                                                <div className="skillDiv">
                                                    <span className="skillBar sqlBar" style={{ background: '#007bff' }}></span>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', marginTop: '10%' }}><b>Experience: </b><p> Perl</p></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className='SkillImg'>
                                        <img loading='lazy' src={sql} className='card_image1' width='100%' height='100%' alt='SQL'></img>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={Perl} style={{animationDelay:'0.3s'}}>
                            <Row className='skillscard2'>
                                <Col sm={8}>
                                    <div className='SkillName'>
                                        <p className="Title" style={{ color: 'rgb(0, 131, 222)' }}>Perl</p>
                                        <div className="Perl ProgWidth">
                                            <div className="p">
                                                <p className='per'>Perl</p>
                                                <p className='per'>70%</p>
                                            </div>
                                            <div className="pp">
                                                <div className="skillDiv">
                                                    <span className="skillBar PerlBar" style={{ background: 'rgb(0, 131, 222)' }}></span>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', marginTop: '10%' }}><b>Experience: </b><p> Perl (most recent)</p></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className='SkillImg'>
                                        <img loading='lazy' src={perl} className='card_image1' width='100%' height='100%' alt='PERL'></img>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={ReactJS} style={{animationDelay:'0.3s'}}>
                            <Row className='skillscard2'>
                                <Col sm={8}>
                                    <div className='SkillName'>
                                        <p className="Title" style={{ color: '#31d0f1' }}>React</p>
                                        <div className="reactProg ProgWidth">
                                            <div className="p">
                                                <p className='per'>React</p>
                                                <p className='per'>70%</p>
                                            </div>
                                            <div className="pp">
                                                <div className="skillDiv">
                                                    <span className="skillBar reactBar" style={{ background: '#31d0f1' }}></span>
                                                </div>
                                            </div>
                                            <div style={{ display: 'flex', marginTop: '10%' }}><b>Experience: </b><p> ReactJS,React Native, NextJS</p></div>
                                        </div>
                                    </div>
                                </Col>
                                <Col sm={4}>
                                    <div className='SkillImg'>
                                        <img loading='lazy' src={reactjs} className='card_image1' width='100%' height='100%' alt='REACT'></img>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Skills;