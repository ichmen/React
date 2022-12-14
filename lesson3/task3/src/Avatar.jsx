import React from "react";
import "./avatar.scss";

export default function Avatar(props) {
  // console.log(props);
  return <img className="avatar" src={props.avatarUrl} alt={props.name} />;
}
