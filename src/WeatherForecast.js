import React, { useState, useEffect } from "react";

import WeaatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function handleResponse(responce) {
    setForecast(responce.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div className="WeatherForecast">
        <div className="row ">
          <div className="col">
            <WeaatherForecastDay data={forecast[0]} />
          </div>
          <div className="col">
            <WeaatherForecastDay data={forecast[1]} />
          </div>
          <div className="col">
            <WeaatherForecastDay data={forecast[2]} />
          </div>
          <div className="col">
            <WeaatherForecastDay data={forecast[3]} />
          </div>
          <div className="col">
            <WeaatherForecastDay data={forecast[4]} />
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "fc91beb744f93e422747179ad98c56f9";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
