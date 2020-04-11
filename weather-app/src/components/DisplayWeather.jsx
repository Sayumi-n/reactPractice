import React from "react";

export default function DisplayWeather({ results }) {
  const icon = `/icons/${results.weather[0].icon}.svg`;
  const flag = results.sys.country;

  return (
    <>
      <div
        className="ui center aligned segment"
        style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
      >
        <h3 className="ui header">
          {`${results.name},
            ${results.sys.country}`}
          <span className="flag">
            <i className={flag.toLowerCase() + " " + "flag"}></i>
          </span>
        </h3>
      </div>
      <div
        className="ui center aligned segment"
        style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
      >
        <img className="ui small image centered" src={icon} alt="icon" />
      </div>
      <div
        className="ui segment"
        style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
      >
        <div className="ui two column centered grid">
          <div className="two column centered row">
            <div className="column">
              <h4 className="">{results.weather[0].description}</h4>
            </div>
            <div className="column">
              <h4>
                {Math.round((results.main.temp * 100) / 100)}
                <span className="celsius">°C</span>
              </h4>
            </div>
          </div>
          <div className="two column centered row">
            <div className="column">
              <p className="min">Min</p>
              <p>
                {Math.round((results.main.temp_min * 100) / 100)}
                <span className="celsius">°C</span>
              </p>
            </div>
            <div className="column">
              <p className="max">Max</p>
              <p>
                {Math.round((results.main.temp_max * 100) / 100)}
                <span className="celsius">°C</span>
              </p>
            </div>
          </div>

          <div className="two column centered row">
            <div className="column">
              <p className="">humidity</p>
              <p className="">{results.main.humidity}%</p>
            </div>
            <div className="column">
              <p className="">wind</p>
              <p>{results.wind.speed}m/s</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className="ui center aligned segment"
        style={{ backgroundColor: "rgba(255,255,255,0.7)" }}
      ></div>
    </>
  );
}
