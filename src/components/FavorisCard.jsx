import React from "react";
import FavorisItem from "./FavorisItem.jsx";
import styled from "styled-components";

const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: space-between;
`;

const FavorisCard = ({ favoris }) => {
  return (
    <Flex>
      {favoris.map((i) => (
        <FavorisItem key={i.id} fav={i} />
      ))}
    </Flex>
  );
};

export default FavorisCard;
