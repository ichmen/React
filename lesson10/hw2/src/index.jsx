import React from "react";
import ReactDOM from "react-dom";
import FilterableProductTable from "./FilterableProductTable";
import products from "./products.js";

const productsSorted = products.sort((a, b) =>
  a.category > b.category ? 1 : -1
);

console.log(productsSorted);
const root = document.querySelector("#root");
ReactDOM.render(<FilterableProductTable products={productsSorted} />, root);
