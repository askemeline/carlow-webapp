import React from "react";
import { FaTimes, FaChevronLeft } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as FondRetour } from '../../asset/bg-retour.svg';

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled(Link)`
  margin-left: 8px;
  text-decoration: none;
  color: #fff;
`;

const Image = styled(FondRetour)`
  position: absolute;
  top: 0;
  left: 0;
`

const HeaderButton = ({ text, icon = "", navigation }) => {
  return (
<<<<<<< HEAD
    <div style={{ color: "white" }}>
=======
    
>>>>>>> created profile page, added assets, modified Margin component to add a Height props, change route name setting to profile
      <Container>
        <Image />
        <div style={{color: 'white',position: 'absolute', top: '10px', left: '25px'}}>
        {icon === "back" ? <FaChevronLeft /> : <FaTimes />}
        <Text to={`${navigation}`}>{text}</Text>
        </div>
      </Container>
    
  );
};

export default HeaderButton;

