import React from "react";
import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import { IconContext } from "react-icons";

const Input = styled.button`
  width: 100%;
  padding: 15px 10px;
  margin: 8px 0;
  box-sizing: border-box;
  border-radius: 15px;
  border: 1px solid #f9f9f9;
  box-shadow: 0px 0px 19px -9px rgba(0, 0, 0, 0.48);
  height: 70px;

  ::placeholder {
    color: #273539;
  }
`;
const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Text = styled.p`
  font-size: 16px;
  margin: 15px 0;
  color: #000;
  font-weight: 400;
`;

const Line = styled.div`
  width: 1px;
  min-height: 40px;
  background: #000;
  margin-right: 20px;
`;

const ButtonSearch = ({ name, ...otherProps }) => {
  return (
    <div>
      <Input name={name} {...otherProps}>
        <Flex>
          <Text>Votre destintaion</Text>
          <Flex>
            <Line />
            <IconContext.Provider value={{ size: "1.5em" }}>
              <BsSearch />
            </IconContext.Provider>
          </Flex>
        </Flex>
      </Input>
    </div>
  );
};

export default ButtonSearch;
