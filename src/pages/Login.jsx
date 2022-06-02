import React, { useState } from "react";
import LoginForm from "../components/login/loginForm";
import InvalidLoginCredential from "../components/login/invalidCredential";
import { getAccessJwt } from "../service/authService";

const Login = () => {
  const [invalidShow, setInvalidShow] = useState(false);
  if (getAccessJwt()) {
    window.location = "/admin/posts";
  }
  return (
    <div className="login-page">
      <LoginForm setInvalidShow={setInvalidShow} />
      <InvalidLoginCredential
        show={invalidShow}
        setInvalidShow={setInvalidShow}
      />
    </div>
  );
};

export default Login;
