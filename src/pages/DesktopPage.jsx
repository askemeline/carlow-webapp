import React from "react";
import styled from "styled-components";

import Themes from "../constants/Themes.js";

const Container = styled.div`
  margin: 20px;
`;

const DesktopPage = () => {
  return (
    <Container>
      <Themes.Text>
        Oops, Le site n'est pas optimiser pour la version ordinateur, utilisez
        la version mobile
      </Themes.Text>
    </Container>
  );
};

export default DesktopPage;
