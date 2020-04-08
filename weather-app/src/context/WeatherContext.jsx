import React, { useState, useEffect } from "react";
import OpenWeather from "../apis/OpenWeather";

const WeatherContext = React.createContext();
const KEY = process.env.REACT_APP_API_KEY;

const WeatherProvider = (props) => {
  const [showHomeButton, setShowHomeButton] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  // let url = `https://api.openweathermap.org/data/2.5`;

  const fetchWeather = async () => {
    const response = await OpenWeather.get(
      `/weather?q=vancouver&appid=${KEY}&units=metric`
    );
    setResults(response.data);
    setLoading(false);
    console.log(results);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await OpenWeather.get(
        `/weather?q=${search}&appid=${KEY}&units=metric`
      );

      setResults(response.data);
      setLoading(false);
      setShowHomeButton(true);
    } catch (e) {
      console.log(e);
    }
  };
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const handleReturnHome = () => {
    fetchWeather();
    setShowHomeButton(false);
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <WeatherContext.Provider
      value={{
        loading,
        search,
        showHomeButton,
        results,
        handleSearchChange,
        handleSubmit,
        handleReturnHome,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
const WeatherConsumer = WeatherContext.Consumer;
export { WeatherProvider, WeatherConsumer, WeatherContext };
