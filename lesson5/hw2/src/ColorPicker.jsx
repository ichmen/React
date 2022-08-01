import React from "react";
import ReactDOM from "react-dom";

export default class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: "" };
  }

  handler = (color) => {
    this.setState({ color });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{`${this.state.color}`}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseOver={() => this.handler("Coral")}
            onMouseOut={() => this.handler("")}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseOver={() => this.handler("Aqua")}
            onMouseOut={() => this.handler("")}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseOver={() => this.handler("Bisque")}
            onMouseOut={() => this.handler("")}
          ></button>
        </div>
      </div>
    );
  }
}
