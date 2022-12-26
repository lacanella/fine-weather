import React from "react";

import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  function handleResponse(responce) {
    console.log(responce.data);
  }
  console.log(props);

  let apiKey = "fc91beb744f93e422747179ad98c56f9";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Thu</div>

          <div className="WeatherForecast-temperatures">
            {" "}
            <span className="WeatherForecast-temperatures-max">19</span>{" "}
            <span className="WeatherForecast-temperatures-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
