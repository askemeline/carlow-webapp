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

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("submit");
  };

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
              <form onSubmit={handleSubmit}>
                <InputAutocomplete />
                {hasError ? <Loading /> : null}
                <Button
                  text="Enregister"
                  type="submit"
                  //   onClick={hide}
                  style={{ marginTop: 100 }}
                />
              </form>
            </Themes.Modal>
          </Themes.ModalWrapper>
        </>
      ) : null}
    </>
  );
};

export default ModalFavoris;
