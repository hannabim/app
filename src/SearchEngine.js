import React, { useState } from "react";
import axios from "axios";
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
      Weather app
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city"
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
      <div>
        {form}
        <ul>
          <li>Temperature:{Math.round(weather.temperature)}</li>
          <li>Humidity:{weather.humidity}</li>
          <li>Wind:{Math.round(weather.wind)}</li>
          <li>
            <img src={weather.icon} alt="icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
