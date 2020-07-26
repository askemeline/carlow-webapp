import React, { useState, useEffect } from "react";
import axios from "axios";

import Field from "./forms/Field";
import Themes from "../constants/Themes";

const InputAutocomplete = ({ placeholder }) => {
  const [value, setValue] = useState("");
  const [selectedInput, setSelectedInput] = useState(null);
  const [placeId, setPlaceId] = useState(null);

  useEffect(() => {
    handleValue();
  }, []);

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

  const handleValue = async (val) => {
    try {
      const { data: response } = await axios.post(
        "https://api-carlow.herokuapp.com/api/places",
        val
      );
      setPlaceId(response.id);
      setValue(response.name);
    } catch (e) {
      console.log(`Axios request failed: ${e}`);
    }

    setSelectedInput(null);
  };

  return (
    <>
      <Field
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
        id="search"
        required
        data-id={placeId}
        value={value}
      />
      {selectedInput !== null
        ? Object.keys(selectedInput).map((keyName, i) => {
            const name = selectedInput[keyName].name;
            const googlePlaceId = selectedInput[keyName].googlePlaceId;
            return (
              <div style={{ marginTop: 15 }} key={i}>
                <Themes.Text
                  onClick={() => {
                    handleValue({ name: name, googlePlaceId: googlePlaceId });
                  }}
                >
                  {name}
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
