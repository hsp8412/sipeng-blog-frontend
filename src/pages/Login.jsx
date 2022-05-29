import React, { useState } from "react";
import LoginForm from "../components/login/loginForm";
import InvalidLoginCredential from "../components/login/invalidCredential";

const Login = () => {
  const [invalidShow, setInvalidShow] = useState(false);
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
