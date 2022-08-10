import React from "react";
import ReactDOM from "react-dom";
import FilterableProductTable from "./FiltarableProductTable";
import products from "./products.js";

const root = document.querySelector("#root");
ReactDOM.render(<FilterableProductTable products={products} />, root);
