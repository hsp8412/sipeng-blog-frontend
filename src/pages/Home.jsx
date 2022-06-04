import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import PostList from "../components/posts/postList";
import InfoCard from "../components/infoCard";
import { getPosts } from "../service/postService";
import _ from "lodash";
import PostFilter from "../components/posts/postFilter";
import MyPagination from "../components/admin/pagination";
import { paginate } from "../utils/paginate";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [activeFilter, setActiveFilter] = useState(null);
  const [activePage, setActivePage] = useState(1);
  const [pageSize, setPageSize] = useState(4);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getPosts();
      console.log(res.data);
      setPosts(res.data);
    };
    fetchPosts();
  }, []);

  const getTags = () => {
    let tags = [];
    posts.map((post) => {
      post.tags.forEach((tag) => {
        if (!tags.includes(tag)) {
          tags.push(tag);
        }
      });
    });
    return tags;
  };

  const tags = getTags();

  let filtered = posts;

  if (activeFilter) {
    filtered = posts.filter((post) => {
      const filter = activeFilter.toLowerCase();
      const tags = post.tags.map((tag) => tag.toLowerCase());
      return tags.includes(filter);
    });
  }

  const paginated = paginate(filtered, activePage, pageSize);

  let display = _.chunk(paginated, 2);

  return (
      <Container>
        <Row className="mt-4">
          <Col md={9}>
            <PostList posts={display} setActiveFilter={setActiveFilter} />
            <MyPagination
                currentPage={activePage}
                pageSize={pageSize}
                itemsCount={filtered.length}
                onPageChange={setActivePage}
            />
          </Col>
          <Col md={3}>
            <InfoCard />
            <PostFilter
                setActiveFilter={setActiveFilter}
                activeFilter={activeFilter}
                tags={tags}
            />
          </Col>
        </Row>
      </Container>
  );
};

export default Home;
