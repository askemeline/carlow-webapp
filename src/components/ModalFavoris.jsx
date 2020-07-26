import React, { useState } from "react";
import styled from "styled-components";

import Button from "./forms/Button.jsx";
import Themes from "../constants/Themes";
import Loading from "./Loading.jsx";
import InputAutocomplete from "./InputAutocomplete.jsx";

const Text = styled.p`
  color: #df5f64;
  font-size: 24px;
  padding-bottom: 20px;
`;

const ModalFavoris = ({ isShowing, hide, fav }) => {
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
              <Text>Vous souhaitez ajouter un {fav.toLowerCase()} ?</Text>
              <InputAutocomplete placeholder="Ajouter votre destination" fav={fav.toLowerCase()} />
              {hasError ? <Loading /> : null}
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

export default ModalFavoris;
