import React from "react";
import UserForm from "./UserForm";

export default class App extends React.Component {
  createUser(user) {
    console.log(user);
  }
  render() {
    return <UserForm onSubmit={this.createUser} />;
  }
}
