import React from "react";
import ReactDOM from "react-dom";
import Greeting from "./Greeting";
import Login from "./Login";
import Logout from "./Logout";

export default class Auth extends React.Component {
  state = { isLoggedIn: false };
  handler = () => {
    this.setState({
      isLoggedIn: !this.state.isLoggedIn,
    });
  };
  render() {
    return (
      <div className="panel">
        <Greeting isLoggedIn={this.state.isLoggedIn} />
        {this.state.isLoggedIn ? (
          <Logout onLogout={this.handler} />
        ) : (
          <Login onLogin={this.handler} />
        )}
      </div>
    );
  }
}
