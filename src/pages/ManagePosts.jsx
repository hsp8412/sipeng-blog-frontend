import React, { useEffect, useState } from "react";
import { deletePost, getPostsAndAuthor } from "../service/postService";
import PostsTable from "../components/admin/postsTable";
import { paginate } from "../utils/paginate";
import { toast } from "react-toastify";
import _ from "lodash";
import { Button, Container } from "react-bootstrap";
import MyPagination from "../components/admin/pagination";
import { Link } from "react-router-dom";

const ManagePosts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" });

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPostsAndAuthor();
      setPosts(posts);
    };
    fetchPosts();
  }, []);

  const sorted = _.orderBy(posts, [sortColumn.path], [sortColumn.order]);
  const postsToDisplay = paginate(sorted, currentPage, pageSize);
  console.log(postsToDisplay);
  const totalCount = posts.length;

  const handleSort = (sortColumn) => {
    setSortColumn(sortColumn);
  };

  const handleDelete = async (post) => {
    const originalPosts = posts;
    const updatedPosts = originalPosts.filter((p) => p._id !== post._id);
    setPosts(updatedPosts);

    try {
      await deletePost(post._id);
    } catch (ex) {
      if (ex.response && ex.response.status === 404)
        toast.error("This movie has already been deleted.");
      setPosts(updatedPosts);
    }
  };

  const handleEdit = () => {};

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  if (totalCount === 0)
    return <p className="text">There is no post to be shown.</p>;
  return (
    <Container>
      <p className="text">Showing {totalCount} post(s). </p>
      <PostsTable
        posts={postsToDisplay}
        sortColumn={sortColumn}
        onDelete={handleDelete}
        onSort={handleSort}
        onEdit={handleEdit}
      />
      <MyPagination
        currentPage={currentPage}
        itemsCount={totalCount}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
      <Link to="/new-post">
        <Button variant="primary">New post</Button>
      </Link>
    </Container>
  );
};

export default ManagePosts;
