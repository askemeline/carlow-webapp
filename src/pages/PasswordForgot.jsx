import React, { useState } from "react";

import Field from "../components/forms/Field.jsx";
import Button from "../components/forms/Button.jsx";

const PasswordForgot = () => {
  const [email, setEmail] = useState({
    email: "",
  });
  const [errors, setErrors] = useState({
    email: "",
  });
  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setEmail({ ...email });
  };
  return (
    <>
      <h1>Mot de passe oublié</h1>
      <form>
        <Field
          name="email"
          placeholder="Email"
          error={errors.email}
          onChange={handleChange}
        />
        <Button text="Envoyer" type="submit" />
      </form>
    </>
  );
};

export default PasswordForgot;
