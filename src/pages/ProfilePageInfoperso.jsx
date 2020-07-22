import React, { useState, useEffect } from "react";
import axios from "axios";

import TabBarBottom from "../components/TabBarBottom.jsx";
import HeaderButton from "../components/forms/HeaderButton.jsx";
import Margin from "../components/forms/Margin.jsx";
import BackgroundDarkMode from "../components/BackgroundDarkMode.jsx";
import AuthAPI from "../services/authAPI.js";
import Themes from "../constants/Themes";
import Loading from "../components/Loading.jsx";
import Field from "../components/forms/Field.jsx";
import Button from "../components/forms/Button.jsx";

const ProfilePage = () => {
  const [data, setData] = useState({});
  const [hasError, setHasError] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setHasError(true);
    const res = await AuthAPI.findUser();
    setData(res);
    setHasError(false);
  };
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const handleChange = ({ currentTarget }) => {
    const { name, value } = currentTarget;
    setUser({ ...user, [name]: value });
  };
  console.log(user);
  const handleSubmit = async (event) => {
    alert("click");
    console.log("heheh");
    event.preventDefault();
    const id = await AuthAPI.getId();
    console.log(id);
    try {
      await axios.put(`https://api-carlow.herokuapp.com/api/users/${id}`, user);
      await AuthAPI.logout();
      await AuthAPI.isAuthenticated(user);
      setHasError(true);
      setSuccess("Vos informations ont bien été mis a jour");
    } catch (error) {
      setHasError(false);
      setError("Une erreur est survenue");
      console.log(`Axios request failed: ${error}`);
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    }
    console.log(id);
  };

  return (
    <>
      <Margin heightProps="60%">
        <Themes.FlexStart>
          <HeaderButton icon="back" text="Retour" navigation="profile" />
        </Themes.FlexStart>
        {hasError ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Loading />
          </div>
        ) : (
          <>
            <Themes.Title>
              Modifier ou mettez à jour vos informations
            </Themes.Title>
            <form onSubmit={handleSubmit}>
              <Field
                name="email"
                type="email"
                placeholder={data.email}
                onChange={handleChange}
                value={user.email}
                required
              />
              <Field
                name="firstName"
                type="text"
                placeholder={data.firstName}
                onChange={handleChange}
                value={user.firstName}
                required
              />
              <Field
                name="lastName"
                type="text"
                placeholder={data.lastName}
                value={user.lastName}
                onChange={handleChange}
                required
              />
              {error ? (
                <Themes.Error>{error}</Themes.Error>
              ) : (
                <Themes.Succes>{success}</Themes.Succes>
              )}
              <Button text="Valider" type="submit" />
            </form>
          </>
        )}
        <TabBarBottom text="profile" />
      </Margin>
    </>
  );
};

export default ProfilePage;
