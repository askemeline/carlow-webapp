import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";

import Field from "./forms/Field.jsx";
import Button from "./forms/Button.jsx";
import Themes from "../constants/Themes";
import Loading from "./Loading.jsx";

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

///api/place/autocomplete/25 avenue victor hugo
const ModalFavoris = ({ isShowing, hide, fav }) => {
  const [value, setValue] = useState("");

  const [hasError, setHasError] = useState(false);

  console.log(value);
  const handleChange = (e) => {
    setValue(e.target.value);
    console.log(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(value);

    try {
      await axios.get(
        "https://api-carlow.herokuapp.com/api/place/autocomplete/place Bernard Delaunay"
      );
      console.log("success");
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
      console.log(e.response);
    }
  };

  return (
    <>
      {isShowing ? (
        <>
          <ModalOverlay />
          <ModalWrapper aria-modal aria-hidden tabIndex={-1} role="dialog">
            <Modal>
              <form onSubmit={handleSubmit}>
                <ModalHeader />
                <Text>Vous souhaitez ajouter un {fav.toLowerCase()} ?</Text>
                <Field
                  name="search"
                  type="search"
                  placeholder="Ajouter une destination"
                  onChange={handleChange}
                  required
                />
                {hasError ? <Loading /> : null}
                <Button
                  text="Enregister"
                  type="submit"
                  onClick={hide}
                  style={{ marginTop: 100 }}
                />
              </form>
            </Modal>
          </ModalWrapper>
        </>
      ) : null}
    </>
  );
};

export default ModalFavoris;
