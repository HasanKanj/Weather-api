import React from 'react';
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

  
  return (
    <div className="app">
                <Header/>
                <Middle/>
                <Lower/>
      </div>
  ); }

export default App;
