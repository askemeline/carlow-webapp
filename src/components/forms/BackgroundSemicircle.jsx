import React, { useContext } from "react";
import styled from "styled-components";
import AuthAPI from "../../services/authAPI";
import { useHistory } from "react-router-dom";
import AuthContext from "../../context/AuthContext.js";
import Themes from "../../constants/Themes";

const Flex = styled.div`
  display: flex;
  flex-direction: column;
`;
const BackgroundSemicircle = ({ text, subText = "", topText = "" }) => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  let history = useHistory();

  const handleLogOut = () => {
    AuthAPI.logout();
    setIsAuthenticated(false);
    history.push("/login");
  };
  return (
    <Themes.BackgroundColorHeader>
      <Flex>
        {topText === "Déconnexion" ? (
          <Themes.TopTextHeader onClick={handleLogOut}>
            {topText}
          </Themes.TopTextHeader>
        ) : null}

        <Themes.TextHeader>{text}</Themes.TextHeader>
        <Themes.SubTextHeader>{subText}</Themes.SubTextHeader>
      </Flex>
    </Themes.BackgroundColorHeader>
  );
};

export default BackgroundSemicircle;
