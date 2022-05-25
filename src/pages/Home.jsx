import React from "react";
import { Col, Row } from "react-bootstrap";
import PostList from "../components/posts/postList";
import InfoCard from "../components/infoCard";

const Home = () => {
  return (
    <Row className="mt-4">
      <Col>
        <PostList />
      </Col>
      <Col>
        <InfoCard />
      </Col>
    </Row>
  );
};

export default Home;
