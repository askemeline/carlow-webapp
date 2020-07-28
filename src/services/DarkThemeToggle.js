import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { TOGGLE_DARKTHEME } from "./actions";
import Themes from "../constants/Themes";

const DarkThemeToggle = ({ ...otherProps }) => {
  const darkThemeEnabled = useSelector(
    (state) => state.preferences.darkThemeEnabled
  );
  const dispatch = useDispatch();
  return (
    <Themes.ToggleDarkMode type="text" {...otherProps}>
      <div className="toggle-container">
        <p>Activer le theme sombre</p>
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
    </Themes.ToggleDarkMode>
  );
};

export default DarkThemeToggle;
