import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Text = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 15px;
`;

const ButtonBottomText = ({ text, navigation }) => {
  return <Text to={`${navigation}`}>{text}</Text>;
};

export default ButtonBottomText;
