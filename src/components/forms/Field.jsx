import React from "react";
import styled from "styled-components";

import Themes from "../../constants/Themes";

const Error = styled.p`
  color: red;
`;

const Field = ({ name, error = "", errorInput = "", ...otherProps }) => {
  return (
    <>
      <Themes.Input
        name={name}
        {...otherProps}
        style={{ borderColor: errorInput ? "red" : "" }}
      />
      {error && <Error>{error}</Error>}
    </>
  );
};

export default Field;
