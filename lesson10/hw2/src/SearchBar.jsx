import React from "react";

export default function SearchBar({ filterText, onChange, onClick, checked }) {
  return (
    <form>
      <input
        type="text"
        placeholder="serch"
        value={filterText}
        onChange={(e) => onChange(e)}
      ></input>
      <p>
        <input type="checkbox" onChange={(e) => onClick(e)} checked={checked} />{" "}
        Only show products in stock
      </p>
    </form>
  );
}
