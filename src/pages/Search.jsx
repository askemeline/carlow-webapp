import React from "react";
import styled from "styled-components";
import axios from "axios";

import Margin from "../components/forms/Margin";
import HeaderButton from "../components/forms/HeaderButton";
import TabBarBottom from "../components/TabBarBottom";
import InputAutocomplete from "../components/InputAutocomplete";
import Button from "../components/forms/Button";

const Card = styled.div`
  padding: 0 0 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const handleSubmit = async (event) => {
  event.preventDefault();
  console.log("submit");
};

const Search = ({ history }) => {
  const handleClick = async () => {
    const start = document.querySelector('.start');
    const end = document.querySelector('.end');

    try {
      const { data: response } = await axios.get(
        "https://api-carlow.herokuapp.com/api/ride/comparison-v2?start_place_id=" 
        + start.getAttribute('data-id') + "&end_place_id=" + end.getAttribute('data-id')
      );
      history.push({pathname: "/filter", state: {rideComparison: response}});
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
    }
  };
  return (
    <>
      <Margin heightProps="70%">
        <HeaderButton icon="back" text="Retour" navigation="home" />
        <form onSubmit={handleSubmit}>
          <Card>
            <InputAutocomplete
              placeholder="Lieu actuel"
              style={{ marginBottom: 30 }}
              data-role="start"
              className="start"
            />
            <InputAutocomplete
              style={{ marginTop: 20 }}
              placeholder="Destination"
              data-role="end"
              className="end"
            />
          </Card>
          <Button
            text="Valider"
            type="submit"
            onClick={handleClick}
            style={{ marginTop: 100 }}
          />
        </form>
      </Margin>
      <TabBarBottom text="home" />
    </>
  );
};

export default Search;
