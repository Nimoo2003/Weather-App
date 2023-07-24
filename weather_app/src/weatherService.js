require('dotenv-safe').config();

const fetch = require('node-fetch');


const API_KEY = process.env.API_KEY;

const getFormattedWeather = async (city, units = 'metric') => {
  
  
    const baseURL = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}'; // Replace this with the actual API URL
    const URL = `${baseURL}?q=${city}&units=${units}&appid=${API_KEY}`;

  try {
    
    const response = await fetch(URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
    return data; 
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
};

module.exports = { getFormattedWeather };

// const URL = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}';


