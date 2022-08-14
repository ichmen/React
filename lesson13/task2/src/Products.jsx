import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import Product from "./Product";

export default function Products() {
  return (
    <div className="page__content">
      <h1>Products</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/products/book">Book</Link>
        </li>
        <li className="navigation__item">
          <Link to="/products/ball">Ball</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/products">
          Select a product please
        </Route>
        <Route exact path="/products/:productId" component={Product} />
      </Switch>
    </div>
  );
}
