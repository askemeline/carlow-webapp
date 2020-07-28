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

const ModalVtc = ({ isShowing, hide, ride }) => {
  let url = `https://www.${ride}.com/`;

  let element = <a href={url}>Allez-y</a>;
  console.log(url);
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
              <Text>Aller sur le site {ride} pour commander ?</Text>
              <Themes.Flex>
                <Button onClick={hide}>Non merci</Button>
                {element}{" "}
              </Themes.Flex>
            </Themes.ModalVtc>
          </Themes.ModalWrapper>
        </>
      ) : null}
    </>
  );
};

export default ModalVtc;
