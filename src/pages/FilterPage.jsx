import React from "react";
import styled from "styled-components";

import TabBarBottom from "../components/TabBarBottom.jsx";
import Margin from "../components/forms/Margin.jsx";
import HeaderButton from "../components/forms/HeaderButton.jsx";
import ButtonItem from "../components/ButtonItem.jsx";

const FilterPage = () => {
  return (
    <>
      <Margin heightProps="80%">
        <HeaderButton icon="back" text="Retour" navigation="home" />
        <p>Vos filtres</p>
      </Margin>
      <ButtonItem />
      <TabBarBottom text="home" />
    </>
  );
};

export default FilterPage;
