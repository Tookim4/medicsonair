import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './style.css'
import Aos from 'aos'


const Footer = () => {
  React.useEffect(()=>{
    Aos.init({duration:1500});
}, []);

  return (
    <footer>
    <div className="footer-columns" data-aos="zoom-in">
      <div className="footer-column">
        <h4>MEET MEDICS ON AIR</h4>
        <ul>
          <li><a href="#">CONTACT US</a></li>
          <li><a href="#">ABOUT US</a></li>
          <li><a href="#">SERVICES</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Column 2</h4>
        <ul>
          <li><a href="#">Link 4</a></li>
          <li><a href="#">Link 5</a></li>
          <li><a href="#">Link 6</a></li>
        </ul>
      </div>
      <div className="footer-column">
          <h2>Visit Us</h2>
          <p>
            Ralph Bunche Road<br />
            Kugeria Court, Suite No 3
          </p>
          <h2>Call Us</h2>
          <p>
            Phone: (254) 704-519938
          </p>
      </div>
    </div>
    <div className="footer-social-icons" data-aos="zoom-in">
      <a href="#"><FaFacebook /></a>
      <a href="#"><FaTwitter /></a>
      <a href="#"><FaInstagram /></a>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2023 KIMUTAITOO. All Rights Reserved.</p>
    </div>
  </footer>
  );
};

export default Footer;
