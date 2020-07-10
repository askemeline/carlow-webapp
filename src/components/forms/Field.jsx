import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 15px 10px;
  margin: 8px 0;
  box-sizing: border-box;
  background-color: #1c1c1e;
  border: 1px solid #3d3d41;
  border-radius: 4px;
  color: #fff;

  ::placeholder {
    color: #fff;
  }
`;
const Error = styled.p`
  color: white;
`;

const Field = ({ name, error = "", ...otherProps }) => {
  return (
    <>
      <Input name={name} {...otherProps} />
      {error && <Error>{error}</Error>}
    </>
  );
};

export default Field;
