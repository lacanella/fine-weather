import React from "react";

import FormateDate from "./FormateDate";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="weatherinfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormateDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>
      </ul>

      <div className="row mt-3">
        <div className="col-7">
          <div className="clearfix">
            <div className="float-start">
              <img src={props.data.iconUrl} alt={props.data.description} />
            </div>
            <div className="float-left">
              <WeatherTemperature celsius={props.data.temperature} />
            </div>
          </div>
        </div>
        <div className="col-5">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
