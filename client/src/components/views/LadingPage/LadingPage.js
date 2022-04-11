import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";

import Auth from "../../../hoc/auth";

const LadingPage = () => {
  const navigate = useNavigate();

  const handleClickLogout = () => {
    axios.get("api/users/logout").then((response) => {
      if (!response.data.success) return alert("Failed to log out");

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
      <h2>시작 페이지</h2>
      <button onClick={handleClickLogout}>Logout</button>
    </div>
  );
};

export default Auth(LadingPage, null);
