import hotBg from "./assets/sunny.jpg"
import coldBg from "./assets/cold.jpg"
import Description from "./components/Description";
import React, { useEffect, useState } from 'react';
import { getFormattedWeather } from "./weatherService";
function App() {

  const [weather , setWeather] = useState(null) ;
  const [units , setUnits] = useState('metric');


  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getFormattedWeather("paris");
      setWeather(data);
     
    };
    fetchWeatherData();
  },[]);

  return (
    <div className="app" style={{backgroundImage: `url(${coldBg})`}}>
      <div className="overlay">
        {
          weather && (
            <div className="container">
          <div className="section section__inputs">
            <input type="text" name="city" placeholder="Enter city..." />
            <button>F</button>
          </div>
          <div className="section section__temperature">
            <div className="icon">
              <h3>{`${weather.name} , ${weather.country}`}</h3>
              <img src={weather.iconURL} alt="weatherIcon" />
              <h3>{weather.description}</h3>
            </div>
            <div className="temperature">
              <h1>{`${weather.temp.toFixed()} ${units === 'metric' ? 'C' : 'F'}`}</h1>
            </div>
          </div>
          { /* BOTTOM DESCRIPTION */}
          <Description weather={weather} units={units} />
        </div>

        )} 
        
      </div>
    </div>
  );
}

export default App;
