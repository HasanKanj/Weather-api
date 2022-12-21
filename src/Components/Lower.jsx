import React from "react";
import clear from "../img/weather-icons/clear.svg";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";


export default function Lower({props}) {
  return (
                <div>
                <div className='time'>
                   <p>03:00</p> 
                   <p>06:00</p>
                   <p>09:00</p> 
                   <p>12:00</p>
                   <p>15:00</p>
                   <p>18:00</p>
                   <p>21:00</p>
                </div>
                <div className='img'>
                   <img className="imgsize" src={mostlycloudy} alt="most cloudy icon" />
                   <img className="imgsize" src={mostlycloudy} alt="smost cloudy icon" />
                   <img className="imgsize" src={clear} alt="clear icon" />
                   <img className="imgsize" src={clear} alt="clear icon" />
                   <img className="imgsize" src={clear} alt="clear icon" />
                   <img className="imgsize" src={clear} alt="clear icon" />
                   <img className="imgsize" src={mostlycloudy} alt="most cloudy icon" />
                </div>
                <div className='Lower_list'>
                     <p>8 ºC</p>                  
                     <p>9 ºC</p>
                     <p>14 ºC</p>
                     <p>17 ºC</p>
                     <p>18 ºC</p>
                     <p>16 ºC</p>
                     <p>13 ºC</p> 
                </div>
            </div>
  )
}
