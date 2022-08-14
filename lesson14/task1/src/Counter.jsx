import React, { useState } from "react";

export default function Counter() {
  const [value, counter] = useState(0);
  const increment = () => {
    counter(value + 1);
  };
  const decrement = () => {
    counter(value - 1);
  };
  const reset = () => {
    counter(0);
  };

  return (
    <div className="counter">
      <button className="counter__button" onClick={decrement}>
        -
      </button>
      <span className="counter__value" onClick={reset}>
        {value}
      </span>
      <button className="counter__button" onClick={increment}>
        +
      </button>
    </div>
  );
}
