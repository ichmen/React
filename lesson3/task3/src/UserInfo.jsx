import React from "react";
import "./userInfo.scss";
import Avatar from "./Avatar.jsx";

export default function UserInfo(props) {
  console.log(props);
  return (
    <div className="user-info">
      <Avatar avatarUrl={props.user.avatarUrl} name={props.user.name} />
      <div className="user-info__name">{props.user.name}</div>
    </div>
  );
}
