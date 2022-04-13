import { SmileOutlined } from "@ant-design/icons";
import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        height: "80px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "1rem",
      }}
    >
      <p>
        {" "}
        Happy Coding
        <SmileOutlined></SmileOutlined>
      </p>
    </div>
  );
};

export default Footer;
