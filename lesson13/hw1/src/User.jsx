import React from "react";
const baseUrl = "https://api.github.com/users/";
export default class User extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      avatar_url: null,
      name: null,
      location: null,
    };
  }

  // componentDidMount() {
  //   console.log(this.props);
  //   fetch(baseUrl + this.props.match.params.userName)
  //     .then((response) => response.json())
  //     .then(({ avatar_url, name, location }) =>
  //       this.setState({ avatar_url, name, location })
  //     );
  // }

  render() {
    fetch(baseUrl + this.props.match.params.userName)
      .then((response) => response.json())
      .then(({ avatar_url, name, location }) =>
        this.setState({ avatar_url, name, location })
      );
    return (
      <div className="user">
        <img
          alt="User Avatar"
          src={this.state.avatar_url}
          className="user__avatar"
        />
        <div className="user__info">
          <span className="user__name">{this.state.name}</span>
          <span className="user__location">{this.state.location}</span>
        </div>
      </div>
    );
  }
}
