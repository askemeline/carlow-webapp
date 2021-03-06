import React from "react";
import { FaChevronRight } from "react-icons/fa";

import Themes from "../constants/Themes";

const ButtonProfileDisabled = ({ text = "", ...otherProps }) => {
  return (
    <Themes.ButtonProfileDisabled vtc>
      {text} <FaChevronRight className="chevron-right" />
    </Themes.ButtonProfileDisabled>
  );
};

export default ButtonProfileDisabled;
