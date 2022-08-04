import React from "react";
import moment from "moment";

export default function Transactions({ from, to, amount, rate, time }) {
  return (
    <li className="transaction">
      <span className="transaction__date">{moment(time).format("DD MMM")}</span>
      <span className="transaction__time">{moment(time).format("H:mm")}</span>
      <span className="transaction__assets">{`${from} → ${to}`}</span>
      <span className="transaction__rate">
        {new Intl.NumberFormat("en-GB").format(rate)}
      </span>
      <span className="transaction__amount">
        {new Intl.NumberFormat("en-GB").format(amount)}
      </span>
    </li>
  );
}
