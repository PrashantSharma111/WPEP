import React from "react";
import { Container, Row, Col, Card, ListGroup } from "react-bootstrap";
import "./style.css";

function Portf() {
  return (
    <Container className="mt-5">
      {/* Profile Section */}
      <Row className="justify-content-center text-center">
        <Col md={6}>
          <Card className="p-4 shadow profile-card">
            <div className="profile-img-container">
              <Card.Img
                variant="top"
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
                alt="Profile"
                className="profile-pic"
              />
            </div>
            <Card.Body>
              <Card.Title className="name">Prashant</Card.Title>
              <Card.Text className="role">
                React Developer | Frontend Engineer
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* About Me */}
      <Row className="mt-5 fade-in">
        <Col>
          <h2>About Me</h2>
          <p>
            Passionate React developer skilled in building interactive and
            scalable web applications.
          </p>
        </Col>
      </Row>

      {/* Projects */}
      <Row className="mt-4 fade-in">
        <Col>
          <h2>Projects</h2>
          <ListGroup>
            <ListGroup.Item className="project-item">
              <h5>React Chat App</h5>
              <p>
                A real-time chat application using React, Node.js, and
                Socket.io.
              </p>
            </ListGroup.Item>
            <ListGroup.Item className="project-item">
              <h5>Portfolio Website</h5>
              <p>A personal portfolio showcasing React projects and skills.</p>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      {/* Skills */}
      <Row className="mt-4 fade-in">
        <Col>
          <h2>Skills</h2>
          <ListGroup horizontal>
            <ListGroup.Item className="skill-item">React.js</ListGroup.Item>
            <ListGroup.Item className="skill-item">Next.js</ListGroup.Item>
            <ListGroup.Item className="skill-item">Redux</ListGroup.Item>
            <ListGroup.Item className="skill-item">Tailwind CSS</ListGroup.Item>
            <ListGroup.Item className="skill-item">Node.js</ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      {/* Contact */}
      <Row className="mt-4 fade-in">
        <Col>
          <h2>Contact</h2>
          <p>Email: prashant121@example.com</p>
          <p>
            GitHub:{" "}
            <a
              href="https://github.com/harry"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/harry
            </a>
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Portf;
