import React from "react";

export default class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
  }
  scaleNames = {
    c: "Celsius",
    f: "Fahrenheit",
  };
  handleChange = (e) => {
    // this.setState({ temperature: e.target.value });
    this.props.onTemperatureChange(e.target.value);
  };
  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {this.scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}
