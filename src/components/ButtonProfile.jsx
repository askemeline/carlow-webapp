import React from "react";
import { FaChevronRight } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)`
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

const ButtonProfile = ({ text, navigation, ...otherProps }) => {
  return (
    <Button
      to={`${navigation}`}
      className="btn btn-warning"
      type="text"
      {...otherProps}
    >
      {text} <FaChevronRight className="chevron-right" />
    </Button>
  );
};

export default ButtonProfile;
