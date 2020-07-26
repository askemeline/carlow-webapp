import React, { useState, useEffect } from "react";
import axios from "axios";

import Margin from "../components/forms/Margin.jsx";
import HeaderButton from "../components/forms/HeaderButton.jsx";
import TabBarBottom from "../components/TabBarBottom.jsx";
import Themes from "../constants/Themes.js";
import Loading from "../components/Loading.jsx";

const FavorisPage = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getFavs();
  }, []);

  const getFavs = async () => {
    setIsLoading(true);

    const { data: response } = await axios.get(
      "https://api-carlow.herokuapp.com/api/favs"
    );
    setData(response);
    setIsLoading(false);

    console.log(response);
  };

  const datas = Object.entries(data)
    .filter(([key]) => data[key] !== "false" && key !== "domicile")
    .map(([key, value]) => {
      return (
        <div key={key}>
          <p>
            {value.name}: {value.place.name}
          </p>
          <br />
        </div>
      );
    });

  return (
    <>
      <Margin heightProps="70%">
        <HeaderButton icon="back" text="Retour" navigation="profile" />
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Themes.Text style={{ fontWeight: "bold" }}>
              Vos favoris
            </Themes.Text>
            {datas.length ? datas : "Pas de favoris pour le moment"}
          </>
        )}
      </Margin>
      <TabBarBottom text="home" />
    </>
  );
};

export default FavorisPage;
