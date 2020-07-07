import React from "react";

import styled from "styled-components";

const ButtonText = styled.button`
  background-color: #3D3D41; /* Green */
  border: none;
  color: #fff;
  border-radius: 5px;
  padding: 15px 30px;
  margin: 10px 0;
  text-align: center;
  text-decoration: none;
  width: 100%;
  opacity: 0.86;
`;

const Button = ({ text, type }) => {
  return (
    <ButtonText className="button" type={type}>
      {text}
    </ButtonText>
  );
};

export default Button;
