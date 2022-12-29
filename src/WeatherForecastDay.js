import React from "react";

export default function WeaatherForecastDay(props) {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <div className="WeatherForecast-icon"></div>
      <div className="WeatherForecast-temperatures">
        {" "}
        <span className="WeatherForecast-temperatures-max">
          {" "}
          {Math.round(props.data.temp.max)}°
        </span>{" "}
        <span className="WeatherForecast-temperatures-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
