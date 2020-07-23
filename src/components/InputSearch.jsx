import React from "react";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  padding: 15px 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 15px;
  border: 1px solid #f9f9f9;
  box-shadow: 0px 0px 19px -9px rgba(0, 0, 0, 0.48);
  height: 70px;

  ::placeholder {
    color: #273539;
  }
`;

const InputSearch = ({ name, ...otherProps }) => {
  return (
    <div>
      <Input name={name} {...otherProps} />
    </div>
  );
};

export default InputSearch;
