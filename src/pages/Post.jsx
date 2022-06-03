import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById } from "../service/postService";
import { getUserById } from "../service/userService";
import { Col, Container, Row } from "react-bootstrap";
import PostContent from "../components/posts/postContent";
import InfoCard from "../components/infoCard";
import { Utterances } from "utterances-react-component";
import NotFound from "./notFound";

const Post = () => {
  let { id } = useParams();
  const [post, setPost] = useState({});
  const [author, setAuthor] = useState({});

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const post = await getPostById(id);
        setPost(post.data);
        const author = await getUserById(post.data.userId);
        setAuthor(author.data);
      } catch (ex) {
        if (ex.response && ex.response.status === 404) {
          window.location = "/404";
        }
      }
    };
    fetchPost();
  }, []);

  return (
    <Container>
      <Row>
        <Col md={9}>
          <PostContent post={post} author={author} />
          <Utterances
            repo="hsp8412/utterances-comments"
            theme="github-light"
            issueTerm="pathname"
          />
        </Col>
        <Col md={3}>
          <InfoCard />
        </Col>
      </Row>
    </Container>
  );
};

export default Post;
