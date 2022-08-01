import React from "react";
import ReactDOM from "react-dom";

export default function Login({ onLogin }) {
  return (
    <button className="btn login" onClick={onLogin}>
      Login
    </button>
  );
}
