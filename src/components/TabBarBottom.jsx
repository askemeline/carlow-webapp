import React from "react";
import styled from "styled-components";
import { MdSettings } from "react-icons/md";
import { IoIosHome } from "react-icons/io";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Container = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  height: 80px;
  margin: 0 -20px;
  font-size: 16px;
  box-shadow: inset 0px 11px 8px -10px #ccc, inset 0px -11px 8px -10px #ccc;
  justify-content: space-around;
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  width: 120px;
  display: flex;
  justify-content: center;
  border-radius: 25px;
`;
const Text = styled.p`
  margin-left: 5px;
  text-decoration: none;
`;

const TabBarBottom = ({ text }) => {
  return (
    <Container>
      {text === "profile" ? (
        <>
          <Link to="/home">
            <IconContext.Provider value={{ color: "#022A2F", size: "2em" }}>
              <IoIosHome />
            </IconContext.Provider>
          </Link>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <Flex
              style={{
                backgroundColor: text === "home" ? "#F3D2D3" : "#B4D0D3",
              }}
            >
              <IconContext.Provider value={{ color: "#337F86", size: "2em" }}>
                <MdSettings />
                <Text
                  style={{ color: text === "home" ? "#AA696B" : "#337F86" }}
                >
                  Réglage
                </Text>
              </IconContext.Provider>
            </Flex>
          </Link>
        </>
      ) : (
        <>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Flex
              style={{
                backgroundColor: text === "home" ? "#F3D2D3" : "#B4D0D3",
              }}
            >
              <IconContext.Provider value={{ color: "#AA696B", size: "2em" }}>
                <IoIosHome />
                <Text
                  style={{ color: text === "home" ? "#AA696B" : "#337F86" }}
                >
                  Acceuil
                </Text>
              </IconContext.Provider>
            </Flex>
          </Link>
          <Link to="/profile">
            <IconContext.Provider value={{ color: "#022A2F", size: "2em" }}>
              <MdSettings />
            </IconContext.Provider>
          </Link>
        </>
      )}
    </Container>
  );
};

export default TabBarBottom;
