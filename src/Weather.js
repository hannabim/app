import React from "react";
import SearchEngine from "./SearchEngine";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <SearchEngine />
      <h1>Lisbon</h1>
      <ul>
        <li>Wednesday 17:00</li>
        <li>Mostly cloudy</li>
        <div className="row">
          <div className="col-6">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
              alt="mostly cloudy"
            />
            <span className="temperature">6</span>
            <span className="unit">°C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Precipitation: 15%</li>
              <li>Humidity: 72%</li>
              <li>Wind: 12 km/h</li>
            </ul>
          </div>
        </div>
      </ul>
    </div>
  );
}
