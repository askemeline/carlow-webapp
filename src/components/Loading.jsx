import React from "react";
import * as ReactBootStrap from "react-bootstrap";

import Themes from "../constants/Themes.js";

const Loading = () => {
  return (
    <Themes.Flex>
      <ReactBootStrap.Spinner
        animation="border"
        variant="danger"
        role="status"
      ></ReactBootStrap.Spinner>
      <Themes.Text style={{ marginLeft: 10 }}>Chargement...</Themes.Text>
    </Themes.Flex>
  );
};

export default Loading;
