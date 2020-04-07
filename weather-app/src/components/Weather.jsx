import React, { useState, useEffect, useContext } from "react";
import OpenWeather from "../apis/OpenWeather";
import { CityNameContext } from "../context/CityNameContext";

const KEY = process.env.REACT_APP_API_KEY;

const Weather = () => {
  const [data, setData] = useState([""]);
  const [loading, setLoading] = useState(true);
  const [value, setValue] = useContext(CityNameContext);
  useEffect(() => {
    const fetchData = async () => {
      const response = await OpenWeather.get(
        `./weather?q=${value.city}&appid=${KEY}&units=metric`
      );
      setData(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);
  let myObj = data;
  return (
    <div>
      {loading ? <div>loading</div> : <div>{JSON.stringify(data)}</div>}
    </div>
  );
};

export default Weather;

// const useFetch = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [value, setValue] = useContext(CityNameContext);

//   useEffect(async () => {
//     const response = await OpenWeather.get(
//       `./weather?q=${value.city}&appid=${KEY}&units=metric`
//     );
//     setData(response.data);
//     setLoading(false);
//   }, []);
//   return { data, loading };
// };

// export default () => {
//   const { data, loading } = useFetch();
//   console.log({ data });
//   return (
//     <div>{loading ? <div>loading</div> : <div>{data.weather[0]}</div>}</div>
//   );
// };
