import React from "react";
import "./comments.scss";

import UserInfo from "./UserInfo.jsx";

function Comment(props) {
  console.log(props);
  return (
    <div className="comment">
      <UserInfo user={props.author} />
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{props.date}</div>
    </div>
  );
}

export default Comment;
