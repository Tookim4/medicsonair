import React from 'react'
import NavBar from '../components/nav-bar'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import { FirstDiv, OverLay } from '../styledcomponents/contact-styled';

const ContactUs = () => {
  return (
    <div>
     <FirstDiv>
        <OverLay>
          <NavBar/>
          <Col md={{ span: 8, offset: 2 }} className="text-center about">
          <h1 className="mb-4">Contact Us</h1>
        </Col>
          </OverLay>
      </FirstDiv>
      
      <Container className="my-5">
      <Row>
        <Col md={6}>
          <p>
            Fill out the form below and we'll get back to you as soon as possible.
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