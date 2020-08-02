import React from "react";

export default function Input({ value, label, onchange, name, type = "text" }) {
  return (
    <div>
      <label>{label}</label>
      <br />
      <input value={value} onChange={onchange} name={name} type={type} />
    </div>
  );
}
