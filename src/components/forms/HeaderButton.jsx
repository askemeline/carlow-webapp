import React from "react";
import { FaTimes, FaChevronLeft } from "react-icons/fa";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled.p`
  margin-left: 8px;
`;

const HeaderButton = ({ text, icon = "" }) => {
  return (
    <Container>
      {icon === "back" ? <FaChevronLeft /> : <FaTimes />}
      <Text>{text}</Text>
    </Container>
  );
};

export default HeaderButton;
