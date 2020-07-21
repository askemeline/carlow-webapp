import React from "react";

import Themes from "../../constants/Themes";

const Button = ({ text, ...otherProps }) => {
  return <Themes.Button {...otherProps}>{text}</Themes.Button>;
};

export default Button;
