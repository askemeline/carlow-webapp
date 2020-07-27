import React from "react";
import { useLocation } from "react-router-dom";

import Themes from "../constants/Themes.js";
import heetch from "../asset/heetch.png";
import uber from "../asset/uber.png";
import kapten from "../asset/kapten.png";
import bolt from "../asset/bolt.png";
import co2 from "../asset/co2.png";
import marcel from "../asset/marcel.png";
import allocab from "../asset/allocab.png";

const VtcListItem = ({ filter, sortable }) => {
  // let activeFilter = "classique";
  // let activeSort = "prix";

  const objVtc = [
    { name: "heetch", img: heetch },
    { name: "uber", img: uber },
    { name: "kapten", img: kapten },
    { name: "bolt", img: bolt },
    { name: "allocab", img: allocab },
    { name: "marcel", img: marcel },
  ];

  const location = useLocation();
  const rideComparison = location.state.rideComparison;
  let rides = rideComparison.rides;

  if (sortable === "prix") {
    rides.sort((a, b) => {
      return a.price - b.price;
    });
  } else if (sortable === "temps") {
    rides.sort((a, b) => {
      return a.timeBeforeDeparture - b.timeBeforeDeparture;
    });
  }
  return rides.map((ride, key) => {
    if (
      filter !== "classique" &&
      ride.Options.find((option) => option.Slug === filter) === undefined
    ) {
      return false;
    }
    return (
      <Themes.FlexVtc key={key}>
        <Themes.Flex style={{ margin: 20 }}>
          <img
            src={objVtc.find((vtc) => vtc.name === ride.Vtc.slug).img}
            alt="Logo"
            style={{ width: 42, heigth: 42, marginRight: 10 }}
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
        </Themes.Flex>
        <p>{ride.price / 100}€</p>
      </Themes.FlexVtc>
    );
  });
};

export default VtcListItem;
