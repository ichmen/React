import React, { useState, useEffect } from "react";
import moment from "moment";

export default function Clock({ location, offset, isVisible }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [isVisible]);

  const getTimeWithOffset = (offset) => {
    const currentTime = new Date();
    const utcOffset = currentTime.getTimezoneOffset() / 60;
    return new Date(
      currentTime.setHours(currentTime.getHours() + offset + utcOffset)
    );
  };
  const formatedTime = moment(getTimeWithOffset(Number(offset))).format("LTS");
  return (
    isVisible && (
      <div className="clock">
        <div className="clock__location">{location}</div>
        <div className="clock__time">{formatedTime}</div>
      </div>
    )
  );
}
