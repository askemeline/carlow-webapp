import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";

import TabBarBottom from "../components/TabBarBottom.jsx";
import Margin from "../components/forms/Margin.jsx";
import HeaderButton from "../components/forms/HeaderButton.jsx";
import ButtonItem from "../components/ButtonItem.jsx";
import Themes from "../constants/Themes.js";
import heetch from "../asset/heetch.png";
import uber from "../asset/uber.png";
import kapten from "../asset/kapten.png";
import bolt from "../asset/bolt.png";
import co2 from "../asset/co2.png";
import marcel from "../asset/marcel.png";
import allocab from "../asset/allocab.png";

const Center = styled.div`
  text-align: center;
  margin-top: 40px;
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

const filter = [
  { name: "classique", color: "#273539", backgroundcolor: "#E1E6E8" },
  { name: "green", color: "#688F93", backgroundcolor: "#E1E6E8" },
  { name: "berline", color: "#273539", backgroundcolor: "#E1E6E8" },
  { name: "van", color: "#273539", backgroundcolor: "#E1E6E8" },
];

const sort = [
  { name: "prix", color: "#FFFFFF", backgroundcolor: "#AA696B" },
  { name: "temps", color: "#AA696B", backgroundcolor: "#F7E1E1" },
];

let activeFilter = "classique";

let activeSort = "prix";

const objVtc = [
  { name: "heetch", img: heetch },
  { name: "uber", img: uber },
  { name: "kapten", img: kapten },
  { name: "bolt", img: bolt },
  { name: "allocab", img: allocab },
  { name: "marcel", img: marcel },
];

const renderFilter = filter.map((value, key) => {
  return (
    <div key={key}>
      <ButtonItem
        value={value.name}
        colorText={value.color}
        colorBackGround={value.backgroundcolor}
        onClick={() => (activeFilter = value.name)}
      />
    </div>
  );
});

const renderSortable = sort.map((value, key) => {
  return (
    <div key={key}>
      <ButtonItem
        value={value.name}
        colorText={value.color}
        colorBackGround={value.backgroundcolor}
        onClick={() => (activeSort = value.name)}
      />
    </div>
  );
});

const loadVtc = (rideComparison) => {
  let rides = rideComparison.rides;
  console.log(rideComparison);
  activeSort = "temps";
  if (activeSort === "prix") {
    rides.sort((a, b) => {
      return a.price - b.price;
    });
  } else if (activeSort === "temps") {
    rides.sort((a, b) => {
      return a.duration - b.duration;
    });
  }
  return rides.map((ride, key) => {
    console.log(ride.Options);
    console.log();
    if (
      activeFilter !== "classique" &&
      ride.Options.find((option) => option.Slug === activeFilter) === undefined
    ) {
      return false;
    }
    return (
      <Flex key={key}>
        <Themes.Flex style={{ margin: 20 }}>
          <img
            src={objVtc.find((vtc) => vtc.name === ride.Vtc.slug).img}
            alt="Logo"
            style={{ width: 42, heigth: 42 }}
          />
          <Themes.Text style={{ textTransform: "capitalize" }}>
            {ride.Vtc.Name}<br></br>
            5 min
          </Themes.Text>
          <Themes.Flex>

            <Themes.TextCO2 style={{fontSize: '10px !important;'}}><br></br><br></br><img src={co2} alt="Logo" />Co2 {ride.emission / 10000}%</Themes.TextCO2>
            
          </Themes.Flex>
        </Themes.Flex>
        <p>{ride.price / 100}€</p>
      </Flex>
    );
  });
};

const FilterPage = () => {
  const location = useLocation();
  const rideComparison = location.state.rideComparison;

  return (
    <>
      <Margin heightProps="75%">
        <HeaderButton icon="back" text="Retour" navigation="home" />
        <Center>
          <Themes.Text style={{ fontWeight: "bold" }}>Vos filtres</Themes.Text>
        </Center>
        <Card>{renderFilter}</Card>
        <Card>{renderSortable}</Card>
        <Themes.CardVTC>{loadVtc(rideComparison)}</Themes.CardVTC>
      </Margin>
      <TabBarBottom />
    </>
  );
};

export default FilterPage;
