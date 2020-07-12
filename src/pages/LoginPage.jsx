import React, { useState, useContext } from "react";
import styled from "styled-components";

import Field from "../components/forms/Field.jsx";
import Button from "../components/forms/Button.jsx";
import ButtonBottomText from "../components/forms/ButtonBottomText.jsx";
import BackgroundSemicircle from "../components/forms/BackgroundSemicircle.jsx";
import Margin from "../components/forms/Margin.jsx";
import AuthAPI from "../services/authAPI.js";
import AuthContext from "../context/AuthContext.js";

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

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setCredentials({ ...credentials, [name]: value });
  };

  const [error, setError] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await AuthAPI.authenticate(credentials);
      setError("");
      setIsAuthenticated(true);
      history.replace("/home");
    } catch (e) {
      setError({ ...error });
      console.log(`Axios request failed: ${e}`);
    }
  };

  return (
    <>
      <BackgroundSemicircle text="Hello, Se connecter" />
      <Margin heightProps="54%">
        <form onSubmit={handleSubmit}>
          <Field
            name="username"
            placeholder="Email"
            type="email"
            error={error.username}
            onChange={handleChange}
            value={credentials.username}
            required
          />
          <Field
            value={credentials.password}
            name="password"
            type="password"
            placeholder="Mot de passe"
            error={error.password}
            onChange={handleChange}
            required
          />
          <Button text="Connexion" type="submit" />
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
