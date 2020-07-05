import React, { useState } from "react";

import Field from "../components/forms/Field.jsx";
import Button from "../components/forms/Button.jsx";
import HeaderButton from "../components/forms/HeaderButton.jsx";
// import axios from "axios";
import { Link } from "react-router-dom";

import ApiService from '../services/ApiService.js';

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
  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      ApiService.registerUser(user)
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
          error={errors.firstName}
          onChange={handleChange}
        />
        <Field
          name="lastname"
          placeholder="Prénom"
          error={errors.lastName}
          onChange={handleChange}
        />
        <Field
          name="email"
          placeholder="Email"
          error={errors.email}
          onChange={handleChange}
        />
        <Field
          name="password"
          type="password"
          placeholder="Mot de passe"
          error={errors.password}
          onChange={handleChange}
        />
        <Field
          name="passwordConfirm"
          type="password"
          placeholder="Confirmation mot de passe"
          error={errors.passwordConfirm}
          onChange={handleChange}
        />

        <div>
          <Button text="Valider" type="submit" />
          <Link to="/login">J'ai déjà un compte</Link>
        </div>
      </form>
    </>
  );
};

export default RegisterPage;
