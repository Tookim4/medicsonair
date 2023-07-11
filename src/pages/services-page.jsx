import React, {useState, useEffect} from 'react'
import axios from 'axios'
import NavBar from '../components/nav-bar'
import Footer from '../components/Footer'
import { Container, Row, Col } from 'react-bootstrap'
import { FaAmbulance } from 'react-icons/fa'
import {FirstDiv, SecondRow, ThirdRow, ServiceDiv} from '../styledcomponents/services-styled'
import { ServiceLink } from '../styledcomponents/home-styled'
import {MdKeyboardArrowRight} from 'react-icons/md'
import AOS from 'aos';
import about from '../images/about.png'
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
import image3 from '../images/image3.png'
import image4 from '../images/image4.png'
import image5 from '../images/image5.png'
import image6 from '../images/image6.png'


const ServicesPage = () => {
  const [error, setError] = useState(null);
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/services?populate=*")
      .then(({ data }) => setServices(data.data))
      .catch((error) => setError(error));
  }, []);

  useEffect(()=>{
    AOS.init({duration:1500});
}, []);

  if (error) {
    // Print errors if any
    return <div>An error occured: {error.message}</div>;
  }

  
  return (
    <div>
      
       
       <FirstDiv>
        {/* <OverLay> */}
       <NavBar/>
        <Col md={6} className="text-center service">
          <h1 className="mb-4">Our Services</h1>
          <h2>No Ordinary Medical Escorts</h2>
          <ServiceLink to={'/pages/contact-us'}>
                  Reach out to us <MdKeyboardArrowRight className='service-icon'/>
          </ServiceLink> 
        </Col>
        {/* </OverLay> */}
      </FirstDiv>


      <div style={{backgroundColor: '#FAF9F9'}}>
        <SecondRow data-aos="zoom-in">
          <Col md={{ span: 8, offset: 2 }} className="text-center">
            <h1 className="mb-4">Expertise and Range of Services</h1>
          </Col>
          <Col md={{ span: 8, offset: 2 }} className="text-center">
            <p className="mb-4">You may need to travel with your sick relative but cannot afford an air ambulance or ground ambulance transport.  Our medical escort is a safe alternative to travel with your patient on a commercial flight as long as they meet airline travel requirements. Rather than attempt to assist a sick or frail patient, reduce medical risks by hiring our service to provide you with a dedicated medical assistant. Our medical staff will provide comfort and assistance to your loved one and give you a stress free flight.On all your trips, your patients’ comfort needs and basic medical needs are attended to by a skilled registered nurse or doctor from the time they leave their country of origin to the time they reach their final destination.
                We travel domestically and internationally on commercial airlines and privately chartered aircrafts.</p>
          </Col>
        </SecondRow>
      </div>
      

     <ServiceDiv>
      <Container>
        {services.map(({ id, attributes }) => (
          <Row key={id} style={{padding: '100px'}}>
            <Col md={6} sm={12}>
              <h2>{attributes.title}</h2>
              <p>{attributes.description}</p>
            </Col>
            <Col>
              <img src={`http://localhost:1337${attributes.image.data.attributes.url}`} alt={attributes.image.data.attributes.name} className="img-fluid"/>     
            </Col>
        </Row>
        ))}
          

        {/* <Row style={{padding: '100px'}}>
          <Col md={6} sm={12} className="order-lg-first">
          <img  src={image2} alt="img1" className="img-fluid" />          
          </Col>
          <Col  className="order-sm-first">
          <h2>Airline medical form completion</h2>
          <p>Our team of medical doctors will oﬀer medical form completion services as provided for by airlines. 
            The forms for ﬁtness to ﬂy will be completed after medical evaluation if and when necessary.</p>
          </Col>
        </Row>

        <Row style={{padding: '100px'}}>
          <Col md={6} sm={12}>
          <h2>Travel itinerary</h2>
          <p>Our team will help you plan your travel. They will assist with advise on suitable airlines, 
            needed documentation for the airport, any necessary medical devices needed for 
            travel as well as necessary prescriptions. They will assist you with 
            booking hospitals, hotels, ambulances and any other services that will make travel with your patient more comfortable.</p>
          </Col>
          <Col>
          <img  src={image3} alt="img1" className="img-fluid" />          
          </Col>
        </Row>

        <Row style={{padding: '100px'}}>
          <Col md={6} sm={12} className="order-lg-first">
          <img  src={image4} alt="img1" className="img-fluid" />          
          </Col>
          <Col className="order-sm-first">
          <h2>Transit medical care</h2>
          <p>Our team will help you to arrange for transit medical care if needed during a layover. 
            They will communicate with relevant airport health services to ensure availability of 
            ambulances, oxygen, medications and any other relevant medical services.</p>
          </Col>
        </Row>

        <Row style={{padding: '100px'}}>
          <Col md={6} sm={12}>
          <h2>Collaboration with health facilities</h2>
          <p>Our team will facilitate communication with health facilities 
            in the destination country to ensure smooth transition and handing over upon arrival.</p>
          </Col>
          <Col>
          <img  src={image5} alt="img1" className="img-fluid" />          
          </Col>
        </Row>

        <Row style={{padding: '100px'}}>
          <Col sm={12} md={6} className="order-lg-first">
          <img  src={image6} alt="img1" className="img-fluid" />          
          </Col>
          <Col className="order-sm-first">
          <h2>On the day of your ﬂight</h2>
          <p>The medical escort will arrive at the patient's location 6 hours before departure time. 
            They will help the patient to pack their relevant medications and medical devices 
            as well as conﬁrm that relevant documentation for travel is available.</p>
          </Col>
        </Row> */}

      </Container>
     </ServiceDiv>
      


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
       
       <Footer/>
       </div>
  )
}

export default ServicesPage