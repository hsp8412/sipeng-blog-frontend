import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { getPosts } from "../../service/postService";
import _ from "lodash";
import Post from "./post";

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(getPosts());
  }, []);

  let display = _.chunk(posts, 2);
  console.log(display);

  return (
    <div>
      {display.map((row, index) => (
        <Row key={index}>
          {row.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </Row>
      ))}
    </div>
  );
};

export default PostList;
