import React, { useState } from "react";
import axios from "axios";

import Field from "./forms/Field";
import Themes from "../constants/Themes";

const InputAutocomplete = ({ placeholder }) => {
  const [value, setValue] = useState("");
  const [selectedInput, setSelectedInput] = useState(null);

  const handleChange = async (e) => {
    e.preventDefault();
    setValue(e.target.value);
    try {
      const { data: response } = await axios.get(
        "https://api-carlow.herokuapp.com/api/place/autocomplete/" + value
      );
      setSelectedInput(response);
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
    }
  };

  const handleValue = (val) => {
    setValue(val);
    var elem = document.getElementById("search");
    elem.value = val;
  };

  return (
    <>
      <Field
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
        name={"firstname"}
        id="search"
        required
      />
      {selectedInput !== null
        ? Object.keys(selectedInput).map((keyName, i) => {
            const value = selectedInput[keyName].name;
            return (
              <div style={{ marginTop: 15 }} key={i}>
                <Themes.Text
                  onClick={() => {
                    handleValue(value);
                  }}
                >
                  {value}
                </Themes.Text>
                <hr />
              </div>
            );
          })
        : null}
    </>
  );
};

export default InputAutocomplete;
