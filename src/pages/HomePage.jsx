import React from "react";
import FavorisInput from "../components/FavorisInput.jsx";
import TabBarBottom from "../components/TabBarBottom.jsx";

import BackgroundSemicircle from "../components/forms/BackgroundSemicircle.jsx";

const HomePage = () => {
  return (
    <>
      <BackgroundSemicircle
        text="16,97 €"
        subText=" d’économie depuis Carlow !"
      />
      <p>Score calculé selon vos comparaisons et selon le VTC le plus cher</p>
      <FavorisInput
        type="search"
        name="search"
        placeholder="Votre destination"
      />
      <TabBarBottom text="home" />
    </>
  );
};

export default HomePage;
