import React from "react";
import "../../css/post.css";

const Post = () => {
  return (
    <div className="card post-card">
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" className="btn btn-primary">
          Button
        </a>
      </div>
    </div>
  );
};

export default Post;
