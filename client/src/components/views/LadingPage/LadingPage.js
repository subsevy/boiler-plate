import React from "react";
import { FaCode } from "react-icons/fa";

import Auth from "../../../hoc/auth";

const LadingPage = () => {
  return (
    <div className="app">
      <FaCode style={{ fontSize: "4rem" }} />
      <br />
      <h2>시작 페이지</h2>
    </div>
  );
};

export default Auth(LadingPage, null);
