import React from 'react'
import {Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Logo from '../images/medics4m.png'

const NavBar = () =>{
    return (
        <Navbar collapseOnSelect expand="lg" variant="dark" bg="none" >
          <Container >
            <Navbar.Brand href="/"><img style={{width: '100px'}} src={Logo} alt="Logo" /></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ms-auto">
                {/* //login link/ */}
                      
                <Link className='nav-link' to={'/pages/about-us'}>
                  About Us
                </Link>

                <Link className='nav-link' to={'/pages/services-page'}>
                  Services
                </Link>
                 
                <Link className='nav-link' eventkey={2} to={'/pages/contact-us'}>
                  Contact Us
                </Link>           
    
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
}

export default NavBar