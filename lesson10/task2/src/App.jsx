import React from "react";
import Profile from "./Profile";
import ShoppingCart from "./ShoppingCart";

export default class App extends React.Component {
  state = {
    firstName: "Tom",
    lastName: "Sawer",
  };

  changeHandler = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="page">
        <h1 className="title">{`Hello, ${this.state.firstName} ${this.state.lastName}`}</h1>
        <main className="content">
          <ShoppingCart name={this.state.firstName} />
          <Profile
            userData={{
              firstName: this.state.firstName,
              lastName: this.state.lastName,
            }}
            onChange={this.changeHandler}
          />
        </main>
      </div>
    );
  }
}
