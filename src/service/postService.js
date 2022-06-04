import http from "./httpService";
import { getUserById } from "./userService";
const apiUrl = process.env.REACT_APP_URL_BASE;

const apiEndpoint = apiUrl + "/post";

function postUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getPosts() {
  return http.get(apiEndpoint);
}

export async function getPostsAndAuthor() {
  const res = await http.get(apiEndpoint);
  let posts = [...res.data];
  for (let post of posts) {
    const res = await getUserById(post.userId);
    post.username = res.data.username;
  }
  return posts;
}

export function getPostById(postId) {
  return http.get(postUrl(postId));
}

export function createPost(post) {
  return http.post(apiEndpoint, post);
}

export function updatePost(post, id) {
  return http.put(postUrl(id), post);
}

export function deletePost(postId) {
  return http.delete(postUrl(postId));
}
