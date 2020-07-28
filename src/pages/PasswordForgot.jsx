import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import Field from "../components/forms/Field.jsx";
import Button from "../components/forms/Button.jsx";
import HeaderButton from "../components/forms/HeaderButton.jsx";
import Margin from "../components/forms/Margin.jsx";
import Themes from "../constants/Themes.js";

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
    }
  };

  return (
    <>
      <Margin heightProps="80%">
        <HeaderButton icon="back" text="Retour" navigation="login" />
        <form onSubmit={handleSubmit}>
          <Themes.Title>Mot de passe oublié ?</Themes.Title>
          <Themes.Text>
            Entrer votre adresse mail et réinitialiser votre mot de passe
          </Themes.Text>
          <Field name="email" placeholder="E-mail" onChange={handleChange} />
          {error ? (
            <Themes.Error>{error}</Themes.Error>
          ) : (
            <Themes.Succes>{success}</Themes.Succes>
          )}
          <Button text="Envoyer" type="submit" />
        </form>
      </Margin>
    </>
  );
};

export default PasswordForgot;
