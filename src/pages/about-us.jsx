import React from 'react'
import NavBar from '../components/nav-bar'
import Footer from '../components/Footer'
import Team from '../components/Team'
import {SecondRow, FirstDiv, OverLay} from '../styledcomponents/about-styled'
import { Container, Row, Col, Tab } from 'react-bootstrap';

const AboutUs = () => {
  return (
    <div>
      <FirstDiv>
        <OverLay>
          <NavBar/>
          <Col md={{ span: 8, offset: 2 }} className="text-center about">
          <h1 className="mb-4">About Us</h1>
        </Col>
          </OverLay>
      </FirstDiv>
      
      <Container>
      <SecondRow>
        <Col md={4}>
          <h3 className="mb-3">Mission</h3>
          <p>To provide the highest quality of stress free travel with patients by assessing patients prior to travel, organizing travel itinerary, organizing transport services to and from airports, organizing transit healthcare and providing skilled medical escorts.</p>
        </Col>
        <Col md={4}>
          <h3 className="mb-3">Vision</h3>
          <p>To be the leading firm in provision of skilled medical escorts.</p>
        </Col>
        <Col md={4}>
          <h3 className="mb-3">Values</h3>
          <ul>
            <li>Professionalism: We adhere to medical ethics in all our transactions</li>
            <li>Accountability: We take responsibility for our individual and collective actions.</li>
            <li>Integrity: We always do the right thing.</li>
            <li>Passion: We are inspired to offer solutions to our clients</li>
            <li>Collaboration: We effectively work with others to achieve set goals</li>
          </ul>
        </Col>
      </SecondRow>
      <Team/>
    </Container>

    
      <Footer/>
      </div>
  )
}

export default AboutUs