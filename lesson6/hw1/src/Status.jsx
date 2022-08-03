import React from "react";
import Offline from "./Offline";
import Online from "./Online";

export default function Status({ isOnline }) {
  return <div className="status">{isOnline ? <Online /> : <Offline />}</div>;
}
