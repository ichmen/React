//put your code here
import React, { Component } from "react";
import moment from "moment";
import "./clock.scss";

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

export default class Clock extends Component {
  constructor(props) {
    console.log(props);
    super(props);
    this.state = {
      time: getTimeWithOffset(props.offset),
      location: props.location,
    };
    setInterval(() => {
      this.setState({ time: getTimeWithOffset(props.offset) });
    }, 1000);
  }
  render() {
    return (
      <div className="clock">
        <div className="clock__location">{`${this.state.location}`}</div>
        <div className="clock__time">{`${moment(this.state.time).format(
          "LTS"
        )}`}</div>
      </div>
    );
  }
}

//put your code here
