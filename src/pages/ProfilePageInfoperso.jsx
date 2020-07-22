import React, { useState, useEffect } from "react";

import TabBarBottom from "../components/TabBarBottom.jsx";
import HeaderButton from "../components/forms/HeaderButton.jsx";
import Margin from "../components/forms/Margin.jsx";
import BackgroundDarkMode from "../components/BackgroundDarkMode.jsx";
import AuthAPI from "../services/authAPI.js";
import ButtonProfile from "../components/ButtonProfile.jsx";
import Themes from "../constants/Themes";
import Field from "../components/forms/Field.jsx";
import Loading from "../components/Loading.jsx";

const ProfilePage = () => {
  const [data, setData] = useState({});
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setHasError(true);
    const res = await AuthAPI.findUser();
    setData(res);
    setHasError(false);
  };

  return (
    <>
      <Margin heightProps="50%">
        <Themes.FlexStart>
          <HeaderButton icon="back" text="Retour" navigation="profile" />
        </Themes.FlexStart>
        {hasError ? (
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Loading />
          </div>
        ) : (
          <>
            <ButtonProfile text={data.email} />
            <ButtonProfile text={data.firstName} />
            <ButtonProfile text={data.lastName} />
            <BackgroundDarkMode />
          </>
        )}
        <TabBarBottom text="profile" />
      </Margin>
    </>
  );
};

export default ProfilePage;
