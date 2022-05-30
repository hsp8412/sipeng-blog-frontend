import React from "react";
import ReactMarkdown from "react-markdown";
import dayjs from "dayjs";

const PostContent = ({ post, author }) => {
  console.log(author);
  return (
    <div>
      <h2>{post.title}</h2>
      <div className="d-flex align-content-start mt-3">
        <img src={author.avatarUrl} alt="avatar" className="post-avatar" />
        <div className="d-flex flex-column align-items-start justify-content-center mx-3">
          <p className="mb-0 post-info-author">{author.username}</p>
          <p className="mb-0 post-info-date">
            {dayjs(post.createdDate).format("ddd MMM DD YYYY")}
          </p>
        </div>
      </div>
      <ReactMarkdown className="mt-3 post-content text-start">
        {post.content}
      </ReactMarkdown>
    </div>
  );
};

export default PostContent;
