import React from "react";
import styled from "styled-components";
import { ReactComponent as ImageDarkMode } from "../asset/bg-dark-mode.svg";

const BackgroundDM = styled(ImageDarkMode)`
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -1;
  width: 100%;
`;
const BackgroundDarkMode = () => {
  return <BackgroundDM />;
};

export default BackgroundDarkMode;
