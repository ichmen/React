import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import Ggreeting from "./Greeting.jsx";
const rootElem = document.querySelector("#root");
ReactDOM.render(
  <Ggreeting firstName="John" lastName="Doe" birthDate="2010-11-11" />,
  rootElem
);
