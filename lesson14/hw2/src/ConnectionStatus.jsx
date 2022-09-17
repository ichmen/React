import React, { useEffect, useState } from "react";
import classNames from "classnames";

export default function ConnectionStatus() {
  const [isOnline, statusChange] = useState(true);

  useEffect(() => {
    window.addEventListener("online", toggleStatus);
    window.addEventListener("offline", toggleStatus);
    function toggleStatus(event) {
      statusChange(event.target.navigator.onLine);
    }
    return () => {
      window.removeEventListener("online", toggleStatus);
      window.removeEventListener("offline", toggleStatus);
    };
  }, [window.navigator.onLine]);
  return (
    <div className={classNames("status", { status_offline: !isOnline })}>
      {isOnline ? "online" : "offline"}
    </div>
  );
}
