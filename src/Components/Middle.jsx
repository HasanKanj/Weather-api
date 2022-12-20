import React from 'react'
import storm from "../img/weather-icons/mostlycloudy.svg";

export default function MainWeather() {
    return (
        <div className="middle">
        <img src={storm} alt="storm icon" />
        <div className="firstclass">
         <b>overcast clouds</b>
        </div>
        <div className="temp">
          <b>Temperature &nbsp; </b> 10º to 11ºC
          </div>
           <div className="humidity">
            <b>Humidity &nbsp;</b> 78%&nbsp;&nbsp;
            <b>Presssure &nbsp;</b>  1008.48
        </div>
        </div>
    )
}