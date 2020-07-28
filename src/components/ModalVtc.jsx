import React, { useState } from "react";
import styled from "styled-components";

import Themes from "../constants/Themes.js";

const Text = styled.p`
  color: #000000;
  font-size: 17px;
  /* padding-bottom: 20px; */
`;

const Button = styled.button`
  width: 100%;
`;

const ModalVtc = ({ isShowing, hide, rideName }) => {
  const getUrl = () => {
    let url = `https://www.${rideName}.com/`;
    if (rideName === "Marcel") {
      console.log("marcel");
      return <a href="https://www.marcel.cab/">Allez-y</a>;
    } else {
      console.log("pas marcel");
      return <Button href={url}>Allez-y</Button>;
    }
  };
  console.log("hey");

  return (
    <>
      {isShowing ? (
        <>
          <Themes.ModalOverlay />
          <Themes.ModalWrapper
            aria-modal
            aria-hidden
            tabIndex={-1}
            role="dialog"
          >
            <Themes.ModalVtc>
              <Themes.ModalHeader />
              <Text>Aller sur le site {rideName} pour commander ?</Text>
              <Themes.Flex>
                <Button onClick={hide}>Non merci</Button>
                {getUrl()}
              </Themes.Flex>
            </Themes.ModalVtc>
          </Themes.ModalWrapper>
        </>
      ) : null}
    </>
  );
};

export default ModalVtc;
