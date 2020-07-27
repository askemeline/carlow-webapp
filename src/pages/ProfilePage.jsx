import React from "react";

import TabBarBottom from "../components/TabBarBottom.jsx";
import ButtonProfile from "../components/ButtonProfile.jsx";
import Margin from "../components/forms/Margin.jsx";
import BackgroundSemicircle from "../components/forms/BackgroundSemicircle.jsx";
import DarkThemeToggle from "../services/DarkThemeToggle.js";

const ProfilePage = () => {
  return (
    <>
      <BackgroundSemicircle text="Mon profil" topText="Déconnexion" />
      <Margin heightProps="67%">
        <ButtonProfile text="Informations personnelles" navigation="infos" />
        <ButtonProfile text="Afficher les favoris" navigation="favoris" />
        <DarkThemeToggle />
      </Margin>
      <TabBarBottom />
    </>
  );
};

export default ProfilePage;
