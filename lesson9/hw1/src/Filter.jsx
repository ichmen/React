import React from "react";

export default class Filter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { filterText, count, onChange } = this.props;
    return (
      <div className="filter">
        <span className="filter__count">{count}</span>
        <input
          type="text"
          className="filter__input"
          onChange={onChange}
          value={filterText}
        />
      </div>
    );
  }
}
