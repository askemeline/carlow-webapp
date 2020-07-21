import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Themes from "../../constants/Themes";

const ButtonBottomText = ({ text, navigation }) => {
  return <Themes.TextLink to={`${navigation}`}>{text}</Themes.TextLink>;
};

export default ButtonBottomText;
