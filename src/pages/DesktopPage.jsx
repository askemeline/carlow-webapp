import React from "react";
import styled from "styled-components";

import Themes from "../constants/Themes.js";

const Container = styled.div`
  width: 50%;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50%;
`;

const DesktopPage = () => {
  return (
    <Container>
      <Themes.Text>
        Carlow est en cours de développement pour la partie desktop. <br />
        Utilisez la version mobile pour voir toutes les fonctionnalités de
        Carlow 😉
      </Themes.Text>
    </Container>
  );
};

export default DesktopPage;
