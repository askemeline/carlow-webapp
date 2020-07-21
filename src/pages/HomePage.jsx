import React, { useContext } from "react";
import FavorisInput from "../components/FavorisInput.jsx";
import TabBarBottom from "../components/TabBarBottom.jsx";

import AuthAPI from "../services/authAPI";
import { useHistory } from "react-router-dom";
import AuthContext from "../context/AuthContext.js";
import BackgroundSemicircle from "../components/forms/BackgroundSemicircle.jsx";

const HomePage = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  let history = useHistory();

  const handleLogOut = () => {
    AuthAPI.logout();
    setIsAuthenticated(false);
    history.push("/login");
  };
  return (
    <>
      <BackgroundSemicircle
        text="16,97 €"
        subText=" d’économie depuis Carlow !"
      />
      <button onClick={handleLogOut}>SE DECONNECTER</button>
      <p>Score calculé selon vos comparaisons et selon le VTC le plus cher</p>
      <FavorisInput
        type="search"
        name="search"
        placeholder="Votre destination"
      />
      <TabBarBottom text="home" />
    </>
  );
};

export default HomePage;
