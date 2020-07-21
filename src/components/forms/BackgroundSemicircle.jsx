import React from "react";
import styled from "styled-components";

import Themes from "../../constants/Themes";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;

const BackgroundSemicircle = ({ text, subText = "" }) => {
  return (
    <Themes.BackgroundColorHeader>
      <Flex>
        <Themes.TextHeader>{text}</Themes.TextHeader>
        <Themes.SubTextHeader>{subText}</Themes.SubTextHeader>
      </Flex>
    </Themes.BackgroundColorHeader>
  );
};

export default BackgroundSemicircle;
