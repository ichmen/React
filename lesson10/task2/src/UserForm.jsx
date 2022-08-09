import React from "react";

export default function UserForm({
  userData: { firstName, lastName },
  onChange,
}) {
  // console.log(onChange);
  return (
    <form className="user-form">
      <input
        type="text"
        name="firstName"
        className="user-form__input"
        value={firstName}
        onChange={onChange}
      />
      <input
        type="text"
        name="lastName"
        className="user-form__input"
        value={lastName}
        onChange={onChange}
      />
    </form>
  );
}
