import React from "react";

import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 15px 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border: 1px solid #273539;
  border-radius: 4px;

  ::placeholder {
    color: #273539;
  }
`;

const Field = ({ name, handleChange, error = "", ...otherProps }) => {
  return (
    <div>
      <Input onChange={handleChange} name={name} {...otherProps} />
      {error && <p>{error}</p>}
    </div>
  );
};

export default Field;
