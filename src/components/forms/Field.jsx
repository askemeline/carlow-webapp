import React from "react";

import "./Field.css";
const Field = ({
  name,
  onChange,
  placeholder = "",
  type = "text",
  error = "",
}) => {
  return (
    <div>
      <input
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        name={name}
        id={name}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Field;
