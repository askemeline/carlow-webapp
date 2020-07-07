import React from "react";

import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 15px 10px;
  margin: 8px 0;
  box-sizing: border-box;
  background-color: #1C1C1E;
  border: 1px solid #3D3D41;
  border-radius: 4px;
  color: #fff;

  ::placeholder {
    color: #fff;
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
