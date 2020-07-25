import React, { useEffect } from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import TabBarBottom from "../components/TabBarBottom.jsx";
import Margin from "../components/forms/Margin.jsx";
import HeaderButton from "../components/forms/HeaderButton.jsx";
import ButtonItem from "../components/ButtonItem.jsx";
import Themes from "../constants/Themes";
import heetch from "../asset/heetch.png";
import uber from "../asset/uber.png";
import kapten from "../asset/kapten.png";
import bolt from "../asset/bolt.png";
import co2 from "../asset/co2.png";

const Center = styled.div`
  text-align: center;
`;
const Card = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: space-between;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const obj = [
  { name: "prix", color: "#FFFFFF", backgroundcolor: "#AA696B" },
  { name: "temps", color: "#AA696B", backgroundcolor: "#F7E1E1" },
  { name: "green", color: "#688F93", backgroundcolor: "#E1E6E8" },
  { name: "berline", color: "#273539", backgroundcolor: "#E1E6E8" },
  { name: "van", color: "#273539", backgroundcolor: "#E1E6E8" },
];

const objVtc = [
  { name: "heetch", img: heetch },
  { name: "uber", img: uber },
  { name: "kapten", img: kapten },
  { name: "bolt", img: bolt },
];

const filter = Object.entries(obj).map(([key, value]) => {
  return (
    <div key={key.id}>
      <ButtonItem
        value={value.name}
        colorText={value.color}
        colorBackGround={value.backgroundcolor}
      />
    </div>
  );
});

const vtc = Object.entries(objVtc).map(([key, value]) => {
  return (
    <Flex>
      <Themes.Flex style={{ margin: 20 }}>
        <img src={value.img} alt="Logo" />
        <Themes.Text style={{ textTransform: "capitalize" }}>
          {value.name}
        </Themes.Text>
        <Themes.Flex>
          <Themes.Text>Co2 0,006%</Themes.Text>
          <img src={co2} alt="Logo" />
        </Themes.Flex>
      </Themes.Flex>
      <p>12€</p>
    </Flex>
  );
});

const FilterPage = () => {
  const location = useLocation();
  const rideComparison = location.state.rideComparison;
 
  return (
    <>
      <Margin heightProps="90%">
        <HeaderButton icon="back" text="Retour" navigation="home" />
        <Center>
          <Themes.Text style={{ fontWeight: "bold" }}>Vos filtres</Themes.Text>
        </Center>
        <Card>{filter}</Card>
        <Themes.CardVTC>{vtc}</Themes.CardVTC>
      </Margin>
      <TabBarBottom text="home" />
    </>
  );
};

export default FilterPage;
