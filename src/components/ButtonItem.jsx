import React from "react";
import Themes from "../constants/Themes";

const ButtonItem = ({ color }) => {
  return <Themes.Button onClick={toggle} fav={fav} />;
};

export default ButtonItem;
