import React from "react";
import Message from "./Message";

export default class Page extends React.Component {
  state = {
    text: "",
  };
  handler(text) {
    this.setState({
      text,
    });
  }
  render() {
    return (
      <>
        <Message text={this.state.text} />
        <button
          className="btn"
          onClick={() => this.handler("Hello, world!")}
        ></button>
        <button
          className="btn"
          onClick={() => this.handler("Another exciting text")}
        ></button>
        <button className="btn" onClick={() => this.handler("")}></button>
      </>
    );
  }
}
