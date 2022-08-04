import React from "react";
import Transaction from "./Transaction";

export default function TransactionsList({ transactions }) {
  return (
    <ul className="transactions">
      {transactions.map((transaction) => {
        return <Transaction key={transaction.id} {...transaction} />;
      })}
    </ul>
  );
}
