import React, { useState } from "react";

import TabBarBottom from "../components/TabBarBottom.jsx";
import Margin from "../components/forms/Margin.jsx";
import HeaderButton from "../components/forms/HeaderButton.jsx";
import Themes from "../constants/Themes.js";

import RenderFilterVtc from "../components/RenderFilterVtc.jsx";
import RenderSortableVtc from "../components/RenderSortableVtc.jsx";
import VtcListItem from "../components/VtcListItem.jsx";

const FilterPage = () => {
  const [filterData, setFilterData] = useState("classique");
  const [sortableData, setSortableData] = useState("prix");

  const handleFilter = (val) => {
    setFilterData(val);
  };
  const handleSortable = (value) => {
    setSortableData(value);
  };

  return (
    <>
      <Margin heightProps="75%">
        <HeaderButton icon="back" text="Retour" navigation="home" />
        <Themes.Center>
          <Themes.Text style={{ fontWeight: "bold" }}>Vos filtres</Themes.Text>
        </Themes.Center>
        <Themes.Cards>
          <RenderFilterVtc handleFilter={handleFilter} />
        </Themes.Cards>
        <Themes.Cards>
          <RenderSortableVtc handleSortable={handleSortable} />
        </Themes.Cards>
        <Themes.CardVTC>
          <VtcListItem filter={filterData} sortable={sortableData} />
        </Themes.CardVTC>
      </Margin>
      <TabBarBottom />
    </>
  );
};

export default FilterPage;
