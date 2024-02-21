import React from "react";
import { useState } from "react";

const LeftSlider = (props) => {
  console.log(props);
  return (
    <div
      style={{
        width: "30vw",
        border: "1px solid #FFFFFF",
        height: "100vh",
        overflowY: "scroll",
      }}
    >
      <h1 style={{ fontSize: "140%", margin: "10vh" }}>Pocket Notes</h1>
      <button
        onClick={() => props.handleClick(true)}
        style={{
          borderRadius: "63px",
          background: "blue",
          width: "54px",
          color: "white",
          fontSize: "43px",
          marginTop: "100%",
          marginLeft: "75%",
        }}
      >
        +
      </button>
    </div>
  );
};

export default LeftSlider;
