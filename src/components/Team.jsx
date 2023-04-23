import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

const Team = ()=> {
  const teamMembers = [
    {
      name: 'Dr. Sammy Mburu',
      position: 'CEO',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Ms. Jackline Malika',
      position: 'COO',
      image: 'https://via.placeholder.com/150',
    },
    {
      name: 'Dr.Esther Nafula',
      position: 'CTO',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <Container>
      <Row>
        <Col md={{ span: 8, offset: 2 }} className="text-center">
          <h1 className="mb-4">Our Team</h1>
        </Col>
      </Row>

      <Row>
        {teamMembers.map((member) => (
          <Col md={4} key={member.name} className="text-center mb-4">
            <Image src={member.image} roundedCircle className="mb-3" />
            <h4>{member.name}</h4>
            <p>{member.position}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Team;
