import React from "react";
import "./userInfo.scss";
import Avatar from "./Avatar.jsx";

export default function UserInfo(props) {
  return (
    <div className="user-info">
      <Avatar avatarUrl={props.avatarUrl} name={props.name} />
      <div className="user-info__name">{props.name}</div>
    </div>
  );
}
