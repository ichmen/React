import React, { Component } from "react";
// import ReactDOM, { render } from "react-dom";
import "./counter.scss";

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: props.start,
    };
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1,
      });
    }, 1000);
  }

  render() {
    return <div className="counter">{this.state.counter}</div>;
  }
}
