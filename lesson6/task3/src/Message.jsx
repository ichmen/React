import React from "react";

export default function Message({ text }) {
  return text ? <div className="message">{`${text}`}</div> : null;
}
