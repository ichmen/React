import React from "react";
import "./avatar.scss";

export default function Avatar(props) {
  return <img className="avatar" src={props.avatarUrl} alt={props.name} />;
}
