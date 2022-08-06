import React from "react";

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: null,
      name: null,
      location: null,
      isMounted: false,
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/" + this.props.userId)
      .then((response) => response.json())
      .then((data) => {
        const { avatar_url, name, location } = data;
        this.setState({ avatar: avatar_url, name, location, isMounted: true });
      });
  }

  render() {
    return (
      this.state.isMounted && (
        <div className="user">
          <img
            alt="User Avatar"
            src={this.state.avatar}
            className="user__avatar"
          />
          <div className="user__info">
            <span className="user__name">{this.state.name}</span>
            <span className="user__location">{this.state.location}</span>
          </div>
        </div>
      )
    );
  }
}
