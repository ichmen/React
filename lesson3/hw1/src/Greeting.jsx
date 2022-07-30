import React from "react";
import ReactDOM from "react";
import moment from "moment";

export default function Ggreeting(props) {
  return (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.lastName}. I'm ${moment(
        new Date()
      ).diff(props.birthDate, "years")} years old`}
    </div>
  );
}
