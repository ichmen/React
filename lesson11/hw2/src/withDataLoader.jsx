import React from "react";
import Spinner from "./Spinner";

export function withDataLoader(url) {
  return (Comp) => {
    return class extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          data: null,
        };
      }
      componentDidMount() {
        fetch(url)
          .then((response) => response.json())
          .then((data) => this.setState({ data }));
      }

      render() {
        return this.state.data ? (
          <Comp data={this.state.data} />
        ) : (
          <Spinner size={20} />
        );
      }
    };
  };
}
