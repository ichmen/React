import React from "react";
export default function Product({ match }) {
  return <div className="product">{match.params.productId}</div>;
}
