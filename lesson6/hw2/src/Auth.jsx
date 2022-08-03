import React from "react";
import Login from "./Login";
import Logout from "./Logout";
import Spinner from "./Spinner";

export default class Auth extends React.Component {
  state = {
    isLogged: false,
    spinner: false,
  };
  handler() {
    if (this.state.isLogged) {
      this.setState({ isLogged: !this.state.isLogged });
    } else {
      this.setState({ spinner: !this.state.spinner });
      setTimeout(() => {
        this.setState({
          spinner: !this.state.spinner,
          isLogged: !this.state.isLogged,
        });
      }, 2000);
    }
  }
  render() {
    return this.state.spinner ? (
      <Spinner size={20} />
    ) : this.state.isLogged ? (
      <Logout callback={() => this.handler()} />
    ) : (
      <Login callback={() => this.handler()} />
    );
  }
}
