import React from "react";

export default function Expand({ children, title, isVisible, clickHandler }) {
  return (
    <div className="expand border">
      <div className="expand__header">
        <span className="expand__title">{title}</span>
        <button className="expand__toggle-btn" onClick={() => clickHandler()}>
          <i
            className={
              isVisible ? "fa-solid fa-chevron-up" : "fa-solid fa-chevron-down"
            }
          ></i>
        </button>
      </div>
      <div className="expand__content">
        <p>{isVisible && children}</p>
      </div>
    </div>
  );
}
