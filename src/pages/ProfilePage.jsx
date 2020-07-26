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
      <Margin heightProps="60%">
        <ButtonProfile text="Informations personnelles" navigation="infos" />
        <ButtonProfile text="Afficher les favoris" navigation="favoris" />
        <ButtonProfileDisabled text="Carte bancaire" />
        <ButtonProfileDisabled text="Gestion des notifications" />
        <ButtonProfileDisabled text="Position" />
        <DarkThemeToggle />
      </Margin>
      <TabBarBottom text="profile" />
    </>
  );
};

export default ProfilePage;
