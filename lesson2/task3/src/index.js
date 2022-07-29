import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

const rootElem = document.querySelector("#root");

const renderSeconds = () => {
  const seconds = new Date().getSeconds();
  const insertElem = (
    <div className="seconds" style={styleSelector(seconds)}>
      Now is {seconds}
    </div>
  );
  ReactDOM.render(insertElem, rootElem);

  function styleSelector(seconds) {
    return seconds % 2
      ? { color: "#fff", backgroundColor: "#000" }
      : { color: "#000", backgroundColor: "#fff" };
  }
};

setInterval(() => {
  renderSeconds();
}, 1000);
