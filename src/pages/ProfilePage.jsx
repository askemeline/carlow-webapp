import React from "react";
import FavorisInput from "../components/FavorisInput.jsx";
import TabBarBottom from "../components/TabBarBottom.jsx";
import ButtonProfile from "../components/ButtonProfile.jsx";
import ButtonProfileSwitch from "../components/ButtonProfileSwitch.jsx";
import Margin from "../components/forms/Margin.jsx";
import BackgroundSemicircle from "../components/forms/BackgroundSemicircle.jsx";


const ProfilePage = () => {
  return (
    <>
    <BackgroundSemicircle text="Mon profil" />
    <Margin heightProps="55%"> 
      <ButtonProfile text="Informations personnelles" navigation="info-perso"/>
      <ButtonProfile text="Gestion des favoris" navigation="login"/>
      <ButtonProfile text="Carte bancaire" navigation="login"/>
      <ButtonProfile text="Gestion des notifications" navigation="login"/>
      <ButtonProfile text="Position" navigation="login"/>
      <ButtonProfileSwitch text="Dark theme"/>
      <TabBarBottom text="home" />
    </Margin>
    </>
  );
};

export default ProfilePage;
