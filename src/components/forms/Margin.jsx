import React from "react";
import styled from "styled-components";


const MarginContainer = styled.div`
  margin: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;


const Margin = ({ children, heightProps }) => {
  return( <MarginContainer style={{ height: heightProps ? heightProps : "80%"}}>
  {children}
  </MarginContainer>
  );
};

export default Margin;
