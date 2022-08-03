import React from "react";

export default function NumbersList({ numbers }) {
  return (
    <ul>
      {numbers.map((number) => (
        <li key={number}>{number} </li>
      ))}
    </ul>
  );
}
