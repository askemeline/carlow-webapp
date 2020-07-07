import React from "react";
import styled from "styled-components";


const Text = styled.h1`
    text-decoration: none;
    color: #fff;
    font-size: 32px;
    text-align: center;
    margin-bottom: 45px;
`;

const BackgroundColor = styled.div`
    background-color: #707070;
    margin: -20px 0px 20px 0px;
    height: 86px;
    border-radius: 0 0 100% 100%;
    z-index: -1;
    opacity: 0.86;
`;

const BackgroundSemicircle = ({ text }) => {
  return(
    <BackgroundColor>
      <Text>{text}</Text>
    </BackgroundColor>
  );
};

export default BackgroundSemicircle;
