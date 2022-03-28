import React from "react";
import { Link } from "react-router-dom";
import Classes from "./classes";
import Styles from "./styles";
import ReduxExamples from "./redux-examples";

const Labs = () => {
  return (
    <>
      <h1>Hello World!</h1>
      <Link to="/hello">Labs</Link> |<Link to="/tuiter">Tuiter</Link>
      <ReduxExamples />
    </>
  );
};

export default Labs;
