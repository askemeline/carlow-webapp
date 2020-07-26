import React from "react";
import Themes from "../../constants/Themes";

const ButtonBottomText = ({ text, navigation }) => {
  return <Themes.TextLink to={`${navigation}`}>{text}</Themes.TextLink>;
};

export default ButtonBottomText;
