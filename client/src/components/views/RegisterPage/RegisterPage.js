import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { registerUser } from "../../../actions/user_action";
import Auth from "../../../hoc/auth";

const RegisterPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [confirmedPassword, setConfirmedPassword] = useState("");
  const dispath = useDispatch();
  const navigate = useNavigate();

  const handleChangeEmail = (event) => {
    setEmail(event.currentTarget.value);
  };

  const handleChangeName = (event) => {
    setName(event.currentTarget.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.currentTarget.value);
  };

  const handleChangeCofirmedPassword = (event) => {
    setConfirmedPassword(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password !== confirmedPassword)
      return alert("The passwords you entered do not match.");

    const body = { email, name, password };

    dispath(registerUser(body)).then((response) => {
      if (!response.payload.success) {
        alert("Failed to sign up");
        return;
      }

      navigate("/login");
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
        <label>Name</label>
        <input type="text" value={name} onChange={handleChangeName}></input>
        <label>Email</label>
        <input type="email" value={email} onChange={handleChangeEmail}></input>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={handleChangePassword}
        ></input>
        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmedPassword}
          onChange={handleChangeCofirmedPassword}
        ></input>
        <br></br>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Auth(RegisterPage, false);
