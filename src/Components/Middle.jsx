import React from 'react'
import storm from "../img/weather-icons/storm.svg";
import '../App.css';

function Middle({}) {

    return (
        <div className="middle">
        <img src={storm} alt="storm icon" />
        <div className="Weather_Description">
       
        </div>
        <div className="firstclass">
          <b>overcast clouds</b>
        </div>
        <div className="temp">
        <p >Temperature 10º to 11ºC</p> 
          </div>
           <div className="humidity">
           <b>Humidity</b> 78%&nbsp;&nbsp;
            <b>Presssure &nbsp;</b> 1008.48
        </div>
        </div>
    )
}
export default Middle;