import React from "react";
import axios from "axios";

import Margin from "../components/forms/Margin";
import HeaderButton from "../components/forms/HeaderButton";
import TabBarBottom from "../components/TabBarBottom";
import Themes from "../constants/Themes";

const FavorisPage = () => {
  const getFavs = async () => {
    const { data: response } = await axios.get(
      "https://api-carlow.herokuapp.com/api/favs"
    )
    console.log(response);    
  }
  getFavs()
  return (
    <>
      <Margin heightProps="70%">
        <HeaderButton icon="back" text="Retour" navigation="home" />
        <Themes.Text style={{ fontWeight: "bold" }}>Vos favoris</Themes.Text>
      </Margin>
      <TabBarBottom text="home" />
    </>
  );
};

export default FavorisPage;
