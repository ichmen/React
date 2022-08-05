import React from "react";
import Clock from "./Clock";

export default class App extends React.Component {
  constructor() {
    super();
  }
  state = {
    working: true,
    isVisible: true,
  };
  cities = [
    {
      location: "Kiev",
      offset: 3,
    },
    {
      location: "London",
      offset: 0,
    },
    {
      location: "New-Yort",
      offset: -7,
    },
  ];
  // componentDidMount() {
  //   this.state.intervalId = setInterval(() => {
  //     this.setState({ working: !this.state.working });
  //   }, 1000);
  // }
  // componentWillUnmount() {
  //   clearInterval(this.state.intervalId);
  // }

  onToggle() {
    this.setState({ isVisible: !this.state.isVisible });
  }

  render() {
    return (
      <>
        <button onClick={() => this.onToggle()}>Toggle</button>
        {this.state.isVisible &&
          this.cities.map((city, index) => (
            <Clock key={index} location={city.location} offset={city.offset} />
          ))}
      </>
    );
  }
}
