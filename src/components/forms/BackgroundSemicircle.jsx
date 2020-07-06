import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Text = styled(Link)`
  background-color: #707070;
  margin: -20px -20px 0 -20px;
  height: 86px;
  border-radius: 0 0 100% 100%;
  width: 100%;
  position: absolute;
  z-index: -1;
  opacity: 0.86;
`;

const BackgroundColor = styled(Link)`
background-color: #707070;
`

const BackgroundSemicircle = ({ text }) => {
  return <Text style={{ color: BackgroundColor }}>{text}</Text>;
};

export default BackgroundSemicircle;
