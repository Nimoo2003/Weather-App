import hotBg from "./assets/sunny.jpg"
import coldBg from "./assets/cold.jpg"
import Description from "./components/Description";
import { useEffect } from "react";
import { getFormattedWeather } from "./weatherService";


function App() {
  useEffect(() => {
    const fetchWeather = async () => {
    const data = await getFormattedWeather('paris');
    };
    fetchWeather();
  }, [])
  return (
    <div className="app" style={{backgroundImage: `url(${coldBg})`}}>
      <div className="overlay">
        <div className="container">
          <div className="section section__inputs">
            <input type="text" name="city" placeholder="Enter city..." />
            <button>F</button>
          </div>
          <div className="section section__temperature">
            <div className="icon">
              <h3>London, GB</h3>
              <img src="https://openweathermap.org/img/wn/02d@2x.png" alt="weatherIcon" />
              <h3>Cloudy</h3>
            </div>
            <div className="temperature">
              <h1>34 C</h1>
            </div>
          </div>
          { /* BOTTOM DESCRIPTION */}
          <Description />
        </div>
      </div>
    </div>
  );
}

export default App;
