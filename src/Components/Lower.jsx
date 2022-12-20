import React , {Component} from 'react';
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
class Lower extends Component {
  render(){
      return(
          <div className='middle'>
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
                 <img className="imgsize" src={mostlycloudy} alt="mostlycloudy" />
                 <img className="imgsize" src={mostlycloudy} alt="mostlycloudy" />
                 <img className="imgsize" src={clear} alt="mostlycloudy" />
                 <img className="imgsize" src={clear} alt="mostlycloudy" />
                 <img className="imgsize" src={clear} alt="mostlycloudy" />
                 <img className="imgsize" src={clear} alt="mostlycloudy" />
                 <img className="imgsize" src={mostlycloudy} alt="mostlycloudy" />
              </div>
              <div className='C'>
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
}
export default Lower ;