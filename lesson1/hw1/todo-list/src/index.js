// should render following html
import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";

// <h1 class="title">Todo List</h1>

const containerElem = document.querySelector("#root");
const insertElem = <h1 className="title">Todo List</h1>;
const root = createRoot(containerElem);
root.render(insertElem);
