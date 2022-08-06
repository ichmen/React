import React from "react";

export default class ConnectionStatus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: "online",
    };
  }

  componentDidMount() {
    window.addEventListener("online", this.handler);
    window.addEventListener("offline", this.handler);
  }

  componentWillUnmount() {
    window.removeEventListener("online", this.handler);
    window.removeEventListener("offline", this.handler);
  }

  handler = (e) => {
    this.setState({ status: e.type });
  };

  render() {
    return (
      <div className={`status status_${this.state.status}`}>
        {this.state.status}
      </div>
    );
  }
}
