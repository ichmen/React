import React from "react";
// import ReactDOM from "react-dom";
import Counter from "./Counter.jsx";

export default function App() {
  return (
    <>
      <Counter start={20} interval={300} />
      <Counter start={26} interval={1300} />
      <Counter start={30} interval={2300} />
    </>
  );
}
