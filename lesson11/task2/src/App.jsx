import React from "react";
import Dialog from "./Dialog";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { title: "Some text", isOpen: true };
  }

  onClick = () => {
    this.setState({ isOpen: true });
  };
  closeHandler = () => {
    this.setState({ isOpen: false });
  };
  render() {
    return (
      <div class="app">
        <button class="btn" onClick={this.onClick}>
          Show dialog
        </button>

        <Dialog
          title={this.state.title}
          isOpen={this.state.isOpen}
          onClose={this.closeHandler}
        >
          <p>
            Use immutable array methods to work with data. It will help to avoid
            bugs
          </p>
        </Dialog>
      </div>
    );
  }
}
