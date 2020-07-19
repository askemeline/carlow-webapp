import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Field from "../components/forms/Field.jsx";
import Button from "../components/forms/Button.jsx";
import HeaderButton from "../components/forms/HeaderButton.jsx";
import ButtonBottomText from "../components/forms/ButtonBottomText.jsx";
import Margin from "../components/forms/Margin.jsx";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const Title = styled.h1`
  color: #ffff;
`;
const Error = styled.p`
  color: red;
`;
const Succes = styled.p`
  color: green;
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

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("user", user);
    try {
      await axios.post("https://api-carlow.herokuapp.com/api/users", user);
      setSuccess(
        "Votre inscription a été pris en compte vous pouvez maintenant vous connecter"
      );
      await delay(5000);
      history.push("/login");
    } catch (e) {
      setError("Il semblerait que cet email existe déjà");

      console.log(`Axios request failed: ${e}`);
    }
  };

  return (
    <>
      <Margin heightProps="92%">
        <HeaderButton icon="back" text="Retour" navigation="login" />
        <Title>Inscription</Title>
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
            placeholder="Prénom"
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
          {error ? <Error>{error}</Error> : <Succes>{success}</Succes>}
          <Container>
            <ButtonBottomText text="J'ai déjà un compte" navigation="login" />
          </Container>
        </form>
      </Margin>
    </>
  );
};

export default RegisterPage;
