import React from "react";
import './App.css';
import Header from "./Components/Header";
import MainWeather from "./Components/Middle";
import Lower from "./Components/Lower";
import FakeWeather from "./data/FakeWeather.json";

function App() {
  return (
    <div className="app">
      <Header/>
      <MainWeather/>
       <Lower/>
    </div>
  );
}

export default App;
