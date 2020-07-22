import React from "react";
import { FaChevronRight } from "react-icons/fa";

import Themes from "../constants/Themes";

const ButtonProfile = ({ text = "", navigation = "", ...otherProps }) => {
  return (
    <Themes.ButtonProfile
      to={`${navigation}`}
      className="btn btn-warning"
      type="text"
      {...otherProps}
    >
      {text} <FaChevronRight className="chevron-right" />
    </Themes.ButtonProfile>
  );
};

export default ButtonProfile;
