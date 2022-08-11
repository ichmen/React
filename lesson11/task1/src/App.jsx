import React from "react";
import Numbers from "./Numbers";
import OddNumbers from "./OddNumbers";
import EvenNumbers from "./EvenNumbers";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { seconds: 0, title: "Some text" };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ seconds: (this.state.seconds += 1) });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  secondCounter() {
    this.setState({ seconds: (this.state.seconds += 1) });
  }

  render() {
    return (
      <div className="app">
        <OddNumbers number={this.state.seconds} />

        <EvenNumbers number={this.state.seconds} />

        <Numbers title={this.state.title} number={this.state.seconds} />

        <Numbers title="Just 17" number={17} />
      </div>
    );
  }
}
