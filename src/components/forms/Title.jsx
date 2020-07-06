import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Text = styled(Link)`
  text-decoration: none;
  color: #fff;
  font-size: 32px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-left: auto;
  margin-right: auto;
  display: block;
  margin-bottom: 45px;
`;



const Title = ({ text }) => {
  return <Text>{text}</Text>;
};

export default Title;
