import React, { useState } from "react";
import styled from "styled-components";

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
      <Margin>
        <HeaderButton icon="back" text="Retour" navigation="login" />
        <form>
          <div>
            <Title>Mot de passe oublié ?</Title>
            <Text>
              Entrer votre adresse mail et réinitialiser votre mot de passe
            </Text>
          </div>
          <Field
            name="email"
            placeholder="E-mail"
            error={errors.email}
            handleChange={handleChange}
          />
          <Button text="Envoyer" type="submit" />
        </form>
      </Margin>
    </>
  );
};

export default PasswordForgot;
