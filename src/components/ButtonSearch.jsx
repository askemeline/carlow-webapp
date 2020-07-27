import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import Themes from "../constants/Themes.js";

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ButtonSearch = ({ name, ...otherProps }) => {
  return (
    <div>
      <Themes.ButtonSearch name={name} {...otherProps}>
        <Flex>
          <Themes.Text style={{ fontWeight: 400 }}>
            Votre destination
          </Themes.Text>
          <Flex>
            <Themes.Line />
            <Themes.Div>
              <BsSearch />
            </Themes.Div>
          </Flex>
        </Flex>
      </Themes.ButtonSearch>
    </div>
  );
};

export default ButtonSearch;
