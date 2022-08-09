import React from "react";

export default function UserMenu({ userData: { name, avatar_url } }) {
  return (
    <div className="menu">
      <span className="menu__greeting">{`Hello, ${name}`}</span>
      <img alt="User Avatar" src={avatar_url} className="menu__avatar" />
    </div>
  );
}
