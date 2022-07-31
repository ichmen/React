import React from "react";
import ReactDOM from "react-dom";

export default function GoodButtom() {
  return (
    <button className="fancy-button" onClick={() => alert("Good job!")}>
      click me
    </button>
  );
}
