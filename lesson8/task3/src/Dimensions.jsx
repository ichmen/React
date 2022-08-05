import React from "react";

export default class Dimensions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
    this.setTitle();
  }

  componentDidMount() {
    window.addEventListener("resize", this.resizeHandler);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.resizeHandler);
  }

  resizeHandler = (e) => {
    const { innerWidth, innerHeight } = e.target;
    this.setState({ width: innerWidth, height: innerHeight });
    this.setTitle();
  };
  setTitle() {
    document.title = `${this.state.width} x ${this.state.height}`;
  }

  render() {
    return (
      <div className="dimensions">
        {`${this.state.width}px - ${this.state.height}px`}
      </div>
    );
  }
}
