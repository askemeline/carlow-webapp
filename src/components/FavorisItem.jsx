import React from "react";

import Themes from "../constants/Themes.js";
import ModalFavoris from "./ModalFavoris.jsx";
import useModal from "./useModal.jsx";

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
