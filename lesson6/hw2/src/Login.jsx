import React from "react";

export default function Login({ onLogin }) {
  return (
    <button className="login btn" onClick={onLogin}>
      Login
    </button>
  );
}
