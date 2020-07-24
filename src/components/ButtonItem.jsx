import React from "react";
import Themes from "../constants/Themes";

const ButtonItem = ({ colorText = "", colorBackGround = "", value = "" }) => {
  return (
    <Themes.Button
      style={{ color: colorText, backgroundColor: colorBackGround }}
    >
      {value}
    </Themes.Button>
  );
};

export default ButtonItem;
