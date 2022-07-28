import React from "react";
import ReactDOM from "react-dom";
// import { createRoot } from "react-dom/client";

const rootElem = document.querySelector("#root");

const insertElem = (
  <>
    <h1>Search Form</h1>
    <div>
      <input type="text" />
      <button>Search</button>
    </div>
  </>
);

// root = createRoot(rootElem);
// root.render(insertElem);
ReactDOM.render(insertElem, rootElem);
