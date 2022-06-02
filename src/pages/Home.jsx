import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PostList from "../components/posts/postList";
import InfoCard from "../components/infoCard";
import "../css/home.css";
import { getPosts } from "../service/postService";
import _ from "lodash";
import PostFilter from "../components/posts/postFilter";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getPosts();
      console.log(res.data);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  let filtered = posts;

  if (activeFilter) {
    filtered = posts.filter((post) => {
      const filter = activeFilter.toLowerCase();
      const tags = post.tags.map((tag) => tag.toLowerCase());
      return tags.includes(filter);
    });
  }

  let display = _.chunk(filtered, 2);
  console.log(display);

  return (
    <Container>
      <Row className="mt-4">
        <Col md={9}>
          <PostList posts={display} />
        </Col>
        <Col md={3}>
          <InfoCard />
          <PostFilter
            setActiveFilter={setActiveFilter}
            activeFilter={activeFilter}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
