import React from "react";
import { FaTimes, FaChevronLeft } from "react-icons/fa";
import { withRouter } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled(Link)`
  margin-left: 8px;
  text-decoration: none;
  color: #fff;
`;

const HeaderButton = ({ text, icon = "", navigation }) => {
  return (
    <div style={{color: 'white'}}>
      <Container>
        {icon === "back" ? <FaChevronLeft /> : <FaTimes />}
        <Text to={`${navigation}`}>{text}</Text>
      </Container>
    </div>
  );
};

export default HeaderButton;
