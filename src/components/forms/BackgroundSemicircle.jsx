import React from "react";
import styled from "styled-components";

const Text = styled.h1`
  text-decoration: none;
  color: #fff;
  font-size: 32px;
  text-align: center;
`;

const BackgroundColor = styled.div`
  background-color: #1f292c;
  margin: -20px 0px 20px 0px;
  height: 86px;
  border-radius: 0 0 100% 100%;
  z-index: -1;
  opacity: 0.86;
  display: flex;
  height: 40vw;
  align-items: center;
  justify-content: center;
`;

const BackgroundSemicircle = ({ text }) => {
  return (
    <BackgroundColor>
      <Text>{text}</Text>
    </BackgroundColor>
  );
};

export default BackgroundSemicircle;
