import React from "react";
import Expand from "./Expand";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }
  visibleHandler = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };
  render() {
    return (
      <div class="app">
        <Expand
          isVisible={this.state.isVisible}
          clickHandler={this.visibleHandler}
          title="Some text"
        >
          Hooks are a new addition in React 16.8. They let you use state and
          other React features without writing a class.
        </Expand>
      </div>
    );
  }
}
