import React from "react";
import styled from "styled-components";
import Margin from "./forms/Margin.jsx";

const Text = styled.p`
  margin-top: 20px;
  color: #fff;
`;

const Error = () => {
  return (
    <Margin>
      <Text>Erreur 404</Text>
      <Text>Oups cette page n'existe pas</Text>
    </Margin>
  );
};

export default Error;
