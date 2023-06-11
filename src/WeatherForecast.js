import React, { useState } from "react";
//import Weather from "./Weather";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./WeatherForecast.css";
export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          <WeatherForecastDay data={forecast[0]} />
        </div>
      </div>
    );
  } else {
    let apiKey = "35508be96ee4e5cd4520c32d236240eb";
    let lon = props.coord.lon;
    let lat = props.coord.lat;
    let url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
    axios.get(url).then(handleResponse());
    return null;
  }
}
