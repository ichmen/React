import React from "react";

export default class UserForm extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    name: "",
    student: false,
    occupation: "",
    about: "",
  };
  changeHandle = (event) => {
    const { name, value, type, checked } = event.target;
    const val = type === "checkbox" ? checked : value;
    this.setState({ [name]: val });
  };

  onSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state);
  };

  render() {
    return (
      <form className="login-form" onSubmit={this.onSubmit}>
        <h1 className="form-title">Profile</h1>
        <div className="form-control">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            className="form-input"
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            onChange={this.changeHandle}
          />
        </div>
        <div className="form-control">
          <label className="form-label" htmlFor="student">
            Student
          </label>
          <input
            className="form-input"
            type="checkbox"
            id="student"
            name="student"
            value={this.state.students}
            onChange={this.changeHandle}
          />
        </div>
        <div className="form-control">
          <label className="form-label" id="occupation" htmlFor="occupation">
            Occupation
          </label>
          <select
            name="occupation"
            className="form-input"
            onChange={this.changeHandle}
          >
            <option value="london">London</option>
            <option value="new-york">New York</option>
            <option value="sidney">Sidney</option>
            <option value="berlin">Berlin</option>
          </select>
        </div>
        <div className="form-control">
          <label className="form-label" id="about" htmlFor="about">
            About
          </label>
          <textarea
            name="about"
            className="form-input"
            onChange={this.changeHandle}
          />
        </div>
        <button className="submit-button" type="submit">
          Submit
        </button>
      </form>
    );
  }
}
