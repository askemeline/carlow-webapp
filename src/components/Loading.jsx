import React from "react";
import Themes from "../constants/Themes";
import * as ReactBootStrap from "react-bootstrap";

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
