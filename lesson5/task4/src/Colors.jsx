import React from "react";
import ReactDOM from "react-dom";

const RED = "#f00";
const GREEN = "#0f0";
const BLUE = "#00f";

export default class Colors extends React.Component {
  constructor(props) {
    super(props);
  }

  handler = (e) => {
    // console.log(e.target.style.backgroundColor);
    document.body.style.backgroundColor = e.target.style.backgroundColor;
  };

  render() {
    return (
      <div className="colors">
        <button
          className="colors__button"
          onClick={this.handler}
          style={{ backgroundColor: RED }}
        ></button>
        <button
          className="colors__button"
          onClick={this.handler}
          style={{ backgroundColor: GREEN }}
        ></button>
        <button
          className="colors__button"
          onClick={this.handler}
          style={{ backgroundColor: BLUE }}
        ></button>
      </div>
    );
  }
}
