import React from "react";
import ReactDOM from "react-dom";

const RED = "#f00";
const GREEN = "#0f0";
const BLUE = "#00f";

export default class Colors extends React.Component {
  constructor(props) {
    super(props);
  }

  handler = (color) => {
    // console.log(e.target.style.backgroundColor);
    document.body.style.backgroundColor = color;
  };

  render() {
    return (
      <div className="colors">
        <button
          className="colors__button"
          onClick={() => this.handler(RED)}
          style={{ backgroundColor: RED }}
        ></button>
        <button
          className="colors__button"
          onClick={() => this.handler(GREEN)}
          style={{ backgroundColor: GREEN }}
        ></button>
        <button
          className="colors__button"
          onClick={() => this.handler(BLUE)}
          style={{ backgroundColor: BLUE }}
        ></button>
      </div>
    );
  }
}
