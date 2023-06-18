import React from "react";
import WeatherTemperature from "./WeatherTemperature";
export default function WeatherInfo(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Sunday",
  ];
  let day = props.weather.date.getDay();
  let hours = props.weather.date.getHours();
  let minutes = props.weather.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  return (
    <div className="WeatherInfo">
      <h1 className="text-capitalize">{props.weather.city}</h1>
      <ul>
        <li>
          <div>
            {days[day]}, {hours}:{minutes}{" "}
          </div>
        </li>
        <li className="text-capitalize description">
          {props.weather.description}
        </li>
        <div className="row">
          <div className="col-6">
            <img src={props.weather.icon} alt="current weather icon" />
            <WeatherTemperature
              celsius={Math.round(props.weather.temperature)}
            />
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {props.weather.humidity}%</li>
              <li>Wind: {Math.round(props.weather.wind)} km/h</li>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
}
