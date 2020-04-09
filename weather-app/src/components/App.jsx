import React, { useContext } from "react";
import Weather from "./Weather";
import { WeatherContext } from "../context/WeatherContext";
import "./App.css";

function App() {
  const appContext = useContext(WeatherContext);
  const { loading, search } = appContext;
  return (
    <div className="ui container  main-page">
      {loading ? (
        <div className="ui container">
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading {search} weather...</div>
          </div>
          <p></p>
        </div>
      ) : (
        <Weather />
      )}
    </div>
  );
}

export default App;
