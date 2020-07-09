import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: 20px;
`;

const Text = styled.div`
  color: #ffff;
`;

const DesktopPage = () => {
  return (
    <Container>
      <Text>
        Oops, Le site n'est pas optimiser pour la version ordinateur, utilisez
        la version mobile
      </Text>
    </Container>
  );
};

export default DesktopPage;
