import React from "react";
import Themes from "../constants/Themes";
import ModalVtc from "./ModalVtc";
import heetch from "../asset/heetch.png";
import uber from "../asset/uber.png";
import kapten from "../asset/kapten.png";
import bolt from "../asset/bolt.png";
import co2 from "../asset/co2.png";
import marcel from "../asset/marcel.png";
import allocab from "../asset/allocab.png";
import useModal from "./useModal";
import styled from "styled-components";

const Div = styled.div`
  font-weight: 400;
`;

const objVtc = [
  { name: "heetch", img: heetch },
  { name: "uber", img: uber },
  { name: "kapten", img: kapten },
  { name: "bolt", img: bolt },
  { name: "allocab", img: allocab },
  { name: "marcel", img: marcel },
];
const VtcItem = ({ ride }) => {
  const { isShowing, toggle } = useModal();
  return (
    <Div onClick={toggle}>
      <Themes.FlexVtc>
        <Themes.Flex style={{ margin: 20 }}>
          <img
            src={objVtc.find((vtc) => vtc.name === ride.Vtc.slug).img}
            alt="Logo"
            style={{ width: 42, heigth: 42, marginRight: 10 }}
          />
          <ModalVtc
            isShowing={isShowing}
            hide={toggle}
            rideName={ride.Vtc.Name}
          />
          <Themes.Text style={{ textTransform: "capitalize" }}>
            {ride.Vtc.Name}
            <br></br>
            {ride.timeBeforeDeparture % 60} min
          </Themes.Text>
          <Themes.Flex>
            <Themes.TextCO2 style={{ fontSize: "10" }}>
              <br></br>
              <br></br>
              <img src={co2} alt="Logo" />
              Co2 {ride.emission / 10000}%
            </Themes.TextCO2>
          </Themes.Flex>
          <Themes.Text>{ride.price / 100}€</Themes.Text>
        </Themes.Flex>
      </Themes.FlexVtc>
    </Div>
  );
};

export default VtcItem;
