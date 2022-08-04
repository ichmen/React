import React from "react";
import moment from "moment";

export default function Transactions({ from, to, amount, rate, time }) {
  const numberFormatter = new Intl.NumberFormat("en-GB");
  //   console.log(numberFormatter.format(amount));
  return (
    <li className="transaction">
      <span className="transaction__date">{moment(time).format("DD MMM")}</span>
      <span className="transaction__time">{moment(time).format("H:mm")}</span>
      <span className="transaction__assets">{`${from} → ${to}`}</span>
      <span className="transaction__rate">{numberFormatter.format(rate)}</span>
      <span className="transaction__amount">
        {numberFormatter.format(amount)}
      </span>
    </li>
  );
}
