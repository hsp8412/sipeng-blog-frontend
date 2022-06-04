import React from "react";
import "../../css/post.css";
import Ellipsis from "react-ellipsis-component";

const Post = ({ post, setActiveFilter }) => {
  return (
    <div className="card post-card mb-3">
      <img className="card-img-top" src={post.coverImg} alt="post-cover" />
      <div className="card-body post-card-content">
        <a href={`/post/${post._id}`} className="post-title-link">
          <h5 className="card-title">{post.title}</h5>
        </a>
        <Ellipsis
          text={post.preview}
          maxLine={2}
          reflowOnResize={true}
          className="post-preview my-2"
        />
        <a href={`/post/${post._id}`} className="post-link">
          Read more
        </a>
        <div className="mt-3">
          {post.tags.map((tag, index) => (
            <button
              className="d-inline mx-1 post-tag"
              onClick={() => setActiveFilter(tag)}
              key={index}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
