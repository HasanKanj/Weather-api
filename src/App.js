import React, { useState,useEffect } from 'react';
import './App.css';
import Header from "./Components/Header";
import MainWeather from "./Components/Middle";
import Lower from "./Components/Lower";
import FakeWeather from "./data/FakeWeather.json";
import storm from "./img/weather-icons/storm.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import fog from "./img/weather-icons/fog.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import clear from "./img/weather-icons/clear.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import Middle from './Components/Middle';

function App() {
const [weather,setWeather] = useState();

imagesChecker = id => {
  
  if (id < 300) {
    return storm;
  } else if (id >= 300 && id <= 499) {
    return drizzle;
  } else if (id >= 500 && id <= 599) {
    return rain;
  } else if (id >= 600 && id <= 699) {
    return snow;
  } else if (id >= 700 && id <= 799) {
    return fog;
  } else if (id === 800) {
    return clear;
  } else if (id === 801) {
    return partlycloudy;
  } else if (id > 801 && id <= 805) {
    return mostlycloudy;
  }
};


// useEffect((props) => {
  const fetchData = (searchedWord)=>{
    
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+searchedWord+'&appid=4c46658e254dc6bb3899a3967f20890b')
  .then((response) => {
    return response.json();
  })
  .then(data => {
    setWeather(data)
  });

  }
  // ,[fetch]);

  
  return (
    <div className="app">
                <Header fetchData={fetchData}/>
                <Middle data={weather}/>
                <Lower/>
      </div>
  ); }

export default App;
