import React from "react";
import Transaction from "./Transaction";

export default function TransactionsList(props) {
  const numberFormatter = new Intl.NumberFormat("en-GB");
  const transactions = [...props.transactions];
  transactions.forEach((element) => {
    element.amount = numberFormatter.format(element.amount);
    element.rate = numberFormatter.format(element.rate);
  });
  return (
    <ul className="transactions">
      {transactions.map((transaction) => (
        <Transaction key={transaction.id} {...transaction} />
      ))}
    </ul>
  );
}
