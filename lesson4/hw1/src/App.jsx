import React from "react";
import ReactDOM from "react-dom";
import Clock from "./Clock";

export default function App() {
  return (
    <>
      <Clock offset={3} city="Kiev" />
      <Clock offset={2} city="DD" />
      <Clock offset={1} city="Ab" />
    </>
  );
}
