import React from "react";
import User from "./User";

export default class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.users = props.users.slice();
    this.state = { mode: "-" };
  }
  handler = () => {
    if (this.state.mode !== "asc") {
      this.users.sort((a, b) => a.age - b.age);
      this.setState({ mode: "asc" });
    } else {
      this.users.sort((a, b) => b.age - a.age);
      this.setState({ mode: "desc" });
    }
    console.log(this.props);
  };

  render() {
    return (
      <div>
        <button className="btn" onClick={this.handler}>
          {this.state.mode}
        </button>
        <ul className="users">
          {this.users.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}
