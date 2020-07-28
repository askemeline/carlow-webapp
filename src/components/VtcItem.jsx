import React from "react";

import Vtc from "./Vtc.jsx";

const VtcItem = ({ rides }) => {
  return (
    <>
      {rides.map((i) => (
        <div key={i}>
          <Vtc ride={i} />
        </div>
      ))}
    </>
  );
};

export default VtcItem;
