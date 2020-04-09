import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export default function SearchBar() {
  const appContext = useContext(WeatherContext);
  const { handleSubmit, handleSearchChange } = appContext;

  return (
    <div
      className="ui segment search-bar"
      style={{ backgroundColor: "rgba(255,255,255,0.8)" }}
    >
      <h3 className="ui header">Weather App</h3>
      <form className="ui form" onSubmit={(e) => handleSubmit(e)}>
        <div className="ui small icon input">
          <input
            data-age=""
            onChange={(e) => handleSearchChange(e)}
            type="text"
            className="form-control"
            id="search"
            placeholder="city"
            name="search"
          />
          <i className="search icon"></i>
        </div>
      </form>
    </div>
  );
}
