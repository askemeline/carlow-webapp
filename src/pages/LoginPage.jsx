import React, { useState } from "react";
import styled from "styled-components";

import Field from "../components/forms/Field.jsx";
import Button from "../components/forms/Button.jsx";
import ButtonBottomText from "../components/forms/ButtonBottomText.jsx";
import { useHistory } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const LoginPage = (props) => {
  let history = useHistory();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    history.push("/home");
    try {
      //TODO: register user on api
      setErrors({});
    } catch (error) {
      console.log(error.response);
      //   const { violations } = error.response.data;

      //TODO: gerer erreur msg avec l'api
    }
    console.log(user);
  };

  return (
    <>
      <h1>Se connecter</h1>
      <form onSubmit={handleSubmit}>
        <Field
          name="email"
          placeholder="Email"
          error={errors.email}
          handleChange={handleChange}
          required
        />
        <Field
          name="password"
          type="password"
          placeholder="Mot de passe"
          error={errors.password}
          handleChange={handleChange}
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
    </>
  );
};

export default LoginPage;
