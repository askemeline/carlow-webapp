import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import FacebookLogin from "react-facebook-login";
import { Link } from "react-router-dom";

import Field from "../components/forms/Field.jsx";
import Button from "../components/forms/Button.jsx";

const LoginPage = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setUser({ ...user, [name]: value });
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
  const responseGoogle = (response) => {
    console.log(response);
  };
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <>
      <h1>Se connecter</h1>
      <form>
        <div className="flex">
          <GoogleLogin
            clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
          />
          <FacebookLogin
            appId="1088597931155576"
            autoLoad={true}
            fields="name,email,picture"
            //   onClick={componentClicked}
            callback={responseFacebook}
            // cssClass="my-facebook-button-class"
          />
        </div>
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
        <Button text="Connexion" type="submit" />
        <div className="flex">
          <Link to="/register">Créer un compte</Link>
          <Link to="/passwordforgot">Mot de passe oublié</Link>
        </div>
      </form>
    </>
  );
};

export default LoginPage;
