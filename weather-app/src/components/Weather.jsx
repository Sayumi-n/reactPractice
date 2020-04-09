import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import { WeatherContext } from "../context/WeatherContext";
import DisplayWeather from "./DisplayWeather";

export default function Weather() {
  const appContext = useContext(WeatherContext);
  const { results, error } = appContext;

  return (
    <div className="ui container">
      <SearchBar></SearchBar>

      <div className="ui segments results">
        {error ? (
          <div className="ui segment">
            <p className="error">City not found...</p>
            <p className="error">Try with different city.</p>
          </div>
        ) : (
          <DisplayWeather results={results} />
        )}
      </div>
    </div>
  );
}
