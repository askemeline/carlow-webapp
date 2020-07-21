import React from "react";

import TabBarBottom from "../components/TabBarBottom.jsx";
import ButtonProfile from "../components/ButtonProfile.jsx";
import Margin from "../components/forms/Margin.jsx";
import BackgroundSemicircle from "../components/forms/BackgroundSemicircle.jsx";
import DarkThemeToggle from "../services/DarkThemeToggle.js";

const ProfilePage = () => {
  return (
    <>
      <BackgroundSemicircle text="Mon profil" />
      <Margin heightProps="55%">
        <ButtonProfile
          text="Informations personnelles"
          navigation="info-perso"
        />
        <ButtonProfile text="Gestion des favoris" navigation="login" />
        <ButtonProfile text="Carte bancaire" navigation="login" />
        <ButtonProfile text="Gestion des notifications" navigation="login" />
        <ButtonProfile text="Position" navigation="login" />
        <DarkThemeToggle />
        <TabBarBottom text="profile" />
      </Margin>
    </>
  );
};

export default ProfilePage;
