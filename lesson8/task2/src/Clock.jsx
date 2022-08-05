import React from "react";
import moment from "moment";

const getTimeWithOffset = (offset) => {
  const currentTime = new Date();
  const utcOffset = currentTime.getTimezoneOffset() / 60;
  return new Date(
    currentTime.setHours(currentTime.getHours() + offset + utcOffset)
  );
};

export default function Clock({ location, offset }) {
  return (
    <div className="clock">
      <div className="clock__location">{location}</div>
      <div className="clock__time">
        {moment(getTimeWithOffset(offset)).format("LTS")}
      </div>
    </div>
  );
}
