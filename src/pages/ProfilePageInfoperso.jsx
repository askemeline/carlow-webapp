import React, { useState, useEffect } from "react";

import TabBarBottom from "../components/TabBarBottom.jsx";
import HeaderButton from "../components/forms/HeaderButton.jsx";
import Margin from "../components/forms/Margin.jsx";
import BackgroundDarkMode from "../components/BackgroundDarkMode.jsx";
import AuthAPI from "../services/authAPI.js";
import ButtonProfile from "../components/ButtonProfile.jsx";
import Themes from "../constants/Themes";
import Field from "../components/forms/Field.jsx";

const ProfilePage = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await AuthAPI.findUser();
    console.log(res);
    setData(res);
  };

  const handle = () => {
    alert(`HLEELELLEL ${data.email}`);
  };

  return (
    <>
      <Margin heightProps="50%">
        <Themes.FlexStart>
          <HeaderButton icon="back" text="Retour" navigation="profile" />
        </Themes.FlexStart>

        <ButtonProfile text={data.email} onClick={handle} />
        <ButtonProfile text={data.firstName} />
        <ButtonProfile text={data.lastName} />
        <BackgroundDarkMode />
        <TabBarBottom text="profile" />
      </Margin>
    </>
  );
};

export default ProfilePage;
