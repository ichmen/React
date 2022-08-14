import React from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import User from "./User";

export default function App() {
  return (
    <div className="page">
      <div className="page__content">
        <h1>Users</h1>
        <Router>
          <ul className="navigation">
            <li className="navigation__item">
              <Link to="/users/github">Github</Link>
            </li>
            <li className="navigation__item">
              <Link to="/users/facebook">Facebook</Link>
            </li>
          </ul>
          <Switch>
            <Route exact path="/">
              <span>Select a user please</span>
            </Route>
            <Route exact path="/users/:userId" component={User} />
            <User />
          </Switch>
        </Router>
      </div>
    </div>
  );
}
