import React from "react";
import styled from "styled-components";

import Margin from "./forms/Margin.jsx";
import HeaderButton from "./forms/HeaderButton.jsx";
import Themes from "../constants/Themes";

const Text = styled.p`
  margin-top: 20px;
  color: #fff;
  font-size: 18px;
`;

const Error = () => {
  return (
    <Margin heightProps="50%">
      <HeaderButton icon="back" text="Retour" navigation="home" />
      <Themes.Title>Erreur 404</Themes.Title>
      <Themes.Text>Oups cette page n'existe pas</Themes.Text>
    </Margin>
  );
};

export default Error;
