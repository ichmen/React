import React from "react";

export default function SearchBar({ filterText, onChange, onClick }) {
  return (
    <form>
      <input
        type="text"
        placeholder="serch"
        value={filterText}
        onChange={(e) => onChange(e)}
      ></input>
      <p>
        <input type="checkbox" onClick={(e) => onClick(e)} /> Only show products
        in stock
      </p>
    </form>
  );
}
