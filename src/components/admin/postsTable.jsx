import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import MyTable from "./myTable";

const PostsTable = ({ posts, onSort, onDelete, onEdit, sortColumn }) => {
  posts.forEach((post) => {
    console.log(post);
    console.log(post.username);
  });
  const columns = [
    {
      path: "title",
      label: "Title ",
      content: (post) => (
        <Link to={`/post/${post._id}`} className="clickable">
          {post.title}
        </Link>
      ),
    },
    { path: "username", label: "Author" },
    { path: "createDate", label: "Create Date", date: true },
    { path: "updateDate", label: "Update Date", date: true },
    {
      key: "edit",
      content: (post) => (
        <Button variant="danger" size="sm" onClick={() => onEdit(post)}>
          Edit
        </Button>
      ),
    },
    {
      key: "delete",
      content: (post) => (
        <Button variant="danger" size="sm" onClick={() => onDelete(post)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <React.Fragment>
      <MyTable
        columns={columns}
        onSort={onSort}
        sortColumn={sortColumn}
        data={posts}
      />
    </React.Fragment>
  );
};

export default PostsTable;
