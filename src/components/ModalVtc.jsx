import React from "react";
import axios from "axios";

import Themes from "../constants/Themes.js";

const ModalVtc = ({ isShowing, hide, rideName, rideId }) => {
  const getUrl = () => {
    let url = `https://www.${rideName}.com/`;
    if (rideName === "Marcel") {
      return (
        <Themes.Redirect onClick={orderRide} href="https://www.marcel.cab/">
          Allez-y
        </Themes.Redirect>
      );
    } else {
      return (
        <Themes.Redirect onClick={orderRide} href={url}>
          Allez-y
        </Themes.Redirect>
      );
    }
  };

  const orderRide = async (e) => {
    try {
      const { data: response } = await axios.get(
        "https://api-carlow.herokuapp.com/api/ride/order?rideId=" + rideId
      );
    } catch (e) {
      console.log(e);
    }
    return true;
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
            <Themes.ModalVtc>
              <Themes.ModalHeader />
              <Themes.Text>
                Aller sur le site {rideName} pour commander ?
              </Themes.Text>
              <Themes.Flex style={{ justifyContent: "space-between" }}>
                <Themes.ButtonClose onClick={hide}>
                  Non merci
                </Themes.ButtonClose>
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
