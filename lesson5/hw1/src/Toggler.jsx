import React from "react";
import ReactDOM from "react-dom";

export default class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = { mode: "Off" };
  }

  handler = () => {
    this.setState({ mode: this.state.mode === "Off" ? "On" : "Off" });
  };

  render() {
    return (
      <div
        className="toggler"
        onClick={this.handler}
      >{`${this.state.mode}`}</div>
    );
  }
}
