import React, { useEffect, useState } from "react";
const baseUrl = "https://api.github.com/users/";

export default function User({ match }) {
  const [userData, setState] = useState(null);

  useEffect(() => {
    fetch(baseUrl + match.params.userName)
      .then((response) => response.json())
      .then((userData) => setState(userData));
  }, [match.params.userData]);
  console.log(userData);
  return;
  // (
  //   <div className="user">
  //     <img
  //       alt="User Avatar"
  //       src={this.state.avatar_url}
  //       className="user__avatar"
  //     />
  //     <div className="user__info">
  //       <span className="user__name">{this.state.name}</span>
  //       <span className="user__location">{this.state.location}</span>
  //     </div>
  //   </div>
  // );
}
