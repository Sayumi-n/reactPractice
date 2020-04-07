import React, { useContext } from "react";
import { CityNameContext } from "../context/CityNameContext";

export default function SearchBar() {
  const [value, setValue] = useContext(CityNameContext);
  const onInputChange = e => {
    setValue({
      value: e.target.value
    });
  };
  const onFormSubmit = e => {
    e.preventDefault();
    setValue({
      value: ""
    });
  };
  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        name="city"
        value={value.city}
        onChange={onInputChange}
      />
      <input
        type="button"
        value="submit
     "
      />
    </form>
  );
}
