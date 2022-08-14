import React, { useEffect, useState } from "react";
const baseUrl = "https://api.github.com/users/";

export default function User({ match }) {
  const [userData, setState] = useState(null);
  // console.log(match.params.userId);
  useEffect(() => {
    fetch(baseUrl + match.params.userId)
      .then((response) => response.json())
      .then((userData) => setState(userData));
  }, [match.params.userId]);
  console.log(userData);
  if (!userData) {
    return;
  }
  const { avatar_url, name, location } = userData;
  return (
    <div className="user">
      <img alt="User Avatar" src={avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{name}</span>
        <span className="user__location">{location}</span>
      </div>
    </div>
  );
}
