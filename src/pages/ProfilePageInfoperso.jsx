import React, { useState, useEffect } from "react";
import TabBarBottom from "../components/TabBarBottom.jsx";
import styled from "styled-components";

import HeaderButton from "../components/forms/HeaderButton.jsx";
import Margin from "../components/forms/Margin.jsx";
import BackgroundDarkMode from "../components/BackgroundDarkMode.jsx";
import AuthAPI from "../services/authAPI.js";
import ButtonProfile from "../components/ButtonProfile.jsx";

const FlexStart = styled.div`
  margin-bottom: auto;
  margin-top: -10px;
`;

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

  const datas = Object.entries(data)
    .filter(([key]) => key !== "id" && key !== "roles")
    .map(([key, value]) => {
      return (
        <>
          <ButtonProfile text={value} navigation="home" />
        </>
      );
    });

  return (
    <>
      <Margin heightProps="50%">
        <FlexStart>
          <HeaderButton icon="back" text="Retour" navigation="profile" />
        </FlexStart>
        {datas}
        <BackgroundDarkMode />
        <TabBarBottom text="profile" />
      </Margin>
    </>
  );
};

export default ProfilePage;
