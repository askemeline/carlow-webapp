import React from "react";

import Margin from "../components/forms/Margin";
import Themes from "../constants/Themes";
import BackgroundDarkMode from "../components/BackgroundDarkMode";
import HeaderButton from "../components/forms/HeaderButton";
import TabBarBottom from "../components/TabBarBottom";
import Button from "../components/forms/Button";
import Field from "../components/forms/Field";

const ChangeConfidentialProfile = ({ param }) => {
  //   const params = param.map((p) => {
  //     return (
  //       <>
  //         <Field name="email" placeholder={p} type="email" required />;
  //       </>
  //     );
  //   });
  return (
    <>
      <Margin heightProps="50%">
        <Themes.FlexStart>
          <HeaderButton icon="back" text="Retour" navigation="profile" />
        </Themes.FlexStart>
        <>
          <Field name="email" placeholder={param} type="email" required />
        </>
        <Themes.FlexEnd>
          <Button text="Enregistrer les modifications" type="submit" />
        </Themes.FlexEnd>
        <BackgroundDarkMode />
        <TabBarBottom text="profile" />
      </Margin>
    </>
  );
};

export default ChangeConfidentialProfile;
