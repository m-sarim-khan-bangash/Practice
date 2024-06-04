import React, { useContext } from "react";
import { GlobalInfo } from "./App";

const GrandChild = () => {
  const { color } = useContext(GlobalInfo);
  return (
    <>
      <h1 style={{ color: color === "red" ? "red" : "blue" }}>
        GrandChild Component {color}{" "}
      </h1>
    </>
  );
};

export default GrandChild;
