
import './App.css';
import Header from "./Components/Header";
import MainWeather from "./Components/Middle";
import Lower from "./Components/Lower";
import FakeWeather from "./data/FakeWeather.json";
import React, { useState } from 'react';

function App() {
 
imagesChecker = id => {


  if (id < 300) {
  
  return storm.svg;
  
  } else if (id >= 300 && id <= 499) {
  
  return drizzle.svg;
  
  } else if (id >= 500 && id <= 599) {
  
  return rain.svg;
  
  } else if (id >= 600 && id <= 699) {
  
  return snow.svg;
  
  } else if (id >= 700 && id <= 799) {
  
  return fog.svg;
  
  } else if (id === 800) {
  
  return clear.svg;
  
  } else if (id === 801) {
  
  return partlycloudy.svg;
  
  } else if (id > 801 && id <= 805) {
  
  return mostlycloudy;

  }
  
  };
  


  
  return (
    <div className="app">
      <Header/>
      <>
                <MainWeather
                  image={this.imagesChecker(this.state.weather.list[0].weather[0].id)}
                  minTemp={this.state.weather.list[0].main.temp_min}
                  maxTemp={this.state.weather.list[0].main.temp_max}
                  humidity={this.state.weather.list[0].main.humidity}
                  pressure={this.state.weather.list[0].main.pressure}
                  description={
                    this.state.weather.list[0].weather[0].description
                  }
                />

                <Lower list={this.state.weather.list} getImage={this.imagesChecker} />
              </>
       <Lower/>
    </div>
  );
                }

export default App;
