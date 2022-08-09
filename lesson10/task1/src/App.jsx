import React from "react";
import UserProfile from "./UserProfile";
import UserMenu from "./UserMenu";

export default class App extends React.Component {
  componentDidMount() {
    fetch("https://api.github.com/users/" + this.props.userName)
      .then((response) => response.json())
      .then(({ name, location, avatar_url }) =>
        this.setState({ name, location, avatar_url })
      );
  }
  render() {
    if (!this.state) {
      return;
    }
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={this.state} />
        </header>
        <UserProfile userData={this.state} />
      </div>
    );
  }
}
