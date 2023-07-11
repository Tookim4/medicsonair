import React from 'react'
import NavBar from '../components/nav-bar'
import Footer from '../components/Footer'
import {SecondRow, FirstDiv, AboutDiv, ValuesDiv, ThirdRow, ThirdRowDiv, SecondSection, SecondSectionCol, SecondSectionDiv, SecondSectionRow} from '../styledcomponents/about-styled'
import { Container, Row, Col, Tab } from 'react-bootstrap';
import image2 from '../images/bg3.png'
import {TiTick} from 'react-icons/ti'
import { IconContext } from 'react-icons';
import { LandBtn } from '../styledcomponents/home-styled';

const AboutUs = () => {
  return (
    <div>
      <FirstDiv>
        {/* <OverLay> */}
        <Container>
          <NavBar/>
          <AboutDiv>
            <h2 className="mb-4">Our vision is to be the leading firm <br /> in provision of skilled medical escorts.</h2>
            <p>We provide the highest quality of stress free travel with patients by assessing patients prior to travel, <br /> organizing travel itinerary, organizing transport services to and from airports, <br /> organizing transit healthcare and providing skilled medical escorts.</p>
            <LandBtn variant="primary" to={'/pages/contact-us'} style={{marginTop: '10px'}}>Reach out</LandBtn>
          </AboutDiv>
          </Container>
          
          
          {/* </OverLay> */}
      </FirstDiv>
      
      <SecondRow>
          <ValuesDiv>
            <Container>
            <ul>
            <h2>Our core values are;</h2>
            <li>Professionalism</li>
            <li>Accountability</li>
            <li>Integrity</li>
            <li>Passion</li>
            <li>Collaboration</li>   
              
            </ul>
            </Container>
          </ValuesDiv>
      </SecondRow>

      <SecondSection>
        <Container>
      <SecondSectionDiv>
      <SecondSectionRow>
          <SecondSectionCol md={6} sm={12}>
          <div>
            <h4>Who needs a medical escort?</h4>
            <p>Any sick person can benefit from having a medical assistant during a flight. Patients who typically beneﬁt include those with :</p>
            <IconContext.Provider value={{color: '#21A179'}}>
            <ul>
              <li><TiTick/>Orthopedic injuries</li>
              <li><TiTick/>Dementia or Alzheimer's patients</li>
              <li><TiTick/>Cancer</li>
              <li><TiTick/>Post-surgery</li>
              <li><TiTick/>Mobility challenges</li>
              <li><TiTick/>Elderly patients</li>
              <li><TiTick/>Sick children</li>
            </ul>
            </IconContext.Provider>
          </div>
          </SecondSectionCol>
          <SecondSectionCol md={6} sm={12}>
            <div>
            <img  src={image2} alt="About Us" className="img-fluid" style={{maxWidth: '400px'}}/>
            </div>
          </SecondSectionCol>
          </SecondSectionRow>
        </SecondSectionDiv>
        </Container>
      </SecondSection>
        
      <ThirdRow>
        <Container>
            <ThirdRowDiv>
              <ul>
                <h4>Requirements for Patients who can travel on commercial flights</h4>
                <li>Patient should be fit to travel on a commercial flight</li>
                <hr />
                <li>Patient should not be aggressive</li>
                <hr />
                <li>If on oxygen should be using 2-3L/min</li>
                <hr />
                <li>Must have a medical form filled out by their primary physician</li>
                <hr />
                <li>Basic medical needs can be met during the flight</li>
                <hr />
                <li>A general discharge summary in cases where the patient is travelling straight from hospital</li>
                <hr />
                <li>Pre-authorization to fly from relevant airline</li>
                <hr />
                <li>Patients can travel on commercial flight</li>
              </ul>
            </ThirdRowDiv>
            </Container>
      </ThirdRow>
     
    

    
      <Footer/>
      </div>
  )
}

export default AboutUs