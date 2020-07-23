import React from "react";
import styled from "styled-components";
import Field from "./forms/Field.jsx";
import Button from "./forms/Button.jsx";

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`;
const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;
const Modal = styled.div`
  z-index: 100;
  background: white;
  position: fixed;
  border-radius: 3px;
  max-width: 500px;
  padding: 2rem;
  bottom: 0;
`;
const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Text = styled.p`
  color: #df5f64;
  font-size: 24px;
  padding-bottom: 20px;
`;

const ModalFavoris = ({ isShowing, hide, fav }) => {
  return (
    <>
      {isShowing ? (
        <>
          <ModalOverlay />
          <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
            <Modal>
              <ModalHeader></ModalHeader>
              <Text>Vous souhaitez ajouter un {fav.toLowerCase()} ?</Text>
              <Field name="search" type="search" required />
              <Button
                text="Enregister"
                type="submit"
                onClick={hide}
                style={{ marginTop: 100 }}
              />
            </Modal>
          </ModalWrapper>
        </>
      ) : null}
    </>
  );
};

export default ModalFavoris;
