import React from "react";
import ReactDOM from "react-dom";
import UsersList from "./UsersList";
import "./index.scss";
import users from "./users.js";

const root = document.querySelector("#root");
ReactDOM.render(<UsersList users={users} />, root);
