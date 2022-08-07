import React from "react";

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
    const { filterText, count, onChange } = props;

    this.state = {
      count,
      filterText,
      onChange,
    };
    // console.log("Enter F");
  }

  changeHandler = (event) => {
    this.setState({ filterText: event.target.value, count: this.props.count });
    this.state.onChange(event.target.value);
  };

  render() {
    return (
      <div className="filter">
        <span className="filter__count">{this.props.count}</span>
        <input
          type="text"
          className="filter__input"
          value={this.state.filterText}
          onChange={this.changeHandler}
        />
      </div>
    );
  }
}
