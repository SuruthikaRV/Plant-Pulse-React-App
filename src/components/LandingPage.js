import React from 'react';
import { Carousel, Card, Container, Row, Col } from 'react-bootstrap';
//import './LandingPage.css'; // Ensure you import the CSS file

function LandingPage() {
  return (
    <Container>
      <Carousel className="custom-carousel">
        <Carousel.Item>
          <img className="d-block w-100" src="slide1.jpg" alt="First slide" />
          <Carousel.Caption>
            <h3>Welcome to Your Personalized Garden Guide</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="slide2.jpg" alt="Second slide" />
          <Carousel.Caption>
            <h3>Keep Your Plants Healthy</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src="slide3.jpg" alt="Third slide" />
          <Carousel.Caption>
            <h3>Learn and Grow with Us</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Row className="mt-4">
        <Col md={4} className="mb-4">
          <Card className="custom-card">
            <Card.Body>
              <Card.Title>Why Use This App?</Card.Title>
              <Card.Text>
                Discover the best ways to care for your plants with our comprehensive guide.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="custom-card">
            <Card.Body>
              <Card.Title>Track Your Garden</Card.Title>
              <Card.Text>
                Keep a journal of your plants' growth and progress.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4} className="mb-4">
          <Card className="custom-card">
            <Card.Body>
              <Card.Title>Learn About Medicinal Plants</Card.Title>
              <Card.Text>
                Explore the benefits of various medicinal plants.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default LandingPage;
