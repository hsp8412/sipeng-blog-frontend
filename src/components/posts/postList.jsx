import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { getPosts } from "../../service/postService";
import _ from "lodash";
import Post from "./post";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getPosts();
      console.log(res.data);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  let display = _.chunk(posts, 2);
  console.log(display);

  return (
    <Container className="posts-container">
      {display.map((row, index) => (
        <Row key={index}>
          {row.map((post) => (
            <Col md={6}>
              <Post key={post.id} post={post} />
            </Col>
          ))}
        </Row>
      ))}
    </Container>
  );
};

export default PostList;
