import React, { useState, useEffect } from "react";
//import Weather from "./Weather";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./WeatherForecast.css";
export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);
  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }
  if (loaded) {
    return (
      <div className="WeatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6 && index > 0) {
              return <WeatherForecastDay key={index} data={dailyForecast} />;
            }
          })}
        </div>
      </div>
    );
  } else {
    let apiKey = "599abtb07236d08d64676o3f61450582";
    let url = `https://api.shecodes.io/weather/v1/forecast?query=${props.city}&key=${apiKey}`;

    axios.get(url).then(handleResponse);
    return null;
  }
}
