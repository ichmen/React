import React from "react";
import ReactDOM from "react-dom";
import Clock from "./Clock";

export default function App() {
  return (
    <>
      <Clock offset={3} location="Kiev" />
      <Clock offset={2} location="DD" />
      <Clock offset={1} location="Ab" />
    </>
  );
}
