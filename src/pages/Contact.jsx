import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import InfoCard from "../components/infoCard";
import ContactInfo from "../components/contactInfo";

const Contact = () => {
  return (
    <div className="mt-4">
      <Container>
        <Row>
          <Col md={9}>
            <ContactInfo />
          </Col>
          <Col md={3}>
            <InfoCard />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
