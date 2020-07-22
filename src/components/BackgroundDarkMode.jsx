import React from "react";
import styled from "styled-components";
import { ReactComponent as ImageDarkMode } from "../asset/bg-dark-mode.svg";

const BackgroundDM = styled(ImageDarkMode)`
  position: absolute;
  bottom: 80px;
  right: 0;
  z-index: 0;
  width: auto;
  padding: 0; /* reset */
  filter: opacity(90%);
`;
const BackgroundDarkMode = () => {
  return <BackgroundDM />;
};

export default BackgroundDarkMode;
