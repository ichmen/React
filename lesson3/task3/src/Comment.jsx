import React from "react";
import "./comments.scss";

import UserInfo from "./UserInfo.jsx";

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo name={props.user.name} avatarUrl={props.user.avatarUrl} />
      <div className="comment__text">{props.text}</div>
      <div className="comment__date">{props.date}</div>
    </div>
  );
}

export default Comment;
