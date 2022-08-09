import React from "react";
import UserProfile from "./UserProfile";
import UserMenu from "./UserMenu";

export default class App extends React.Component {
  state = {
    userData: null,
  };
  componentDidMount() {
    this.fetchUserData();
  }

  fetchUserData() {
    fetch("https://api.github.com/users/" + this.props.userName)
      .then((response) => response.json())
      .then((userData) => this.setState({ userData }));
  }

  render() {
    const userData = this.state.userData;
    if (!userData) {
      return;
    }
    return (
      <div className="page">
        <header className="header">
          <UserMenu userData={userData} />
        </header>
        <UserProfile userData={userData} />
      </div>
    );
  }
}
