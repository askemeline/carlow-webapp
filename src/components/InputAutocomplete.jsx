import React, { useState, useEffect } from "react";
import axios from "axios";

import Field from "./forms/Field";
import Themes from "../constants/Themes";

const InputAutocomplete = ({ placeholder, id, fav=false, ...otherProps }) => {
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

  const handleValue = async (e) => {
    if (e === undefined) {
      return;
    }
    let val = {
      name: e.target.getAttribute('data-name'),
      googlePlaceId: e.target.getAttribute('data-google-place-id')
    }
    let url = null;
    if (fav) {
      url = "https://api-carlow.herokuapp.com/api/fav";
      try {
        val = {
          favName: fav,
          placeName: val.name,
          googlePlaceId: val.googlePlaceId,
          name: val.name
        }
        console.log(val)
      } catch (e) {
        console.log(e);
      }
    } else {
      url = "https://api-carlow.herokuapp.com/api/places";
    }
    try {
      const { data: response } = await axios.post(
        url,
        val
      );
      setPlaceId(response.id);
      id = response.id;
      if (val.placeName === undefined) {
        setValue(response.name);
      } else {
        setValue(val.placeName);
      }
      console.log(response);
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
        {...otherProps}
      />
      {selectedInput !== null
        ? Object.keys(selectedInput).map((keyName, i) => {
            const name = selectedInput[keyName].name;
            const googlePlaceId = selectedInput[keyName].googlePlaceId;
            return (
              <div style={{ marginTop: 15 }} key={i}>
                <Themes.Text
                  data-name={name}
                  data-google-place-id={googlePlaceId}
                  onClick={handleValue}
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
