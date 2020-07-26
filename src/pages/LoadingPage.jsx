import React from "react";
import styled from "styled-components";

import { ReactComponent as BackgroudImage } from "../asset/bg-login.svg";
import mainLogo from "../asset/android-chrome-192x192.png";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Image = styled(BackgroudImage)`
  position: absolute;
  width: -webkit-fill-available;
  height: auto;
  z-index: -1;
`;

const Title = styled.h1`
  color: #fff;
  position: absolute;
  bottom: 45px;
`;

const Text = styled.p`
  color: #fff;
  font-size: 18px;
  position: absolute;
  bottom: 16px;
`;

const LoadingPage = () => {
  return (
    <Container>
      <img style={{ zIndex: "2" }} src={mainLogo} />
      <Image />
      <Title>CARLOW</Title>
      <Text>Votre comparateur de VTC</Text>
    </Container>
  );
};

export default LoadingPage;
