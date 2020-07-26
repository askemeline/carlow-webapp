import React from "react";

import Margin from "./forms/Margin.jsx";
import HeaderButton from "./forms/HeaderButton.jsx";
import Themes from "../constants/Themes";

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
