import React from "react";
import { MdSettings } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Themes from "../constants/Themes.js";

const TabBarBottom = () => {
  let location = useLocation();
  return (
    <Themes.ContainerTabBarBottom>
      {location.pathname === "/profile" ? (
        <>
          <Link to="/home">
            <Themes.IconOnlyabBar className="icon">
              <IoIosHome />
            </Themes.IconOnlyabBar>
          </Link>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <Themes.FlexSetting>
              <Themes.IconSettingTabBar className="icon">
                <MdSettings />
                <Themes.TextSettingTabBar>Réglage</Themes.TextSettingTabBar>
              </Themes.IconSettingTabBar>
            </Themes.FlexSetting>
          </Link>
        </>
      ) : (
        <>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Themes.FlexHome>
              <Themes.IconHomeTabBar className="icon">
                <IoIosHome />
                <Themes.TextHomeTabBar>Accueil</Themes.TextHomeTabBar>
              </Themes.IconHomeTabBar>
            </Themes.FlexHome>
          </Link>
          <Link to="/profile">
            <Themes.IconOnlyabBar className="icon">
              <MdSettings />
            </Themes.IconOnlyabBar>
          </Link>
        </>
      )}
    </Themes.ContainerTabBarBottom>
  );
};

export default TabBarBottom;
