import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import Switch from 'react-input-switch';


const Button = styled.div`
  background-color: #3d3d41;
  border: none;
  color: #fff;
  border-radius: 5px;
  padding: 13px 28px;
  margin: 10px 0;
  width: 80%;
  text-align: left;
  text-decoration: none;
  margin-left: auto;
  margin-right: auto;
  display: block;
  opacity: 0.86;
  position: relative;
`;


const ButtonProfile = ({ text, navigation,  ...otherProps }) => {
  
  return (
    <Button to={`${navigation}`} class="btn btn-warning" type="text" {...otherProps}> 
      {text} <Switch className="chevron-right" /> 
    </Button>
  );
};

export default ButtonProfile;
