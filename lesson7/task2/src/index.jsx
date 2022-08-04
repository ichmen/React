import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import UserList from "./UserList";
import users from "./users.js";

const rootElem = document.querySelector("#root");
ReactDOM.render(<UserList users={users} />, rootElem);
