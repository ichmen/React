import React from "react";
import ReactDOM from "react-dom";
import moment from "moment";
import Comment from "./Comment.jsx";
const formatDate = (date) => moment(date).format("DD MMM YYYY");

const user = {
  name: "Tom",
  avatarUrl: "https://avatars.githubusercontent.com/u/13440003?s=96&v=4",
};

const rootElem = document.querySelector("#root");
ReactDOM.render(
  <Comment author={user} date={formatDate(new Date())} text="Hi there!" />,
  rootElem
);
