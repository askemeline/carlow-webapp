import React from "react";

import ButtonItem from "./ButtonItem.jsx";

const RenderFilterVtc = ({ handleFilter }) => {
  const filter = [
    { name: "classique", color: "#273539", backgroundcolor: "#E1E6E8" },
    { name: "green", color: "#688F93", backgroundcolor: "#E1E6E8" },
    { name: "berline", color: "#273539", backgroundcolor: "#E1E6E8" },
    { name: "van", color: "#273539", backgroundcolor: "#E1E6E8" },
  ];

  const filterButton = filter.map((value, key) => {
    return (
      <ButtonItem
        key={key}
        value={value.name}
        colorText={value.color}
        colorBackGround={value.backgroundcolor}
        onClick={() => handleFilter(value.name)}
      />
    );
  });
  return <>{filterButton}</>;
};

export default RenderFilterVtc;
