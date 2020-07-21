import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_DARKTHEME } from "./actions";
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

const DarkThemeToggle = ({ navigation = "", ...otherProps }) => {
  const darkThemeEnabled = useSelector(
    (state) => state.preferences.darkThemeEnabled
  );
  const dispatch = useDispatch();
  return (
    <Button
      to={`${navigation}`}
      className="btn btn-warning"
      type="text"
      {...otherProps}
    >
      <div className="toggle-container">
        <p>Activer le theme sombre</p>
        <span /*style={{ color: darkMode ? "grey" : "yellow" }}*/>☀︎</span>
        <span className="toggle">
          <input
            id="checkbox"
            className="checkbox"
            type="checkbox"
            checked={darkThemeEnabled}
            onChange={() => dispatch({ type: TOGGLE_DARKTHEME })}
          />
          <label htmlFor="checkbox" />
        </span>
      </div>
    </Button>
  );
};

export default DarkThemeToggle;
