import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getPosts } from "../../service/postService";
import _ from "lodash";
import Post from "./post";

const PostList = ({ posts, setActiveFilter }) => {
  return (
    <Container className="posts-container">
      {posts.map((row, index) => (
        <Row key={index}>
          {row.map((post) => (
            <Col md={6}>
              <Post
                key={post.id}
                post={post}
                setActiveFilter={setActiveFilter}
              />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default PostList;
