import React from "react";
import styled from "styled-components";

const MarginContainer = styled.div`
  margin: 0 20px 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Margin = ({ children, heightProps = "" }) => {
  return (
    <MarginContainer style={{ height: heightProps }}>
      {children}
    </MarginContainer>
  );
};

export default Margin;
