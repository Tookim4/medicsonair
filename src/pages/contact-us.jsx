import React from 'react'
import NavBar from '../components/nav-bar'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import { FirstDiv, OverLay } from '../styledcomponents/contact-styled';
import {HiPhone} from 'react-icons/hi'
import {TfiEmail} from 'react-icons/tfi'
import {GoLocation} from 'react-icons/go'

const ContactUs = () => {
  return (
    <div>
     <FirstDiv>
        <OverLay>
          <NavBar/>
          <Col md={{ span: 8, offset: 2 }} className="text-center about">
          <h1 className="mb-4">Contact Us</h1>
          <p> Phone <HiPhone/> : +254 704 519 938</p>
          <p> Email <TfiEmail/> : aeromedicskenya@gmail.com</p>
          <h5> <GoLocation/> Headquarters, NAIROBI.</h5>
          <ul>
            <li>Kugeria Court, Suite No. 3</li>
            <li>Ralph Bunche Road</li>
          </ul>
        </Col>
          </OverLay>
      </FirstDiv>
      
      <Container className="my-5">
      <Row>
        <Col md={6}>
          <h3 style={{fontFamily: 'Mirza, cursive', fontSize:'2em'}}>Get in touch,</h3>
          <p>We Thank you for showing interest in MEDICS ON BOARD. <br /> We look forward to build a long term relationship with you and with your company. <br /> You can know more about us through our contacts and a visit to our offices.</p>
          
        </Col>
        <Col md={6}>
          <p>
           <small> Fill out the form below and we'll get back to you as soon as possible.</small>
          </p>
          <Form>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="formBasicSubject">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter subject" />
            </Form.Group>

            <Form.Group controlId="formBasicMessage">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter message" />
            </Form.Group>

            <Button variant="primary" type="submit" style={{margin: '20px 10px'}}>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
    <Footer/>
    </div>
  )
}

export default ContactUs