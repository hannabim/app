import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
export default function SearchEngine() {
  const [city, setCity] = useState("");
  const [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});
  function ChangeCity(event) {
    setCity(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "35508be96ee4e5cd4520c32d236240eb";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    axios.get(url).then(displayWeather);
  }

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }
  let form = (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city..."
              autoFocus="on"
              onChange={ChangeCity}
            />
          </div>
          <div className="col-3">
            {" "}
            <button type="submit" className="btn btn-primary">
              {" "}
              Search{" "}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
  if (loaded) {
    return (
      <div className="Weather">
        {form}
        <h1>{city}</h1>
        <ul>
          <li>Wednesday 17:00</li>
          <li>Mostly cloudy</li>
          <div className="row">
            <div className="col-6">
              <img src={weather.icon} alt="mostly cloudy" />
              <span className="temperature">
                {Math.round(weather.temperature)}
              </span>
              <span className="unit">°C</span>
            </div>
            <div className="col-6">
              <ul>
                <li>Precipitation: {weather.precipitation}%</li>
                <li>Humidity:{weather.humidity}%</li>
                <li>Wind: {Math.round(weather.wind)} km/h</li>
              </ul>
            </div>
          </div>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
