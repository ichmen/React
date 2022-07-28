// should render following html
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// <h1 class="title">Todo List</h1>

const containerElem = document.querySelector("#root");
const insertElem = <h1 class="title">Todo List</h1>;

ReactDOM.render(insertElem, containerElem);
