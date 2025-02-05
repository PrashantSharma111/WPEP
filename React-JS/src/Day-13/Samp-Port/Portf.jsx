import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "./style.css";

function Portf() {
  return (
    <Container className="mt-4">
      <Row className="justify-content-center text-center">
        <Col md={6}>
          <Card className="p-4 shadow">
            <Card.Img
              variant="top"
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="Profile"
              className="profile-pic"
            />
            <Card.Body>
              <Card.Title>Prashant</Card.Title>
              <Card.Text>React Developer | Frontend Engineer</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h2>About Me</h2>
          <p>
            Passionate React developer skilled in building interactive and
            scalable web applications.
          </p>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h2>Projects</h2>
          <ListGroup>
            <ListGroup.Item>
              <h5>React Chat App</h5>
              <p>
                A real-time chat application using React, Node.js, and
                Socket.io.
              </p>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Portfolio Website</h5>
              <p>A personal portfolio showcasing React projects and skills.</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h2>Skills</h2>
          <ListGroup horizontal>
            <ListGroup.Item>React.js</ListGroup.Item>
            <ListGroup.Item>Next.js</ListGroup.Item>
            <ListGroup.Item>Redux</ListGroup.Item>
            <ListGroup.Item>Tailwind CSS</ListGroup.Item>
            <ListGroup.Item>Node.js</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col>
          <h2>Contact</h2>
          <p>Email: prashant121@example.com</p>
          <p>GitHub: github.com/harry</p>
        </Col>
      </Row>
    </Container>
  );
}

export default Portf;
