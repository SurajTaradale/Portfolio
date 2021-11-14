import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import '../Style/NavBar.css';
import { Navbar, Nav } from 'react-bootstrap';

function NavBar() {
  const [header, setHeader] = useState("topnav");
  const [linkbtn, setlinkbtn] = useState("navbtn");
  const [logo, setlogo] = useState("logo");

  const listenScrollEvent = (event) => {
    if (window.scrollY < 500) {
      setHeader("topnav");
      setlinkbtn("navbtn");
      setlogo('logo');
    } else if (window.scrollY > 500) {
      setHeader("topnav2");
      setlinkbtn("navbtn2");
      setlogo('logo2');
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);

    // return () =>
    //   window.removeEventListener('scroll', listenScrollEvent);
  }, []);
  return (
    <Navbar bg="light" expand="lg" sticky="top" className={header}>
      <Navbar.Brand href="#home" className={logo}>SDT</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" className="" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto subnavbar">
          <Link className={linkbtn} activeClass="active" to="home" spy={true} smooth={true}>Home</Link>
          <Link className={linkbtn} activeClass="active" to="about" spy={true} smooth={true}>About</Link>
          <Link className={linkbtn} activeClass="active" to="skills" spy={true} smooth={true}>Skills</Link>
          <Link className={linkbtn} activeClass="active" to="Learn" spy={true} smooth={true}>Certificates</Link>
          <Link className={linkbtn} activeClass="active" to="Contact" spy={true} smooth={true}>Contact me</Link>
        </Nav>

      </Navbar.Collapse>
    </Navbar>
  )

}
export default NavBar;