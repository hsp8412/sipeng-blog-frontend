import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import PostList from "../components/posts/postList";
import InfoCard from "../components/infoCard";
import "../css/home.css";

const Home = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col md={9}>
          <PostList />
        </Col>
        <Col md={3}>
          <InfoCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
