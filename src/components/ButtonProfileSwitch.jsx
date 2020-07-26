import React from "react";
import styled from "styled-components";

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
  display: flex;
  opacity: 0.86;
  position: relative;
`;

const ButtonProfile = ({ text, navigation = "", ...otherProps }) => {
  return (
    <Button
      to={`${navigation}`}
      className="btn btn-warning"
      type="text"
      {...otherProps}
    >
      {text}
      <div className="toggle-container">
        <span>☀︎</span>
        <span className="toggle">
          <input id="checkbox" className="checkbox" type="checkbox" />
          <label htmlFor="checkbox" />
        </span>
      </div>
    </Button>
  );
};

export default ButtonProfile;
