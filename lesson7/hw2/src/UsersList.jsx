import React from "react";
import User from "./User";
import Pagination from "./Pagination";

// class UsersList extends React.Component {
//   state = {
//     currentPage: 1,
//   };

//   handlerPrevPage = () => {
//     this.setState({ currentPage: this.state.currentPage - 1 });
//   };

//   handlerNextPage = () => {
//     this.setState({ currentPage: this.state.currentPage + 1 });
//   };

//   render() {
//     const { users } = this.props;
//     const { currentPage } = this.state;
//     const itemsPerPage = 3;

//     const indexTo = currentPage * itemsPerPage;
//     const userList = users.slice(indexTo - itemsPerPage, indexTo);

//     return (
//       <div>
//         <Pagination
//           currentPage={this.state.currentPage}
//           goPrev={this.handlerPrevPage}
//           goNext={this.handlerNextPage}
//           totalItems={users.length}
//           itemsPerPage={this.state.itemsPerPage}
//         />
//         <ul className="users">
//           {userList.map(({ name, age, id }) => (
//             <User name={name} age={age} key={id} />
//           ))}
//         </ul>
//       </div>
//     );
//   }
// }
class UsersList extends React.Component {
  constructor(props) {
    super(props);
    this.users = props.users
      .slice()
      .map((element, index) => ({ ...element, id: index }));
  }
  state = {
    currentPage: 1,
  };

  goNext() {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  }
  goPrev() {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  }

  render() {
    const itemsPerPage = 3;

    const { currentPage } = this.state;
    const usersList = this.users.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

    return (
      <div>
        <Pagination
          goPrev={() => this.goPrev()}
          goNext={() => this.goNext()}
          currentPage={currentPage}
          totalItems={users.length}
          itemsPerPage={itemsPerPage}
        />
        <ul>
          {usersList.map((user) => (
            <User key={user.id} {...user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
