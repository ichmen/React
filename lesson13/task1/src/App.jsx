import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Products from "./Products";
import Contacts from "./Contacts";
import PageNotFound from "./PageNotFound";

export default class App extends React.Component {
  render() {
    return (
      <div className="page">
        <BrowserRouter>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/contacts">
              <Contacts />
            </Route>
            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
