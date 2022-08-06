import React from "react";

export default class Search extends React.Component {
  state = {
    value: "",
  };
  changeHandle = (event) => {
    this.setState({ value: event.target.value });
  };
  clickHandle = (event) => {
    event.preventDefault();
    alert(`Search text: ${this.state.value}`);
  };
  render() {
    return (
      <form className="search">
        <input
          type="text"
          className="search__input"
          onChange={this.changeHandle}
          value={this.state.value}
        />
        <button className="search__button" onClick={this.clickHandle}>
          Search
        </button>
      </form>
    );
  }
}
