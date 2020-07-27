import React, { useState } from "react";
import styled from "styled-components";

import Button from "./forms/Button.jsx";
import Themes from "../constants/Themes.js";

const Text = styled.p`
  color: #df5f64;
  font-size: 24px;
  padding-bottom: 20px;
`;

const ModalVtc = ({ isShowing, hide, rideName }) => {
  const [hasError, setHasError] = useState(false);

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
            <Themes.Modal>
              <Themes.ModalHeader />
              <Text>
                Aller sur le site {rideName.toLowerCase()} pour commander ?
              </Text>
              <Button
                text="Enregister"
                type="submit"
                onClick={hide}
                style={{ marginTop: 100 }}
              />
            </Themes.Modal>
          </Themes.ModalWrapper>
        </>
      ) : null}
    </>
  );
};

export default ModalVtc;
