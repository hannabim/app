import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";
import WeatherInfo from "./WeatherInfo";
export default function Weather(props) {
  const [city, setCity] = useState(props.defaultcity);
  const [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});
  function ChangeCity(event) {
    setCity(event.target.value);
  }
  function search() {
    let apiKey = "599abtb07236d08d64676o3f61450582";
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(url).then(displayWeather);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function displayWeather(response) {
    setLoaded(true);
    setWeather({
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      temperature: response.data.temperature.current,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      icon: response.data.condition.icon_url,
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
        <WeatherInfo info={weather} />
        <WeatherForecast city={city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
