import React, { useContext } from "react";
import { WeatherContext } from "../context/WeatherContext";

export default function SearchBar() {
  const appContext = useContext(WeatherContext);
  const { handleSubmit, handleSearchChange } = appContext;

  return (
    <div className="">
      <form className="" onSubmit={e => handleSubmit(e)}>
        <label htmlFor="search">Search:</label>
        <input
          data-age=""
          onChange={e => handleSearchChange(e)}
          type="text"
          className="form-control"
          id="search"
          placeholder=""
          name="search"
        />
        <button type="submit" className="">
          <i className="fa fa-search"></i>
        </button>
      </form>
    </div>
  );
}
