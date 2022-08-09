import React from "react";

export default function UserMenu({ userData }) {
  if (!userData) {
    return null;
  }
  const { name, location, avatar_url } = userData;
  return (
    <div className="menu">
      <span className="menu__greeting">{`Hello, ${userData.name}`}</span>
      <img
        alt="User Avatar"
        src={userData.avatar_url}
        className="menu__avatar"
      />
    </div>
  );
}
