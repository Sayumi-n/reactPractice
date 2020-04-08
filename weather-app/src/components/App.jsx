import React, { useContext } from "react";
import Weather from "./Weather";
import { WeatherContext } from "../context/WeatherContext";

function App() {
  const appContext = useContext(WeatherContext);
  const { loading, search } = appContext;
  return (
    <div>
      {loading ? (
        <h1 className="text-center">...fetching {search} recipe</h1>
      ) : (
        <Weather />
      )}
    </div>
  );
}

export default App;
