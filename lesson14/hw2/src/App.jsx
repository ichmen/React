import React, { useState, useEffect } from "react";
import Clock from "./Clock";

export default function App() {
  const [isVisible, setVisible] = useState(true);

  const clickHandler = () => {
    setVisible(!isVisible);
  };
  return (
    <>
      <Clock location="Kiev" offset="3" isVisible={isVisible} />
      <Clock location="London" offset="0" isVisible={isVisible} />
      <Clock location="New-York" offset="-7" isVisible={isVisible} />

      <button onClick={clickHandler}>CLEAR</button>
    </>
  );
}
