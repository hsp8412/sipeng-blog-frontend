import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../service/postService";
import { getUserById } from "../service/userService";
import { Col, Container, Row } from "react-bootstrap";
import PostContent from "../components/posts/postContent";
import InfoCard from "../components/infoCard";

const Post = () => {
  let { id } = useParams();
  const [post, setPost] = useState({});
  const [author, setAuthor] = useState({});

  useEffect(() => {
    console.log(id);
    const post = getPostById(id);
    setPost(post);
    console.log(post);
    const author = getUserById(post.userId);
    setAuthor(author);
  }, []);

  return (
    <Container>
      <Row>
        <Col md={9}>
          <PostContent post={post} author={author} />
        </Col>
        <Col md={3}>
          <InfoCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Post;
