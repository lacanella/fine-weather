import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="weatherTemperature">
      <span className="temperature">{props.celsius}</span>
      <span className="unit">°C</span>
    </div>
  );
}
