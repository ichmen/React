import React from "react";
import UserProfile from "./UserProfile";
import UserMenu from "./UserMenu";

export default class App extends React.Component {
  state = {
    userData: null,
  };
  componentDidMount() {
    fetch("https://api.github.com/users/" + this.props.userName)
      .then((response) => response.json())
      .then(({ name, location, avatar_url }) =>
        this.setState({ userData: { name, location, avatar_url } })
      );
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
