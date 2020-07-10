import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import Margin from "./forms/Margin.jsx";
import HeaderButton from "./forms/HeaderButton.jsx";

const Text = styled.p`
  margin-top: 20px;
  color: #fff;
  font-size: 18px;
`;

const Error = () => {
  return (
    <Margin>
      <HeaderButton icon="back" text="Retour" navigation="home" />
      <Text>Erreur 404</Text>
      <Text>Oups cette page n'existe pas</Text>
    </Margin>
  );
};

export default Error;
