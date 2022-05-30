import React, { useEffect, useState } from "react";
import { deletePost, getPosts } from "../service/postService";
import { getUserById } from "../service/userService";
import PostsTable from "../components/admin/postsTable";
import { paginate } from "../utils/paginate";
import { toast } from "react-toastify";
import _ from "lodash";
import { Container } from "react-bootstrap";

const ManagePosts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" });

  const sorted = _.orderBy(posts, [sortColumn.path], [sortColumn.order]);
  const postsToDisplay = paginate(sorted, currentPage, pageSize);
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

  const handlePageChange = () => {};

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await getPosts();
      let posts = res.data;
      posts.map(async (post) => {
        const res = await getUserById(post.userId);
        post.username = res.data.username;
      });
      setPosts(posts);
    };
    fetchPosts();
  }, []);

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
    </Container>
  );
};

export default ManagePosts;
