import React from "react";
import moment from "moment";

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

export default class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.location = props.location;
    this.offset = props.offset;
  }
  state = {
    working: true,
  };

  componentDidMount() {
    this.state.intervalId = setInterval(() => {
      this.setState({ working: !this.state.working });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  render() {
    return (
      <div className="clock">
        <div className="clock__location">{this.location}</div>
        <div className="clock__time">
          {moment(getTimeWithOffset(this.offset)).format("LTS")}
        </div>
      </div>
    );
  }
}
