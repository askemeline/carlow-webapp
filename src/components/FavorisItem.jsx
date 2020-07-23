import React from "react";
import Themes from "../constants/Themes";
import ModalFavoris from "./ModalFavoris";
import useModal from "./useModal";
const FavorisItem = ({ fav }) => {
  const { isShowing, toggle } = useModal();

  return (
    <>
      <ModalFavoris isShowing={isShowing} hide={toggle} fav={fav} />
      <Themes.ButtonFavoris onClick={toggle} fav={fav}>
        {fav}
      </Themes.ButtonFavoris>
    </>
  );
};

export default FavorisItem;
