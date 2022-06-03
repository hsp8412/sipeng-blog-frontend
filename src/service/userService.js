import http from "./httpService";
const apiUrl = process.env.REACT_APP_URL_BASE;

const apiEndpoint = apiUrl + "/user";

export function register(user) {
  return http.post(apiEndpoint, {
    email: user.email,
    password: user.password,
    username: user.username,
  });
}

export function getUserById(id) {
  return http.get(`${apiEndpoint}/${id}`);
}
