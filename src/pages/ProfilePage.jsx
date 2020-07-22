import React from "react";

import TabBarBottom from "../components/TabBarBottom.jsx";
import ButtonProfile from "../components/ButtonProfile.jsx";
import ButtonProfileDisabled from "../components/ButtonProfileDisabled.jsx";
import Margin from "../components/forms/Margin.jsx";
import BackgroundSemicircle from "../components/forms/BackgroundSemicircle.jsx";
import DarkThemeToggle from "../services/DarkThemeToggle.js";

const ProfilePage = () => {
  return (
    <>
      <BackgroundSemicircle text="Mon profil" topText="Déconnexion" />
      <Margin>
        <ButtonProfile
          text="Informations personnelles"
          navigation="info-perso"
        />
        <ButtonProfile text="Gestion des favoris" navigation="home" />
        <ButtonProfileDisabled text="Carte bancaire" />
        <ButtonProfileDisabled text="Gestion des notifications" />
        <ButtonProfileDisabled text="Position" />
        <DarkThemeToggle />
        <TabBarBottom text="profile" />
      </Margin>
    </>
  );
};

export default ProfilePage;
