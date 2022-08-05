import React from "react";
import Transaction from "./Transaction";

export default function TransactionsList(props) {
  const transactions = [...props.transactions];
  const numberFormatter = new Intl.NumberFormat("en-GB");
  // transactions.forEach((element) => {
  //   element.amount = numberFormatter.format(element.amount);
  //   element.rate = numberFormatter.format(element.rate);
  // });
  return (
    <ul className="transactions">
      {transactions.map((transaction) => (
        <Transaction
          key={transaction.id}
          {...transaction}
          amount={numberFormatter.format(transaction.amount)}
          rate={numberFormatter.format(transaction.rate)}
        />
      ))}
    </ul>
  );
}
