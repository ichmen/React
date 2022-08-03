import React from "react";

export default function Logout({ onLogout }) {
  return (
    <button className="logout btn" onClick={onLogout}>
      Logout
    </button>
  );
}
