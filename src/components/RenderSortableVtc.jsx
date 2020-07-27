import React from "react";

import ButtonItem from "./ButtonItem.jsx";

const sort = [
  { name: "prix", color: "#FFFFFF", backgroundcolor: "#AA696B" },
  { name: "temps", color: "#AA696B", backgroundcolor: "#F7E1E1" },
];

const RenderSortableVtc = ({ handleSortable }) => {
  const RenderSortable = sort.map((value, key) => {
    return (
      <ButtonItem
        key={key}
        value={value.name}
        colorText={value.color}
        colorBackGround={value.backgroundcolor}
        onClick={() => handleSortable(value.name)}
      />
    );
  });
  return <>{RenderSortable}</>;
};

export default RenderSortableVtc;
