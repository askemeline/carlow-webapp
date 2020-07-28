import styled from "styled-components";
import theme from "styled-theming";
import { Link } from "react-router-dom";

const backgroundColor = theme("theme", {
  light: "#F7F7F7",
  dark: "#000000",
});

const textColor = theme("theme", {
  light: "#000",
  dark: "#fff",
});

const borderColorInput = theme("theme", {
  light: "#1C1C1E",
  dark: "#3D3D41",
});

const inputBackground = theme("theme", {
  light: "#F5F8F9",
  dark: "#1C1C1E",
});

const buttonColor = theme("theme", {
  light: "#273539",
  dark: "#3D3D41",
});

const buttonColorText = theme("theme", {
  light: "#F5F8F9",
  dark: "#F5F8F9",
});

const favButtonColorText = theme("theme", {
  light: "#273539",
  dark: "#FFFFFF",
});
const favButtonBackgroundcolor = theme("theme", {
  light: "#e1e6e8",
  dark: "#3D3D41",
});
const SearchButtonBackgroundcolor = theme("theme", {
  light: "#FFFFFF",
  dark: "#1C1C1E",
});

const vtc = theme("theme", {
  light: "#FFFFFF",
  dark: "#1C1C1E",
});

const BoxShadowTabBar = theme("theme", {
  light: "inset 0px 11px 8px -10px #ccc, inset 0px -11px 8px -10px #ccc",
  dark: "unset",
});

const BackgroundColorTabBar = theme("theme", {
  light: "#FFFFFF",
  dark: "#3D3D41",
});

const BackgroundColorHomeTabBar = theme("theme", {
  light: "#F3D2D3",
  dark: "#6B767A",
});

const ColorHomeTabBar = theme("theme", {
  light: "#AA696B",
  dark: "#FFFFFF",
});

const BackgroundColorSettingTabBar = theme("theme", {
  light: "#B4D0D3",
  dark: "#6B767A",
});

const ColorSettingTabBar = theme("theme", {
  light: "#337F86",
  dark: "#FFFFFF",
});

const ColorIconHomeTabBar = theme("theme", {
  light: "#AA696B",
  dark: "#FFFFFF",
});

const ColorIconSettingTabBar = theme("theme", {
  light: "#337F86",
  dark: "#FFFFFF",
});

const ColorIconOnlyTabBar = theme("theme", {
  light: "#022A2F",
  dark: "#FFFFFF",
});

const colorButtonRedirectVtc = theme("theme", {
  light: "#44565c",
  dark: "#FFFFFF",
});

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${backgroundColor};
  color: ${textColor};
`;

const BackgroundColorHeader = styled.div`
  background-color: #1f292c;
  height: 86px;
  border-radius: 0 0 100% 100%;
  z-index: -1;
  opacity: 0.86;
  display: flex;
  height: 40vw;
  align-items: center;
  justify-content: center;
`;

const TextHeader = styled.h1`
  text-decoration: none;
  color: #fff;
  font-size: 36px;
  text-align: center;
`;

const TopTextHeader = styled.button`
  color: #fff;
  font-size: 14px;
  text-align: right;
  margin-bottom: 12px;
  text-decoration: underline;
  border: none;
  background-color: #1f292c;
`;

const SubTextHeader = styled.p`
  text-decoration: none;
  color: #fff;
  font-size: 14px;
  text-align: center;
  margin-top: 15px;
`;

const ButtonProfile = styled(Link)`
  background-color: ${inputBackground};
  border: none;
  color: ${textColor};
  border-radius: 5px;
  padding: 13px 28px;
  margin: 8px 0;
  width: 90%;
  text-align: left;
  text-decoration: none;
  margin-left: auto;
  margin-right: auto;
  display: block;
  opacity: 0.86;
  position: relative;
  border: 0.5px solid;
  border-color: ${borderColorInput};
`;

const ButtonProfileDisabled = styled.button`
  pointer-events: none;
  background-color: ${inputBackground};
  border: none;
  color: ${textColor};
  border-radius: 5px;
  padding: 13px 28px;
  margin: 10px 0;
  width: 90%;
  text-align: left;
  text-decoration: none;
  margin-left: auto;
  margin-right: auto;
  display: block;
  opacity: 0.5;
  position: relative;
  border: 0.5px solid;
  border-color: ${borderColorInput};
`;

const ToggleDarkMode = styled.div`
  background-color: ${inputBackground};
  border: none;
  color: ${textColor};
  border-radius: 5px;
  padding: 13px 28px;
  margin: 10px 0;
  width: 90%;
  text-align: left;
  text-decoration: none;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  opacity: 0.86;
  position: relative;
  border: 0.5px solid;
  border-color: ${borderColorInput};
`;

const Input = styled.input`
  width: 100%;
  padding: 15px 10px;
  margin: 8px 0;
  box-sizing: border-box;
  background-color: ${inputBackground};
  border: 0.5px solid;
  border-radius: 4px;
  color: ${textColor};
  height: 50px;
  ::placeholder {
    color: ${textColor};
  }
`;

const Button = styled.button`
  background-color: ${buttonColor};
  color: ${buttonColorText};
  border-radius: 5px;
  padding: 15px 30px;
  margin: 10px 0;
  text-align: center;
  text-decoration: none;
  width: 100%;
  opacity: 0.86;
  border: none;
`;

const ButtonText = styled(Link)`
  text-decoration: none;
  color: ${buttonColorText};
  font-size: 15px;
`;

const TextLink = styled(Link)`
  text-decoration: none;
  color: ${textColor};
  font-size: 15px;
`;

const Title = styled.h1`
  color: ${textColor};
  font-size: 24px;
  margin-bottom: 10px;
`;

const Text = styled.p`
  color: ${textColor};
  font-size: 16px;
  margin: 15px 0;
`;

const TextCO2 = styled.p`
  color: ${textColor};
  font-size: 12px;
  margin: 15px 0;
`;

const Error = styled.p`
  color: red;
`;

const Succes = styled.p`
  color: green;
`;

const FlexStart = styled.div`
  margin-bottom: auto;
  margin-top: -10px;
`;

const FlexEnd = styled.div`
  margin-top: auto;
  z-index: 99;
`;

const Flex = styled.div`
  display: flex;
  align-items: center;
`;

const ButtonFavoris = styled.button`
  width: 120px;
  height: 45px;
  border-radius: 50px;
  background-color: ${favButtonBackgroundcolor};
  color: ${favButtonColorText};
  text-decoration: none;
  border: none;
  margin: 10px;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1040;
  width: 100vw;
  height: 100vh;
  background-color: #000;
  opacity: 0.5;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
`;

const Modal = styled.div`
  z-index: 100;
  background: ${backgroundColor};
  position: fixed;
  border-radius: 3px;
  width: 100%;
  padding: 2rem;
  bottom: 0;
`;

const ModalVtc = styled.div`
  z-index: 100;
  background: ${backgroundColor};
  position: fixed;
  border-radius: 3px;
  padding: 2rem;
  margin: 20px;
  top: 20%;
  overflow: auto;
  height: 400px;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ButtonFilter = styled.button`
  width: 120px;
  height: 45px;
  border-radius: 50px;
  background-color: ${favButtonBackgroundcolor};
  color: ${favButtonColorText};
  text-decoration: none;
  border: none;
  margin: 10px;
  text-transform: capitalize;
`;

const CardVTC = styled.div`
  background-color: ${vtc};
  margin: 20px -20px -80px -20px;
  padding: 20px 20px 0 20px;
  overflow: auto;
`;

const Line = styled.div`
  width: 1px;
  min-height: 40px;
  background: ${textColor};
  margin-right: 20px;
`;

const Div = styled.div`
  color: ${textColor};
`;

const ButtonSearch = styled.button`
  width: 100%;
  padding: 15px 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 15px;
  border: 1px solid #f9f9f9;
  box-shadow: 0px 0px 19px -9px rgba(0, 0, 0, 0.48);
  height: 70px;
  background: ${SearchButtonBackgroundcolor};

  ::placeholder {
    color: #273539;
  }
`;

const ContainerTabBarBottom = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: 80px;
  font-size: 16px;
  box-shadow: ${BoxShadowTabBar};
  justify-content: space-around;
  background-color: ${BackgroundColorTabBar};
`;

const FlexHome = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 120px;
  display: flex;
  justify-content: center;
  border-radius: 25px;
  background-color: ${BackgroundColorHomeTabBar};
`;

const FlexSetting = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 120px;
  display: flex;
  justify-content: center;
  border-radius: 25px;
  background-color: ${BackgroundColorSettingTabBar};
`;

const TextHomeTabBar = styled.p`
  margin-left: 5px;
  text-decoration: none;
  color: ${ColorHomeTabBar};
`;

const TextSettingTabBar = styled.p`
  margin-left: 5px;
  text-decoration: none;
  color: ${ColorSettingTabBar};
`;

const IconHomeTabBar = styled.div`
  color: ${ColorIconHomeTabBar};
  display: flex;
  align-items: center;
`;

const IconSettingTabBar = styled.div`
  color: ${ColorIconSettingTabBar};
  display: flex;
  align-items: center;
`;

const IconOnlyabBar = styled.div`
  color: ${ColorIconOnlyTabBar};
`;

const Center = styled.div`
  text-align: center;
  margin-top: 40px;
`;
const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: space-between;
`;

const FlexVtc = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonClose = styled.button`
  background-color: Transparent;
  background-repeat: no-repeat;
  border: none;
  overflow: hidden;
  outline: none;
  padding: inherit;
  font-weight: 500;
  padding-top: 40px;
  color: #aa696b;
`;
const Redirect = styled(Link)`
  color: ${colorButtonRedirectVtc};
  padding-top: 40px;
  font-weight: bold;
`;

export default {
  colorButtonRedirectVtc,
  ButtonClose,
  Redirect,
  ModalVtc,
  Center,
  Cards,
  FlexVtc,
  IconOnlyabBar,
  ColorIconOnlyTabBar,
  IconHomeTabBar,
  IconSettingTabBar,
  ColorIconSettingTabBar,
  ColorIconHomeTabBar,
  TextHomeTabBar,
  TextSettingTabBar,
  ColorSettingTabBar,
  ColorHomeTabBar,
  FlexHome,
  FlexSetting,
  BackgroundColorSettingTabBar,
  BackgroundColorHomeTabBar,
  ContainerTabBarBottom,
  ButtonSearch,
  Div,
  Line,
  CardVTC,
  vtc,
  ButtonFilter,
  ModalOverlay,
  ModalHeader,
  Modal,
  ModalWrapper,
  backgroundColor,
  textColor,
  Container,
  TextHeader,
  SubTextHeader,
  BackgroundColorHeader,
  ButtonProfile,
  ButtonProfileDisabled,
  ToggleDarkMode,
  Input,
  buttonColor,
  ButtonText,
  Button,
  borderColorInput,
  buttonColorText,
  TextLink,
  Title,
  Text,
  TextCO2,
  Error,
  Succes,
  TopTextHeader,
  FlexStart,
  FlexEnd,
  Flex,
  ButtonFavoris,
  favButtonColorText,
  favButtonBackgroundcolor,
};
