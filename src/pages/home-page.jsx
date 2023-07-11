import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap';
import NavBar from '../components/nav-bar'
import Footer from '../components/Footer'
import image2 from '../images/bg11.png'
import image1 from '../images/bg2.png'
import {LandDiv, ServiceDiv, ServiceLink, AboutCol, AboutSection, AboutRow, LastContainer, HomeButton, OverLay, LandBtn} from '../styledcomponents/home-styled'
import Aos from 'aos'
import {MdKeyboardArrowRight} from 'react-icons/md'
import '../index.css'


const HomePage= () => {
  const services = ['Transit medical care', 'Medical evaluation', 'Airline medical form completion', 'Travel itinerary'];
  const [currentService, setCurrentService] = React.useState(services[0]);

  React.useEffect(()=>{
    Aos.init({duration:1500});
  }, []);

  React.useEffect(() => {
    const intervalId = setInterval(rotateServices, 2000);
    return () => clearInterval(intervalId);
  });

  const rotateServices = () => {
    const currentIndex = services.indexOf(currentService);
    const nextIndex = (currentIndex + 1) % services.length;
    setCurrentService(services[nextIndex]);
  };

  return (
    <div>

      <LandDiv>
        <OverLay>
        <NavBar/>
        <Container>
          <Row className='align-items-center'>

            <Col sm={12} md={6}className=" intro align-self-center">
              <h1>Access to top-quality and skilled medical escorts.</h1>
              <p className="lead">We oﬀer dedicated medical patient
assistants that are highly skilled to escort patients aboard commercial ﬂights thus
ensuring stress free travel.</p>
              <LandBtn variant="primary" to={'/pages/contact-us'}>Book an Appointment</LandBtn>
            </Col>

            <Col md={6} className="image align-self-center">
             <img  src={image1} alt="About Us" className="img-fluid" />
            </Col>

          </Row>
        </Container>
        </OverLay>
      </LandDiv>


      <section className="services-section" style={{backgroundColor:'#faf9f9'}}>
        <Container >
          <ServiceDiv className="text-effect">
          <p>Get Access today to <br />
            <span className="animated-text">{currentService}</span>
            <br />
            <ServiceLink to={'/pages/services-page'}>
                  See all our services <MdKeyboardArrowRight className='service-icon'/>
              </ServiceLink> 
          </p> 
           
          </ServiceDiv>
        
        </Container>
      </section>


      <AboutSection className="about-section">
        <Container>
          <AboutRow >

          <AboutCol data-aos="fade-left" md={6} sm={12} className="align-self-center ">
              <img  src={image2} alt="About Us"  style={{maxWidth:'100%'}}/>
            </AboutCol>

            <AboutCol data-aos="zoom-in" md={6} sm={12} className="align-self-center text-center text-md-start">
              <h2>About Us</h2>
              <p>Medics on Board was established in 2022 to deliver high quality, safe, fast and cost effective ways to transfer sick ones globally.  We offer dedicated medical patient assistants that are highly skilled to escort patients aboard commercial flights thus ensuring stress free travel. 
              </p>
              <HomeButton to={'/pages/about-us'}>
                  Read More
                </HomeButton>
            </AboutCol>
            
          </AboutRow>
        </Container>
      </AboutSection>

      <section>
        <LastContainer data-aos="zoom-in">
        <Row>
          <Col xs={12} md={{ span: 8, offset: 2 }} className="text-center mb-4">
            <h2 style={{fontSize: '2.5rem'}}>Why Choose Us</h2>
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