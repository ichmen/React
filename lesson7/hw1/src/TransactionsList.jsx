import React from "react";
import Transaction from "./Transaction";

export default class TransactionsList extends React.Component {
  render() {
    return (
      <ul className="transactions">
        {this.props.transactions.slice().map((transaction) => {
          return <Transaction key={transaction.id} {...transaction} />;
        })}
      </ul>
    );
  }
}
