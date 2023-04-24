import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './style.css'
import Logo from '../images/MEDICS4x.png'
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
          <li><Link eventkey={2} to={'/pages/contact-us'}>CONTACT US</Link></li>
          <li><Link to={'/pages/about-us'}>ABOUT </Link></li> 
          <li><Link to={'/pages/services-page'}>SERVICES</Link> </li> 
        </ul>
      </div>
      <div className="footer-column">
        <ul>
          <li><a href="#">Privacy Policy</a></li>
          <li><a href="#">Licensing</a></li>
          <li><img style={{width: '300px'}} src={Logo} alt="Logo" /></li>
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
