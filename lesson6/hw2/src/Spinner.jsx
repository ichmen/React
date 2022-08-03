import React from "react";

export default function Spinner({ size }) {
  return (
    <span className="spinner" style={{ width: size, height: size }}></span>
  );
}
