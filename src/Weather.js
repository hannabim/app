import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";
import FormattedDate from "./FormattedDate";
import SearchEngine from "./Searchengine"
import WeatherTemperature from "./WeatherTemperature";
 const [loaded, setLoaded] = useState(false);
export default function Weather(props){
   useEffect(() => {
  setLoaded(false);
 }, [props.city]);

}
