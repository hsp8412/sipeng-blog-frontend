import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import InfoCard from "../components/infoCard";
import AboutContent from "../components/about/aboutContent";

const About = () => {
  return (
    <div className="mt-4">
      <Container>
        <Row>
          <Col md={9} xs={12}>
            <AboutContent />
          </Col>
          <Col md={3} xs={12}>
            <InfoCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
