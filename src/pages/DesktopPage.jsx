import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
`;

const DesktopPage = () => {
  return (
    <Container>
      <p>
        Oops, Le site n'est pas optimiser pour la version ordinateur, utilisez
        la version mobile 😉
      </p>
    </Container>
  );
};

export default DesktopPage;
