import React from "react";
import Themes from "../constants/Themes";

const FavorisItem = ({ fav }) => {
  const OpenModal = () => {
    alert(fav);
  };
  return <Themes.ButtonFavoris onClick={OpenModal}>{fav}</Themes.ButtonFavoris>;
};

export default FavorisItem;
