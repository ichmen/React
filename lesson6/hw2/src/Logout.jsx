import React from "react";

export default function Logout({ callback }) {
  return (
    <button className="logout btn" onClick={callback}>
      Logout
    </button>
  );
}
