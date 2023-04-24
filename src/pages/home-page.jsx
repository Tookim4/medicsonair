import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import NavBar from '../components/nav-bar'
import Footer from '../components/Footer'
import image2 from '../images/image2.jpg'
import {LandDiv, ServiceCol, ServiceRow, AboutCol, AboutRow, LastContainer, HomeButton, OverLay, LandBtn} from '../styledcomponents/home-styled'
import Aos from 'aos'


const HomePage= () => {
  React.useEffect(()=>{
    Aos.init({duration:1500});
}, []);

  return (
    <div>

      <LandDiv>
        <OverLay>
        <NavBar/>
        <Container>
          <Row>
            <Col md={6} className="text-center intro">
              <h1 style={{fontStyle: 'bold', fontSize: '4.5rem'}}>Medics On Air</h1>
              <p className="lead">We provide top-quality and skilled medical escorts.</p>
              <LandBtn variant="primary" to={'/pages/contact-us'}>Book an Appointment</LandBtn>
            </Col>
          </Row>
        </Container>
        </OverLay>
      </LandDiv>


      <section className="services-section bg-light">
        <Container >
          <ServiceRow  >
            <ServiceCol md={4} className="text-center">
              <h3>Medical evaluation</h3>
              <p>Our team of medical doctors will carry out a comprehensive medical assessment of the patient prior to travel. This will include physical examination and any relevant medical examinations as well as advise on medication and devices needed for travel. </p>
            </ServiceCol>
            <ServiceCol md={4} className="text-center">
              <h3>Airline medical form completion</h3>
              <p>Our team of medical doctors will offer medical form completion services as provided for by airlines.  The forms for fitness to fly will be completed after medical evaluation if and when necessary.</p>
            </ServiceCol>
            <ServiceCol md={4} className="text-center">
              <h3>Travel itinerary</h3>
              <p>Our team will help you plan your travel. They will assist with advise on suitable airlines, needed documentation for the airport, any necessary medical devices needed for travel as well as necessary prescriptions... 
                <HomeButton className='nav-link' to={'/pages/services-page'}>
                  Read More
                </HomeButton>  
              </p>
            </ServiceCol>
          </ServiceRow>
        </Container>
      </section>


      <section className="about-section">
        <Container>
          <AboutRow >
            <AboutCol data-aos="zoom-in" md={6} className="text-center text-md-start">
              <h2>About Us</h2>
              <p>Medics on Board was established in 2022 to deliver high quality, safe, fast and cost effective ways to transfer sick ones globally.  We offer dedicated medical patient assistants that are highly skilled to escort patients aboard commercial flights thus ensuring stress free travel. 
              </p>
              <HomeButton className='nav-link' to={'/pages/about-us'}>
                  Read More
                </HomeButton>
            </AboutCol>
            <AboutCol data-aos="fade-left" md={6} className="d-none d-md-block">
              <img  src={image2} alt="About Us" className="img-fluid" />
            </AboutCol>
          </AboutRow>
        </Container>
      </section>

      <section>
        <LastContainer data-aos="zoom-in">
        <Row>
          <Col xs={12} md={{ span: 8, offset: 2 }} className="text-center mb-4">
            <h2>Why Choose Us</h2>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col xs={12} md={6}>
            <ul className="list-unstyled">
              <li className="d-flex align-items-center mb-3">
                <span className="icon-check-circle mr-3"></span>
                <span>Our medical escort service is safe, fast and cost effective to safely transfer your sick patients across the country or globally. </span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <span className="icon-check-circle mr-3"></span>
                <span>Our skilled personnel will ensure the safety and comfort of your sick loved one before, during and after travel.</span>
              </li>
              <li className="d-flex align-items-center mb-3">
                <span className="icon-check-circle mr-3"></span>
                <span>Our service guarantees you a stress free travel with your sick relative.</span>
              </li>
            </ul>
          </Col>
        </Row>
        </LastContainer>
      </section>
        <Footer/>
    </div>
  )
}

export default HomePage