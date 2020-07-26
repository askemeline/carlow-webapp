import React, { useState, useContext } from "react";
import styled from "styled-components";

import Field from "../components/forms/Field.jsx";
import Button from "../components/forms/Button.jsx";
import ButtonBottomText from "../components/forms/ButtonBottomText.jsx";
import BackgroundSemicircle from "../components/forms/BackgroundSemicircle.jsx";
import Margin from "../components/forms/Margin.jsx";
import AuthAPI from "../services/authAPI.js";
import AuthContext from "../context/AuthContext.js";
import Themes from "../constants/Themes";
import Loading from "../components/Loading.jsx";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  color: #fff;
`;

const LoginPage = ({ history }) => {
  const { setIsAuthenticated } = useContext(AuthContext);

  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    try {
      await AuthAPI.authenticate(credentials);
      setIsLoading(true);
      console.log("await");
      setIsAuthenticated(true);
      history.replace("/home");
    } catch (e) {
      setIsLoading(false);
      setError("Indentifiant invalide");
      console.log(`Axios request failed: ${e}`);
    }
  };

  return (
    <>
      <BackgroundSemicircle text="Se connecter" />
      <Margin heightProps="54%">
        <form onSubmit={handleSubmit}>
          <Field
            name="username"
            placeholder="Email"
            type="email"
            onChange={handleChange}
            value={credentials.username}
            errorInput={error}
            required
          />
          <Field
            value={credentials.password}
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={handleChange}
            errorInput={error}
            required
          />
          <Button text="Connexion" type="submit" />
          <Themes.Error>{error}</Themes.Error>
          {isLoading ? <Loading /> : null}

          <Container>
            <ButtonBottomText text="Créer un compte" navigation="register" />
            <ButtonBottomText
              text="Mot de passe oublié"
              navigation="passwordforgot"
            />
          </Container>
        </form>
      </Margin>
    </>
  );
};

export default LoginPage;
