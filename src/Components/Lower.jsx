
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";

export default function Lower(props) {
    //console.log(props)
    return (
        <div className="Lower_list">
        {props.list.map((item,index)=>{
                if(index>0 && index< 8)
                return <Lower time={item.dt_txt} temp={item.main.temp} key={index} image={props.getImage(item.weather[0].id)}/>
        }
                )}
 
      </div>

    )
}