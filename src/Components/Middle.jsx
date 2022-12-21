import React from 'react'
import storm from "../img/weather-icons/mostlycloudy.svg";

export default function MainWeather({props}) {
    return (
        <div className="middle">
        <img src={storm} alt="storm icon" />
        <div className="Weather_Description">
          {props.description}
        </div>
        <div className="firstclass">
         <b>overcast clouds</b>
        </div>
        <div className="temp">
        <b>Temperature</b> {Math.floor(props.minTemp- 273.15)}°C to {Math.floor(props.maxTemp- 273.15)}°C
          </div>
           <div className="humidity">
           <b>Humidity</b> {props.humidity}% 78%&nbsp;&nbsp;
            <b>Presssure &nbsp;</b>  {props.pressure}
        </div>
        </div>
    )
}