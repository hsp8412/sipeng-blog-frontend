import React, { useEffect, useState } from "react";
import { deletePost, getPostsAndAuthor } from "../../service/postService";
import PostsTable from "../../components/admin/postsTable";
import { paginate } from "../../utils/paginate";
import { toast } from "react-toastify";
import _ from "lodash";
import { Button, Container } from "react-bootstrap";
import MyPagination from "../../components/admin/pagination";
import { Link } from "react-router-dom";
import DeleteConfirm from "../../components/admin/deleteConfirm";
import { logout } from "../../service/authService";

const ManagePosts = () => {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(4);
  const [sortColumn, setSortColumn] = useState({ path: "title", order: "asc" });
  const [postDeleting, setPostDeleting] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

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

  const handleDelete = (post) => {
    setPostDeleting(post);
    setShowDeleteModal(true);
  };

  const handleLogOut = () => {
    logout();
    window.location = "/login";
  };

  const handleConfirmDelete = async () => {
    try {
      await deletePost(postDeleting._id);
      window.location.reload();
      toast.success("The post has been deleted.");
    } catch (ex) {
      toast("An error occurs when deleting the post.");
    }
  };

  const handleModalClose = () => {
    setShowDeleteModal(false);
  };

  const handleEdit = (post) => {
    window.location = `/admin/post/${post._id}`;
  };

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
      <Link to="/admin/new-post">
        <Button variant="primary">New Post</Button>
      </Link>
      <Button variant="warning mx-2" onClick={handleLogOut}>
        Log Out
      </Button>
      <DeleteConfirm
        show={showDeleteModal}
        handleClose={handleModalClose}
        handleConfirmDelete={handleConfirmDelete}
      />
    </Container>
  );
};

export default ManagePosts;
