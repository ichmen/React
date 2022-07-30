import React from "react";
import ReactDOM from "react";
import moment from "moment";

export default function Ggreeting(props) {
  return (
    <div className="greeting">
      {`My name is ${props.firstName} ${props.secondName}. I'm ${moment(
        props.birthDate
      ).diff(new Date(), "years")} years old`}
    </div>
  );
}
