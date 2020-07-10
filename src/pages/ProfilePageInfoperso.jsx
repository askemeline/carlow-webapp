import React from "react";
import FavorisInput from "../components/FavorisInput.jsx";
import TabBarBottom from "../components/TabBarBottom.jsx";
import ButtonProfile from "../components/ButtonProfile.jsx";
import styled from "styled-components";

import Field from "../components/forms/Field.jsx";
import Button from "../components/forms/Button.jsx";
import HeaderButton from "../components/forms/HeaderButton.jsx";
import ButtonBottomText from "../components/forms/ButtonBottomText.jsx";
import Margin from "../components/forms/Margin.jsx";
import BackgroundDarkMode from "../components/BackgroundDarkMode.jsx";

const FlexStart = styled.div`
 margin-bottom: auto;
 margin-top: -10px;
`;

const FlexEnd = styled.div`
 margin-top: auto;
`;

const ProfilePage = () => {
  return (
    <>
    <Margin >
      <FlexStart>
        <HeaderButton icon="back" text="Retour" navigation="login" />
      </FlexStart>
  
          <Field
            name="firstname"
            placeholder="Prénom"
            type="email"
          />
          <Field
            name="lastname"
            placeholder="Nom"
            type="email"
          />
          <Field
            name="email"
            placeholder="Email"
            type="email"
            required
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            required
          />
          <FlexEnd>
            <Button text="Valider" type="submit" />
          </FlexEnd>
          <BackgroundDarkMode/>
          <TabBarBottom text="profile" />
      </Margin>
      
    </>
  );
};

export default ProfilePage;
