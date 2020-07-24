import React from "react";
import styled from "styled-components";

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
  const handleClick = () => {
    history.push("/filter");
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
            />
            <InputAutocomplete
              style={{ marginTop: 20 }}
              placeholder="Destination"
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
