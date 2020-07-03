import React from "react";

import styled from "styled-components";

const ButtonText = styled.button`
  background-color: #273539; /* Green */
  border: none;
  color: white;
  padding: 15px 30px;
  margin: 10px 0;
  text-align: center;
  text-decoration: none;
  width: 100%;
`;

const Button = ({ text, type }) => {
  return (
    <ButtonText className="button" type={type}>
      {text}
    </ButtonText>
  );
};

export default Button;
