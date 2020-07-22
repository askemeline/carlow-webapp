import React from "react";
import { FaChevronRight } from "react-icons/fa";

import Themes from "../constants/Themes";

const ButtonProfile = ({
  text = "",
  navigation = "",
  title = "",
  ...otherProps
}) => {
  return (
    <Themes.ButtonProfile to={`${navigation}`} title={title} {...otherProps}>
      {text} <FaChevronRight className="chevron-right" />
    </Themes.ButtonProfile>
  );
};

export default ButtonProfile;
