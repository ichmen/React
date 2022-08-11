import React from "react";

export default class Expand extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isVisible: false };
  }
  clickHandler = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">{this.props.title}</span>
          <button
            className="expand__toggle-btn"
            onClick={() => this.clickHandler()}
          >
            <i
              className={
                this.state.isVisible
                  ? "fa-solid fa-chevron-up"
                  : "fa-solid fa-chevron-down"
              }
            ></i>
          </button>
        </div>
        {this.state.isVisible && (
          <div className="expand__content">
            <p>{this.props.children}</p>
          </div>
        )}
      </div>
    );
  }
}
