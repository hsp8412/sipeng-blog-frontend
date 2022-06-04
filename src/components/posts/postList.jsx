import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Post from "./post";

const PostList = ({ posts, onFilterSelected }) => {
  return (
    <Container className="posts-container">
      {posts.map((row, index) => (
        <Row key={index}>
          {row.map((post) => (
            <Col md={6} key={post._id}>
              <Post
                key={post.id}
                post={post}
                setActiveFilter={onFilterSelected}
              />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default PostList;
