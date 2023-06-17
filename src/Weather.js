import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";
import FormattedDate from "./FormattedDate";
import SearchEngine from "./Searchengine"
import WeatherTemperature from "./WeatherTemperature";
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
        <h1 className="text-capitalize">{city}</h1>
        <ul>
          <li>
            <FormattedDate date={weather.date} />
          </li>
          <li className="text-capitalize description">{weather.description}</li>
          <div className="row">
            <div className="col-6">
              <img src={weather.icon} alt="current weather icon" />
              <WeatherTemperature celsius={Math.round(weather.temperature)} />
            </div>
            <div className="col-6">
              <ul>
                <li>Humidity: {weather.humidity}%</li>
                <li>Wind: {Math.round(weather.wind)} km/h</li>
              </ul>
            </div>
          </div>
        </ul>
        <WeatherForecast city={city} />
      </div>
    );
  } else {
    return form;
  }
}
