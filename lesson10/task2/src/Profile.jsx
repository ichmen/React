import React from "react";
import UserForm from "./UserForm";

export default function Profile({ userData, onChange }) {
  return (
    <div className="column">
      <UserForm userData={userData} onChange={onChange} />
    </div>
  );
}
