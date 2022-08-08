import React from "react";
import Filter from "./Filter";
import User from "./User";

export default class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: "",
    };
  }
  onChange = (event) => {
    this.setState({
      filterText: event.target.value,
    });
  };
  render() {
    const newArr = this.props.users.filter(({ name }) =>
      name.toUpperCase().includes(this.state.filterText.toUpperCase())
    );
    return (
      <div>
        <Filter
          onChange={this.onChange}
          filterText={this.state.filterText}
          count={newArr.length}
        />
        <ul className="users">
          {newArr.map(({ name, age }, index) => {
            return <User key={index} name={name} age={age} />;
          })}
        </ul>
      </div>
    );
  }
}
