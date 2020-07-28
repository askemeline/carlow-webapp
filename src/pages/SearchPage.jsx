import React from "react";
import styled from "styled-components";
import axios from "axios";

import Margin from "../components/forms/Margin.jsx";
import HeaderButton from "../components/forms/HeaderButton.jsx";
import TabBarBottom from "../components/TabBarBottom.jsx";
import InputAutocomplete from "../components/InputAutocomplete.jsx";
import Button from "../components/forms/Button.jsx";

const Card = styled.div`
  padding: 0 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const handleSubmit = async (event) => {
  event.preventDefault();
};

const Search = ({ history }) => {
  const handleClick = async () => {
    const start = document.querySelector(".start");
    const end = document.querySelector(".end");

    try {
      const { data: response } = await axios.get(
        "https://api-carlow.herokuapp.com/api/ride/comparison-v2?start_place_id=" +
          start.getAttribute("data-id") +
          "&end_place_id=" +
          end.getAttribute("data-id")
      );
      history.push({
        pathname: "/filter",
        state: { rideComparison: response },
      });
    } catch (e) {}
  };
  return (
    <>
      <Margin heightProps="88%">
        <HeaderButton icon="back" text="Retour" navigation="home" />
        <form onSubmit={handleSubmit}>
          <Card>
            <InputAutocomplete
              placeholder="Lieu actuel"
              style={{ marginBottom: 30 }}
              data-role="start"
              className="start"
              fav={false}
            />
            <InputAutocomplete
              placeholder="Destination"
              data-role="end"
              className="end"
              fav={false}
            />
          </Card>
        </form>
        <Button
          className="btn-searchpage"
          text="Valider"
          type="submit"
          onClick={handleClick}
        />
      </Margin>
      <TabBarBottom />
    </>
  );
};

export default Search;
