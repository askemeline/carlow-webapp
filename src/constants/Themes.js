import styled from "styled-components";
import theme from "styled-theming";

const backgroundColor = theme("theme", {
  light: "#F7F7F7",
  dark: "#000000",
});

const textColor = theme("theme", {
  light: "#000",
  dark: "#fff",
});

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
  font-family: sans-serif;
  background-color: ${backgroundColor};
  color: ${textColor};
`;

export default {
  backgroundColor,
  textColor,
  Container,
};
