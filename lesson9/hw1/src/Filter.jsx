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
  }

  onChange = (event) => {
    const filterText = event.target.value;
    this.state.onChange(filterText);
    this.setState({ filterText });
  };

  render() {
    return (
      <div className="filter">
        <span className="filter__count">{this.props.count}</span>
        <input
          type="text"
          className="filter__input"
          value={this.state.filterText}
          onChange={this.onChange}
        />
      </div>
    );
  }
}
