import React from "react";
import SearchBar from "./SearchBar";
import Weather from "./Weather";
import ThemeContextProvider from "../context/ThemeContext";
import { CityNameContextProvider } from "../context/CityNameContext";

class App extends React.Component {
  render() {
    return (
      <div className="">
        <ThemeContextProvider>
          <CityNameContextProvider>
            <h1>Weather App</h1>
            <SearchBar />
            <Weather />
          </CityNameContextProvider>
        </ThemeContextProvider>
      </div>
    );
  }
}

export default App;
