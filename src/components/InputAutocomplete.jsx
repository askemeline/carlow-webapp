import React, { useState } from "react";
import axios from "axios";

import Field from "./forms/Field";
import Themes from "../constants/Themes";

const InputAutocomplete = () => {
  const [value, setValue] = useState("");
  const [selectedInput, setSelectedInput] = useState(null);
  const [selectedInputValue, setSelectedInputValue] = useState("");

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

  const handleValue = (val, e) => {
    setSelectedInputValue(val);
    var elem = document.getElementById("search");
    elem.value = val;
  };
  return (
    <>
      <Field
        type="search"
        placeholder="Ajouter votre destination"
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
                <Themes.Text onClick={() => handleValue(value)}>
                  {selectedInput[keyName].name}
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
