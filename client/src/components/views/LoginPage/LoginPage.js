import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { loginUser } from "../../../actions/user_action";
import Auth from "../../../hoc/auth";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispath = useDispatch();
  const navigate = useNavigate();

  const handleChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const body = { email, password };

    dispath(loginUser(body)).then((response) => {
      if (!response.payload.loginSuccess) {
        alert("Failed to log in");
        return;
      }

      navigate("/");
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit}
      >
        <label>Email</label>
        <input type="email" value={email} onChange={handleChangeEmail}></input>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={handleChangePassword}
        ></input>
        <br></br>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Auth(LoginPage, false);
