import React from "react";
import { FaTimes, FaChevronLeft } from "react-icons/fa";

import "./HeaderButton.css";

const HeaderButton = ({ text, icon = "" }) => {
  return (
    <div className="flex">
      {icon === "back" ? <FaChevronLeft /> : <FaTimes />}
      <div className="text">{text}</div>
    </div>
  );
};

export default HeaderButton;
