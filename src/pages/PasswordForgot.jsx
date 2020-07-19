import React, { useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Field from "../components/forms/Field.jsx";
import Button from "../components/forms/Button.jsx";
import HeaderButton from "../components/forms/HeaderButton.jsx";
import Margin from "../components/forms/Margin.jsx";

const Title = styled.p`
  color: #fff;
  font-size: 18px;
`;

const Text = styled.p`
  color: #fff;
  font-size: 16px;
`;
const Error = styled.p`
  color: red;
`;
const Succes = styled.p`
  color: green;
`;

const PasswordForgot = () => {
  let history = useHistory();

  const [email, setEmail] = useState("");
  const [error, setErrors] = useState("");
  const [success, setSuccess] = useState("");

  const delay = (ms) => new Promise((res) => setTimeout(res, ms));

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(email);

    try {
      await axios.get(
        "https://api-carlow.herokuapp.com/api/password-reset/mail/" + email
      );
      setSuccess(
        "Vous allez recevoir un email contenant un lien qui vous permettra de choisir un nouveau mot de passe."
      );
      await delay(5000);

      history.push("/login");
    } catch (e) {
      setErrors("Oops cet email n'existe pas");

      console.log(`Axios request failed: ${e}`);
    }
  };

  return (
    <>
      <Margin>
        <HeaderButton icon="back" text="Retour" navigation="login" />
        <form onSubmit={handleSubmit}>
          <div>
            <Title>Mot de passe oublié ?</Title>
            <Text>
              Entrer votre adresse mail et réinitialiser votre mot de passe
            </Text>
          </div>
          <Field name="email" placeholder="E-mail" onChange={handleChange} />
          {error ? <Error>{error}</Error> : <Succes>{success}</Succes>}
          <Button text="Envoyer" type="submit" />
        </form>
      </Margin>
    </>
  );
};

export default PasswordForgot;
