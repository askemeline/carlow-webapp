import React from "react";

import Margin from "../components/forms/Margin";
import HeaderButton from "../components/forms/HeaderButton";
import TabBarBottom from "../components/TabBarBottom";
import Themes from "../constants/Themes";

const FavorisPage = () => {
  return (
    <>
      <Margin heightProps="70%">
        <HeaderButton icon="back" text="Retour" navigation="home" />
        <Themes.Text style={{ fontWeight: "bold" }}>Vos filtres</Themes.Text>
        <>Domicile : </>
      </Margin>
      <TabBarBottom text="home" />
    </>
  );
};

export default FavorisPage;
