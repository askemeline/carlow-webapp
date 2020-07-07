import React from "react";
import styled from "styled-components";


const MarginContainer = styled.div`
   margin: 20px;
`;


const Margin = ({ children }) => {
  return <MarginContainer>{children}</MarginContainer>;
};

export default Margin;
