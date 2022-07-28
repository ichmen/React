import React from "react";
import ReactDom from "react-dom";
import "./index.css";
const rootElement = document.querySelector("#root");

const elem = (
  <div class="greeting">
    <h1 class="greeting__title">Hello, world!</h1>
    <p class="greeting__text">I'm learning React</p>
  </div>
);

// const renderGreeting = (elem) => {
//   const containerElem = document.createElement("div");
//   containerElem.classList.add("greeting");

//   const titleElem = document.createElement("h1");
//   titleElem.classList.add("greeting__title");
//   titleElem.textContent = "Hello, world!";

//   const textElem = document.createElement("p");
//   textElem.classList.add("greeting__text");
//   textElem.textContent = "I am learning React";

//   containerElem.append(titleElem, textElem);

//   elem.append(containerElem);
// };

// renderGreeting(rootElement);

ReactDom.render(elem, rootElement);
