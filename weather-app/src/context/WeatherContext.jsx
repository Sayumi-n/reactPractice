import React, { useState, useEffect } from "react";
import OpenWeather from "../apis/OpenWeather";

const WeatherContext = React.createContext();
const KEY = process.env.REACT_APP_API_KEY;

const WeatherProvider = (props) => {
  const [showHomeButton, setShowHomeButton] = useState(false);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(false);
  // const [forecast, setForecast] = useState([]);

  const fetchWeather = async () => {
    const response = await OpenWeather.get(
      `/weather?q=vancouver&appid=${KEY}&units=metric`
    );
    setResults(response.data);
    setLoading(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await OpenWeather.get(
        `/weather?q=${search}&appid=${KEY}&units=metric`
      );
      setResults(response.data);
      setLoading(false);
      setError(false);
    } catch (e) {
      setLoading(false);
      setError(true);
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
        error,

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

// const fetchForecast = async () => {
//   const response = await OpenWeather.get(
//     `/forecast?q=vancouver&appid=${KEY}&units=metric&cnt=8`
//   );
//   setForecast(response.data);
//   setLoading(false);
// };
