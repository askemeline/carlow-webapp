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
      <Margin>
        <ButtonProfile
          text="Informations personnelles"
          navigation="info-perso"
        />
        <ButtonProfile text="Gestion des favoris" navigation="home" />
        <ButtonProfile text="Carte bancaire" navigation="home" />
        <ButtonProfile text="Gestion des notifications" navigation="home" />
        <ButtonProfile text="Position" navigation="home" />
        <DarkThemeToggle />
        <TabBarBottom text="profile" />
      </Margin>
    </>
  );
};

export default ProfilePage;
