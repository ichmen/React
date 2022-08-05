import React from "react";
import ReactDOM from "react-dom";
import UsersList from "./UsersList";
import "./index.scss";
import users from "./users";

const rootElem = document.querySelector("#root");
ReactDOM.render(<UsersList users={users} />, rootElem);
