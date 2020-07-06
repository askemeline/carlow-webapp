import React, { useState } from "react";
import styled from "styled-components";

import Field from "../components/forms/Field.jsx";
import Button from "../components/forms/Button.jsx";
import HeaderButton from "../components/forms/HeaderButton.jsx";
import ButtonBottomText from "../components/forms/ButtonBottomText.jsx";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const RegisterPage = (props) => {
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUser({ [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
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
      <HeaderButton icon="back" text="Retour" navigation="login" />
      <h1>Inscription</h1>
      <form onSubmit={handleSubmit}>
        <Field
          name="firstname"
          placeholder="Prénom"
          type="email"
          error={errors.firstName}
          handleChange={handleChange}
          required
        />
        <Field
          name="lastname"
          placeholder="Prénom"
          type="email"
          error={errors.lastName}
          handleChange={handleChange}
          required
        />
        <Field
          name="email"
          placeholder="Email"
          type="email"
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
        <Field
          name="passwordConfirm"
          type="password"
          placeholder="Confirmation mot de passe"
          error={errors.passwordConfirm}
          handleChange={handleChange}
          required
        />

        <Button text="Valider" type="submit" />
        <Container>
          <ButtonBottomText text="J'ai déjà un compte" navigation="login" />
        </Container>
      </form>
    </>
  );
};

export default RegisterPage;
