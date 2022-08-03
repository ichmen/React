import React from "react";
import ReactDOM from "react-dom";
import Status from "./Status";
import "./index.scss";

const rootElem = document.querySelector("#root");
ReactDOM.render(<Status className="status" isOnline={false} />, rootElem);
