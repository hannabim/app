import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1 className="text-capitalize">{props.info.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.info.date} />
        </li>
        <li className="text-capitalize description">
          {props.info.description}
        </li>
        <div className="row">
          <div className="col-6">
            <img src={props.info.icon} alt="current weather icon" />
            <WeatherTemperature celsius={Math.round(props.info.temperature)} />
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {props.info.humidity}%</li>
              <li>Wind: {Math.round(props.info.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
}
