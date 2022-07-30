import React from "react";
import ReactDOM from "react";
import moment from "moment";

export default function Profile(props) {
  return (
    <>
      <div className="profile__name">
        {`${props.userData.firstName} ${props.userData.lastName}`}
      </div>
      <div className="profile__birth">
        {`Was born ${moment(props.userData.birthDate).format("DD MMM YY")} in ${
          props.userData.birthPlace
        }`}
      </div>
    </>
  );
}
