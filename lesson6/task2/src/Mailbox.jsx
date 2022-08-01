import React from "react";
export default function Mailbox(props) {
  return (
    <div className="mailbox">
      <span className="mailbox__text">messages</span>
      {props.unreadMessages.length > 0 && (
        <span className="mailbox__count">{`${props.unreadMessages.length}`}</span>
      )}
    </div>
  );
}
