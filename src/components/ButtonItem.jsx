import React from "react";
import Themes from "../constants/Themes";

const ButtonItem = ({
  colorText = "",
  colorBackGround = "",
  value = "",
  ...otherProps
}) => {
  return (
    <Themes.ButtonFilter
      style={{ color: colorText, backgroundColor: colorBackGround }}
      {...otherProps}
    >
      {value}
    </Themes.ButtonFilter>
  );
};

export default ButtonItem;
