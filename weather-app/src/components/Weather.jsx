import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import { WeatherContext } from "../context/WeatherContext";
import DisplayWeather from "./DisplayWeather";

export default function Weather() {
  const appContext = useContext(WeatherContext);
  const { showHomeButton, results, handleReturnHome } = appContext;
  console.log(results);

  return (
    <>
      <SearchBar></SearchBar>
      <div className="container my-5 home-button">
        {showHomeButton && (
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => handleReturnHome()}
          >
            Go Back Home
          </button>
        )}
        <div className=" d-flex d-flex justify-content-center mb-3">
          <h1 className="text-slaned ">Recipe List</h1>
        </div>

        <div className="row recipe-list">
          {results.weather.map((result, index) => (
            <DisplayWeather key={index} result={result} />
          ))}
        </div>
      </div>
    </>
  );
}
