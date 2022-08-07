import React from "react";
import Filter from "./Filter";
import User from "./User";

export default class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: props.users,
      count: props.users.lenght,
      filterText: "",
    };
  }
  componentDidMount() {
    this.onChange("");
  }

  onChange = (searchText) => {
    const newArr = this.props.users.filter(({ name }) => {
      return name.toUpperCase().includes(searchText.toUpperCase());
    });
    this.setState({
      users: newArr,
      count: newArr.length,
      filterText: searchText,
    });
  };
  render() {
    return (
      <div>
        <Filter
          onChange={this.onChange}
          filterText={this.state.filterText}
          count={this.state.count}
        />
        <ul className="users">
          {this.state.users.map(({ name, age }, index) => {
            return <User key={index} name={name} age={age} />;
          })}
        </ul>
      </div>
    );
  }
}
