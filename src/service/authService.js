import http from "./httpService";
const accessTokenKey = "token";

const apiUrl = process.env.REACT_APP_URL_BASE;
const apiEndpoint = apiUrl + "/auth";

export async function login(email, password) {
  const res = await http.post(`${apiEndpoint}/login`, {
    email,
    password,
  });
  const { accessToken } = res.data;
  localStorage.setItem(accessTokenKey, accessToken);
}

export function getAccessJwt() {
  return localStorage.getItem(accessTokenKey);
}

export function logout() {
  localStorage.removeItem(accessTokenKey);
}
