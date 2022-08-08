import React from "react";

export default function Square(props) {
  // console.log(props.onClick);
  return (
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}
