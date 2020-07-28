import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";

import ButtonSearch from "../components/ButtonSearch.jsx";
import TabBarBottom from "../components/TabBarBottom.jsx";
import BackgroundSemicircle from "../components/forms/BackgroundSemicircle.jsx";
import Margin from "../components/forms/Margin.jsx";
import FavorisCard from "../components/FavorisCard.jsx";

const Text = styled.p`
  color: #ea9fa2;
  font-size: 12px;
  margin-top: 20px;
  padding: 20px 0 30px 0;
`;

const favs = ["Domicile", "Travail", "Favoris"];

const HomePage = ({ history }) => {
  const [savingPrice, setSavingPrice] = useState(0);

  const handleClick = () => {
    history.push("/search");
  };

  const getUser = async () => {
    try {
      const { data: response } = await axios.get(
        "https://api-carlow.herokuapp.com/api/users"
      );
      setSavingPrice(response[0].savingPrice);
    } catch (e) {
      console.log(e);
    }
  };
  getUser();

  return (
    <>
      <BackgroundSemicircle
        text={savingPrice / 100 + "€"} 
        subText=" d’économie depuis Carlow !"
        color="#F3D2D3"
      />
      <Margin>
        <Text>
          Score calculé selon vos comparaisons et selon le VTC le plus cher
        </Text>
        <ButtonSearch
          type="search"
          name="search"
          placeholder="Votre destination"
          onClick={handleClick}
        />
        <FavorisCard favoris={favs} />
      </Margin>
      <TabBarBottom />
    </>
  );
};

export default HomePage;
