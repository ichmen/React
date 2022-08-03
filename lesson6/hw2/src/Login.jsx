import React from "react";

export default function Login({ callback }) {
  return (
    <button className="login btn" onClick={callback}>
      Login
    </button>
  );
}
