import React from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { FaDumbbell, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import slider from "../assets/images/slider-image1.jpg"
const AboutUsPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <Carousel controls={false} fade={true} indicators={false}>
            <img className="d-block w-100" src={slider} alt="Slider Image 1" />
            <Carousel.Caption className="text-black text-start">
              <h1>About Us</h1>
              <p>Welcome to our online fitness exercise website!</p>
            </Carousel.Caption>
          </Carousel>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Fitness Exercises</Card.Title>
              <Card.Text>
                We provide a wide range of fitness exercises to help you stay
                fit and healthy. From cardio workouts to strength training, our
                exercises are designed to target specific muscles and improve
                overall fitness.
              </Card.Text>
              <Button
                style={{ backgroundColor: "#FF2625", borderColor: "#FF2625" }}
              >
                <Link
                  to="/#exercises"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  View Exercises
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>

        <Col md={6}>
          <Card>
            <Card.Body>
              <Card.Title>Personal Trainers</Card.Title>
              <Card.Text>
                Looking for personalized guidance? Our experienced personal
                trainers are here to help. Book a personal trainer from your
                nearby location and get expert assistance in achieving your
                fitness goals.
              </Card.Text>
              <Button
                style={{ backgroundColor: "#FF2625", borderColor: "#FF2625" }}
              >
                <Link
                  to="/booktrainer"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Book a Trainer
                </Link>
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4 text-center">
        <Col>
          <h2>Why Choose Us?</h2>
          <div>
            <FaDumbbell className="icon" /> Experienced trainers <br />
            <FaDumbbell className="icon" /> Customized workout plans <br />
            <FaDumbbell className="icon" /> State-of-the-art facilities <br />
            <FaDumbbell className="icon" /> Flexible membership options <br />
          </div>
        </Col>
      </Row>

      <Row className="mt-4 text-center">
        <Col>
          <h2>Find Us</h2>
          <p>
            <FaMapMarkerAlt className="icon" /> Lahore Punjab, Pakistan
          </p>
          <p>Contact us at: support@getfit.com</p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUsPage;
