import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { WeatherProvider } from "./context/WeatherContext";

ReactDOM.render(
  <WeatherProvider>
    <App />
  </WeatherProvider>,
  document.querySelector("#root")
);
