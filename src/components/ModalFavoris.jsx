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

const ModalFavoris = ({ isShowing, hide, fav }) => {
  const [value, setValue] = useState("");
  const [hasError, setHasError] = useState(false);
  const [selectedInput, setSelectedInput] = useState(null);
  const [selectedInputValue, setSelectedInputValue] = useState("");

  const handleChange = async (e) => {
    setValue(e.target.value);
    try {
      const { data: response } = await axios.get(
        "https://api-carlow.herokuapp.com/api/place/autocomplete/" + value
      );
      setSelectedInput(response);
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  const handleValue = (val, e) => {
    e.preventDefault();
    console.log(value);
    setSelectedInputValue(val);
    console.log(selectedInputValue);
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
                  value={selectedInputValue}
                  placeholder="Ajouter votre destination"
                  onChange={handleChange}
                  required
                />
                {selectedInput !== null
                  ? Object.keys(selectedInput).map((keyName, i) => {
                      const value = selectedInput[keyName].name;
                      return (
                        <div key={i}>
                          <button onClick={() => handleValue(value)}>
                            {selectedInput[keyName].name}
                          </button>
                        </div>
                      );
                    })
                  : null}
                {hasError ? <Loading /> : null}
                <Button
                  text="Enregister"
                  type="submit"
                  //   onClick={hide}
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
