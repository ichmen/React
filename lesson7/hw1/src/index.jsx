import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import TransactionsList from "./TransactionsList";
import transactions from "./transactions.js";

const rootElem = document.querySelector("#root");
ReactDOM.render(<TransactionsList transactions={transactions} />, rootElem);
