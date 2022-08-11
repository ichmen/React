import React from "react";

export default function Dialog({ children, title, isOpen, onClose }) {
  return (
    isOpen && (
      <div className="dialog">
        <div className="dialog__heading">
          <h4 className="dialog__title">{title}</h4>
          <button className="dialog__close-btn" onClick={() => onClose()}>
            +
          </button>
        </div>
        <div className="dialog__content">{children}</div>
      </div>
    )
  );
}
