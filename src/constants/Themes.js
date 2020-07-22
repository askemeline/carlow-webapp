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
  margin: 10px 0;
  width: 80%;
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

const ButtonProfileDisabled = styled(Link)`
  pointer-events: none;
  background-color: ${inputBackground};
  border: none;
  color: ${textColor};
  border-radius: 5px;
  padding: 13px 28px;
  margin: 10px 0;
  width: 80%;
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
  width: 80%;
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

const Error = styled.p`
  color: red;
`;
const Succes = styled.p`
  color: green;
`;

export default {
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
  Error,
  Succes,
};
