import React from "react";
import ReactDOM from "react-dom";
import FilterableProductTable from "./FilterableProductTable";
import products from "./products.js";

const root = document.querySelector("#root");
ReactDOM.render(<FilterableProductTable products={products} />, root);
