import React from "react";
import Themes from "../constants/Themes";

const ButtonItem = ({ colorText = "", colorBackGround = "", value = "", onClick = ""}) => {
  return (
    <Themes.ButtonFilter
      style={{ color: colorText, backgroundColor: colorBackGround }}
      onClick={onClick}
    >
      {value}
    </Themes.ButtonFilter>
  );
};

export default ButtonItem;
