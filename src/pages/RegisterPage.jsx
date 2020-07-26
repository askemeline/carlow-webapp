import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Field from "../components/forms/Field.jsx";
import Button from "../components/forms/Button.jsx";
import HeaderButton from "../components/forms/HeaderButton.jsx";
import ButtonBottomText from "../components/forms/ButtonBottomText.jsx";
import Margin from "../components/forms/Margin.jsx";
import Themes from "../constants/Themes";
import Loading from "../components/Loading.jsx";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const RegisterPage = (props) => {
  let history = useHistory();

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setUser({ ...user, [name]: value });
  };

  const [hasError, setHasError] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setHasError(false);
    console.log("user", user);
    try {
      await axios.post("https://api-carlow.herokuapp.com/api/users", user);
      setHasError(true);
      setSuccess(
        "Votre inscription a été pris en compte vous pouvez maintenant vous connecter"
      );
      await delay(5000);
      history.push("/login");
    } catch (e) {
      setHasError(false);
      setError("Il semblerait que cet email existe déjà");
      console.log(`Axios request failed: ${e}`);
    }
  };

  return (
    <>
      <Margin heightProps="92%">
        <HeaderButton icon="back" text="Retour" navigation="login" />
        <Themes.Title>Inscription</Themes.Title>
        <form onSubmit={handleSubmit}>
          <Field
            name="firstName"
            placeholder="Prénom"
            type="text"
            onChange={handleChange}
            value={user.firstname}
          />
          <Field
            name="lastName"
            placeholder="Nom"
            type="text"
            onChange={handleChange}
            value={user.lastName}
          />
          <Field
            name="email"
            placeholder="Email"
            type="email"
            onChange={handleChange}
            value={user.email}
            required
          />
          <Field
            name="password"
            type="password"
            placeholder="Mot de passe"
            onChange={handleChange}
            value={user.password}
            required
          />
          <Field
            name="passwordConfirm"
            type="password"
            placeholder="Confirmation mot de passe"
            value={user.passwordConfirm}
            onChange={handleChange}
          />

          <Button text="Valider" type="submit" />
          {error ? (
            <Themes.Error>{error}</Themes.Error>
          ) : (
            <Themes.Succes>{success}</Themes.Succes>
          )}
          {hasError ? <Loading /> : null}
          <Container>
            <ButtonBottomText text="J'ai déjà un compte" navigation="login" />
          </Container>
        </form>
      </Margin>
    </>
  );
};

export default RegisterPage;
