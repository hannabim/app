import React from "react";
export default function WeatherForecastDay(props) {
  let icon = `https://openweathermap.org/img/wn/${props.data.weather[0].icon}@2x.png`;
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Sunday",
    ];
    return days[day];
  }

  return (
    <div className="col">
      {" "}
      <div className="WeatherForecast-day"> {day}</div>
      <div className="icon"> {icon}</div>
      <div className="WeatherForecast-temperatures">
        <span className="WeatherForecast-temperature-max">
          {Math.round(props.data.temp.max)}°
        </span>
        <span className="WeatherForecast-temperature-min">
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
}
