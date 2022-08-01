import React from "react";
import { ReactDOM } from "react-dom";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.minusHandler = this.minusHandler.bind(this);
  }
  minusHandler() {
    this.setState({
      counter: this.state.counter - 1,
    });
  }
  plusHandler = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  reset() {
    console.log("here");
    this.setState({
      counter: 0,
    });
  }

  render() {
    return (
      <div className="counter">
        <button
          data-action="decrease"
          className="counter__button"
          onClick={this.minusHandler}
        >
          -
        </button>
        <span
          className="counter__value"
          onClick={() => this.reset()}
        >{`${this.state.counter}`}</span>
        <button
          data-action="increase"
          className="counter__button"
          onClick={this.plusHandler}
        >
          +
        </button>
      </div>
    );
  }
}
