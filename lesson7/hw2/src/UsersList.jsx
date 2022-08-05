import React from "react";
import User from "./User";
import Pagination from "./Pagination";
// import users from "./users";

class UsersList extends React.Component {
  constructor(props) {
    super(props);
    console.log(props.users);
  }
  render() {
    return (
      <div>
        <Pagination {goPrev, goNext, currentPage, totalItems, itemsPerPage}/>
        <ul>
          <User />
        </ul>
      </div>
    );
  }
}

export default UsersList;
