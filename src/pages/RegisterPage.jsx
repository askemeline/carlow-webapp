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

const RegisterPage = (props) => {
  let history = useHistory();

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

  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("user", user);
    try {
      const response = await axios.post(
        "https://maxime-marechal.com/api-carlow/public/api/users",
        user
      );
      console.log("👉 Returned data:", response);
      history.push("/login");
    } catch (e) {
      console.log(`😱 Axios request failed: ${e}`);
    }
  };

  return (
    <>
      <Margin>
        <HeaderButton icon="back" text="Retour" navigation="login" />
        <Title>Inscription</Title>
        <form onSubmit={handleSubmit}>
          <Field
            name="firstname"
            placeholder="Prénom"
            type="email"
            error={errors.firstName}
            handleChange={handleChange}
          />
          <Field
            name="lastname"
            placeholder="Prénom"
            type="email"
            error={errors.lastName}
            handleChange={handleChange}
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
          />

          <Button text="Valider" type="submit" />
          <Container>
            <ButtonBottomText text="J'ai déjà un compte" navigation="login" />
          </Container>
        </form>
      </Margin>
    </>
  );
};

export default RegisterPage;
