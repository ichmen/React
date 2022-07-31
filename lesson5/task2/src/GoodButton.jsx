import React from "react";
import ReactDOM from "react-dom";

export default class GoodButton extends React.Component {
  constructor(props) {
    super(props);
  }
  clickHandler = (e) => {
    alert(e.target.textContent);
  };

  render() {
    return (
      <button className="fancy-button" onClick={this.clickHandler}>
        click me
      </button>
    );
  }
}
