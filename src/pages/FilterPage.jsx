import React from "react";
import styled from "styled-components";

import TabBarBottom from "../components/TabBarBottom.jsx";
import Margin from "../components/forms/Margin.jsx";
import HeaderButton from "../components/forms/HeaderButton.jsx";

const FilterPage = () => {
  return (
    <>
      <Margin heightProps="80%">
        <HeaderButton icon="back" text="Retour" navigation="home" />
        <p>Vos filtres</p>
      </Margin>
      <TabBarBottom text="home" />
    </>
  );
};

export default FilterPage;
