import React from "react";
import { useLocation } from "react-router-dom";

import VtcItem from "./VtcItem.jsx";

const VtcList = ({ filter, sortable }) => {
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
      <div key={key}>
        {filter === "green" ? <p>Hello</p> : <VtcItem ride={ride} />}
      </div>
    );
  });
};

export default VtcList;
