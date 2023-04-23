import React from 'react'
import NavBar from '../components/nav-bar'
import Footer from '../components/Footer'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { FaAmbulance } from 'react-icons/fa'
import {FirstDiv, ServiceCard, SecondRow, ThirdRow, OverLay} from '../styledcomponents/services-styled'
import AOS from 'aos';


const ServicesPage = () => {
  React.useEffect(()=>{
    AOS.init({duration:1500});
}, []);
  return (
    <div>
      
       
       <FirstDiv>
        <OverLay>
       <NavBar/>
        <Col md={{ span: 8, offset: 2 }} className="text-center service">
          <h1 className="mb-4">Our Services</h1>
        </Col>
        </OverLay>
      </FirstDiv>

      <Container style={{padding: '70px 0 0 0 '}}>
      <Row className="mb-5">

        <Col md={4}>
        <ServiceCard style={{ width: '18rem' }}>
          <i className="fas fa-notes-medical fa-5x mb-3"></i>
          <Card.Body>
            <Card.Title><b>Travel itinerary</b></Card.Title>
            <Card.Text>Our team will help you plan your travel. They will assist with advise on suitable airlines, needed documentation for the airport, any necessary medical devices needed for travel as well as necessary prescriptions.  They will assist you with booking hospitals, hotels, ambulances and any other services that will make travel with your patient more comfortable. </Card.Text>
          </Card.Body>
        </ServiceCard>
        </Col>

        <Col md={4}>
        <ServiceCard style={{ width: '18rem' }}>
          <i className="fas fa-notes-medical fa-5x mb-3"></i>
          <Card.Body>
            <Card.Title><b>Transit medical care</b></Card.Title>
            <Card.Text>Our team will help you to arrange for transit medical care if needed during a layover. They will communicate with relevant airport health services to ensure availability of ambulances, oxygen, medications and any other relevant medical services. </Card.Text>
          </Card.Body>
          </ServiceCard>
        </Col>

        <Col md={4}>
        <ServiceCard style={{ width: '18rem' }}>
          <i className="fas fa-notes-medical fa-5x mb-3"></i>
          <Card.Body>
            <Card.Title><b>Collaboration with health facilities</b></Card.Title>
            <Card.Text>Our team will facilitate communication with health facilities in the destination country to ensure smooth transition and handing over upon arrival.</Card.Text>
          </Card.Body>
        </ServiceCard>
        </Col>

        <Col md={4}>
        <ServiceCard style={{ width: '18rem' }}>
          <i className="fas fa-notes-medical fa-5x mb-3"></i>
          <Card.Body>
            <Card.Title><b>Medical evaluation</b></Card.Title>
            <Card.Text>Our team of medical doctors will carry out a comprehensive medical assessment of the patient prior to travel. This will include physical examination and any relevant medical examinations as well as advise on medication and devices needed for travel. </Card.Text>
          </Card.Body>
        </ServiceCard>
        </Col>

        <Col md={4}>
        <ServiceCard style={{ width: '18rem' }} >
          <i className="fas fa-notes-medical fa-5x mb-3"></i>
          <Card.Body>
            <Card.Title><b>Airline medical form completion</b></Card.Title>
            <Card.Text>Our team of medical doctors will offer medical form completion services as provided for by airlines.  The forms for fitness to fly will be completed after medical evaluation if and when necessary.</Card.Text>
          </Card.Body>
        </ServiceCard>
        </Col>
      </Row>

      


      <SecondRow data-aos="zoom-in">
        <Col md={{ span: 8, offset: 2 }} className="text-center">
          <h1 className="mb-4">Expertise and Range of Services</h1>
        </Col>
        <Col md={{ span: 8, offset: 2 }} className="text-center">
          <p className="mb-4">You may need to travel with your sick relative but cannot afford an air ambulance or ground ambulance transport.  Our medical escort is a safe alternative to travel with your patient on a commercial flight as long as they meet airline travel requirements. Rather than attempt to assist a sick or frail patient, reduce medical risks by hiring our service to provide you with a dedicated medical assistant. Our medical staff will provide comfort and assistance to your loved one and give you a stress free flight.On all your trips, your patients’ comfort needs and basic medical needs are attended to by a skilled registered nurse or doctor from the time they leave their country of origin to the time they reach their final destination.
              We travel domestically and internationally on commercial airlines and privately chartered aircrafts.</p>
        </Col>
      </SecondRow>

      <ThirdRow data-aos="zoom-in">
        <Col md={{ span: 8, offset: 2 }} className="text-center">
          <h1 className="mb-4">Requirements for Patients who can travel on commercial flights</h1>
        </Col>
        <Col md={{ span: 8, offset: 2 }}>
          <ul className="mb-4">
              <li>Must be able to sit upright, unassisted for take-off and landing</li>
              <li>Patient should not be aggressive</li>
              <li>If on oxygen should be using 2-3L/min</li>
              <li>Must have a medical form filled out by their primary physician</li>
              <li>Basic medical needs can be met during the flight</li>
              <li>A general discharge summary in cases where the patient is travelling straight from hospital</li>
              <li>Pre-authorization to fly from relevant airline</li>
          </ul>
        </Col>
      </ThirdRow>

      
       </Container>
       
       <Footer/>
       </div>
  )
}

export default ServicesPage