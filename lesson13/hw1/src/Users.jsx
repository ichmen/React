import React from "react";
import User from "./User";
import { Link, Route, Switch } from "react-router-dom";

export default function Users() {
  return (
    <div className="page__content">
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/users/github">Github</Link>
        </li>
        <li className="navigation__item">
          <Link to="/users/facebook">Facebook</Link>
        </li>
      </ul>
      <Switch>
        <Route exact path="/users/">
          <span>Select a user please</span>
        </Route>
        <Route exact path="/users/:userName" component={User} />
      </Switch>
    </div>
  );
}
