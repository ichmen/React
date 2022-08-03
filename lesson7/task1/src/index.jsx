import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import NumbersList from "./NumbersList";

const numbers = [1, 2, 3, 4, 5];
const rootElem = document.querySelector("#root");
ReactDOM.render(<NumbersList numbers={numbers} />, rootElem);
