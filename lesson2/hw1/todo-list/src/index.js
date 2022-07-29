// should render following html
import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import "./index.css";

// <h1 className="title">Todo List</h1>

const containerElem = document.querySelector("#root");
const insertElem = (
  <>
    <h1 className="title">Todo List</h1>
    <main className="todo-list">
      <div className="actions">
        <input className="task-input" type="text"></input>
        <button className="btn create-task-btn">Create</button>
      </div>
      <ul className="list"></ul>
    </main>
  </>
);

const root = createRoot(containerElem);
root.render(insertElem);
