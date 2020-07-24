import React from "react";
import Themes from "../constants/Themes";

const ButtonItem = ({ colorText = "", colorBackGround = "", value = "" }) => {
  return (
    <Themes.ButtonFilter
      style={{ color: colorText, backgroundColor: colorBackGround }}
    >
      {value}
    </Themes.ButtonFilter>
  );
};

export default ButtonItem;
