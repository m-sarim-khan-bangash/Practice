import React, { useContext } from "react";
import GrandChild from "./GrandChild";
import { GlobalInfo } from "./App";

const Child = () => {
  const { color } = useContext(GlobalInfo);
  console.log(color);

  return (
    <>
      <h1 style={{ color: color }}>Child Component</h1>
      <GrandChild />
    </>
  );
};

export default Child;
