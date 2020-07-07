import React from "react";
import FavorisInput from "../components/FavorisInput.jsx";
import TabBarBottom from "../components/TabBarBottom.jsx";

const HomePage = () => {
  return (
    <>
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
